import mongoose from "mongoose";

const ManagerSchema = new mongoose.Schema({
  manName: {
    type: String,
  },
  department: {
    type: mongoose.Schema.Types.String,
    ref: "Department",
  },
  contactNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Manager = mongoose.model("Manager", ManagerSchema);

export default Manager;
