import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "recruiter", "admin"],
      required: true,
    },
    profile: {
      bio: String,
      skills: [{ type: String }],
      resume: { type: String }, // URL to resume file
      resumeFileName: { type: String },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      profilePhoto: {
        type: String,
        default: "https://via.placeholder.com/150",
      },
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
