// server/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  documents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Document' }],
});

module.exports = mongoose.model('User', userSchema);
