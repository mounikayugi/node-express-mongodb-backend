const mongoose = require('mongoose');

const UserSchema = mongoose.Schema
(
  {
    name: { type: String, required:[true, "please enter user name"], },
    email: {type: String, required:true, default:0,},
    Password:{type: String,required:true,},
    age: { type: Number, min: 18, index: true, },
    //bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now, },
    image: {type:String, required:false,}
    //buff: Buffer
  },
  {
    timestamps:true,
  }
);

const Users = mongoose.model("userData",UserSchema);
module.exports = Users;