import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
  notice: {
    type: String,
    required: true
  }
});

const Notice = mongoose.model('Notice', noticeSchema);

export default Notice;
