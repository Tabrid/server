// FormSubmission.js

import mongoose from 'mongoose';

const apply = new mongoose.Schema({ 
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  nidNumber: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    default: 'pending'
  },
  file: {
    type: String,
  },
  note: {
    type: String,
    default: null
  }
});

const Apply = mongoose.model('Apply', apply);

export default Apply;
