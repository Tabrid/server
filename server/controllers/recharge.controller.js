import RechargeRequest from "../models/recharge.model.js";
import User from "../models/user.model.js";

export const createRechargeRequest = async (req, res) => {
  try {
    const userId = req.user._id;
    const {  amount, transId } = req.body;
    const rechargeRequest = await RechargeRequest.create({
      userId,
      amount,
      transId,
    });
    res.status(201).json({ status: "success", data: rechargeRequest });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
};

export const rejectRechargeRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const rechargeRequest = await RechargeRequest.findByIdAndUpdate(
      id,
      { status: "rejected" },
      { new: true }
    );
    res.status(200).json({ status: "success", data: rechargeRequest });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
};


export const approveRechargeRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const rechargeRequest = await RechargeRequest.findById(id);

    if (!rechargeRequest) {
      return res
        .status(404)
        .json({ status: "error", message: "Recharge request not found" });
    }

    if (rechargeRequest.status !== "pending") {
      return res
        .status(400)
        .json({
          status: "error",
          message: "Recharge request has already been processed",
        });
    }

    // Retrieve user associated with the recharge request
    const user = await User.findById(rechargeRequest.userId);
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    // Add recharge amount to user's balance
    user.balance += rechargeRequest.amount;

    // Update user's balance
    await user.save();

    // Update recharge request status
    rechargeRequest.status = "approved";
    await rechargeRequest.save();

    res
      .status(200)
      .json({
        status: "success",
        message: "Recharge request approved successfully",
      });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};


export const getAllRechargeRequests = async (req, res) => {
  try {
    // Fetch all recharge requests from the database
    const rechargeRequests = await RechargeRequest.find();

    // If there are no recharge requests, return an empty array
    if (!rechargeRequests || rechargeRequests.length === 0) {
      return res.status(404).json({ message: 'No recharge requests found' });
    }

    // If recharge requests are found, return them
    res.status(200).json(rechargeRequests);
  } catch (error) {
    // If an error occurs, return an error message
    res.status(500).json({ message: error.message });
  }
};

export const getByUserId = async (req, res) => {
  const userId = req.user._id;

  try {
    const rechargeRequests = await RechargeRequest.find({ userId });
    res.status(200).json(rechargeRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
