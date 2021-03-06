const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
          type: String,
          required: true,
          min: 3,
          max: 20,
          unique: true,
        },
        email: {
          type: String,
          required: true,
          max: 20,
          unique: true,
        },
        password: {
          type: String,
          required: true,
          min: 6,
          max:20,
          unique:true
        },
        profilePicture: {
          type: String,
          default: "",
        },
        coverPicture: {
          type: String,
          default: "",
        },
        followers: {
          type: Array,
          default: [],
        },
        followings: {
          type: Array,
          default: [],
        },
        isAdmin: {
          type: Boolean,
          default: false,
        },
        desc: {
          type: String,
          max: 50,
          required:false
        },
        city: {
          type: String,
          max: 10,
          required:false
        },
        from: {
          type: String,
          max: 10,
          required:false
        },
        relationship: {
          type: String,
          required:false,
        },
      },
      { timestamps: true }

);

module.exports = mongoose.model("User", UserSchema);
