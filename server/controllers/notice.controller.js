import Notice from '../models/notice.model.js';

const createNotice = async (req, res) => {
  try {
    const { notice } = req.body;
    const newNotice = new Notice({ notice });
    await newNotice.save();
    res.status(201).json({ message: 'Notice created successfully' });
  } catch (err) {
    console.error('Error creating notice:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.status(200).json(notices);
  } catch (err) {
    console.error('Error getting notices:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { createNotice, getAllNotices };
