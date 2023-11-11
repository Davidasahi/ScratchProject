const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bugSchema = new Schema({
  title: { type: String, required: true },
  technology: { type: [String], required: true }, 
  expected: { type: String, required: true },
  attempts: { type: String, required: true },
  assumptions: { type: String, required: true },
  status: { type: Boolean, required: true },
  solution: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
});

module.exports = mongoose.model('Bug', bugSchema);
