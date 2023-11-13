const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bugSchema = new Schema({
  title: { type: String, required: true },
  problem: { type: String },
  technology: { type: [String] }, 
  expected: { type: String },
  attempts: { type: String },
  assumptions: { type: String },
  status: { type: Boolean },
  solution: { type: String },
  errorCode: { type: String }, 
  userId: { type: Schema.Types.ObjectId, ref: 'User' }, 
});

module.exports = mongoose.model('Bug', bugSchema);
