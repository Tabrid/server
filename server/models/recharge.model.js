import mongoose from "mongoose";

const RechargeRequestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

const RechargeRequest = mongoose.model(
  "RechargeRequest",
  RechargeRequestSchema
);

export default RechargeRequest;
