import mongoose from "mongoose";
const { Schema } = mongoose;

const jobSchema = new Schema(
    {
        name: {type: String, required: true},
        address: {type: String, required: true},
        categories: {type: String, required: true},
        time: {type: String, required: true},
        company: {type: String, required: true},
    },
    { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;