import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  logo: {
    type: String,
    default: "https://via.placeholder.com/150",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
}, { timestamps: true });