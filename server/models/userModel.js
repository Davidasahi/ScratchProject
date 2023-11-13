const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  username: {type: String, required: [true, 'Username is required'], unique: true},
  email: {type: String},
  password: {type: String, required: [true, 'Password is required']},
  bugs: [{ type: Schema.Types.ObjectId, ref: 'Bug' }],
});

userSchema.pre('save', function(next){
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    // reassign the document's password to its hashed version
    this.password = hash;
    // this next call makes mongoose move on to the saving the document
    return next();
  })
})

module.exports = mongoose.model('User', userSchema);