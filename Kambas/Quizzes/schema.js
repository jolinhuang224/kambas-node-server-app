import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
    {
        _id: String,
        title: { type: String, default: "New Quiz" },
        course: String,
        availability: String,
        duedate: String,
        points: Number,
        questioncount: Number,
        taken: {type: Boolean, default: false},
        score: {type: Number, default: 0},
        published: {type: Boolean, default: false},
    },
    { collection: "quizzes" }
);

export default quizSchema;
