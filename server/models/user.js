import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false },
  id: { type: String },
});

export default mongoose.model("User", userSchema);