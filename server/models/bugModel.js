const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bugSchema = new Schema({
  title: { type: String },
  whatProblem: { type: String },
  whatHappen: { type: String },
  whatTry: { type: String },
  whySuspect: { type: String },
  errorCode: { type: String },
  solution: { type: String },
  // technology: { type: [String] },
  solved: { type: Boolean },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Bug', bugSchema);
