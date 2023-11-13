const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
Schema for doucuments that store session information in database

cookieId is string equal the to the value of the cookie named `ssid` (which is equal to the user's id)

createdAt is Date with expires property that utilizes the expiration service automatic document and session document will be removed from collection after expiration

*/

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true},
  createdAt: { type: Date, expires: 300000, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);