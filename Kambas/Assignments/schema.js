import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        course: String,
        available: String,
        availableuntil: String,
        duedate: String,
        points: Number,
        description: String
    },
    { collection: "assignments" }
);

export default schema;