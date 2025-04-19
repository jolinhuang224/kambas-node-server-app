import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        title: { type: String, default: "New Quiz" },
        course: String,
        availablity: String,
        duedate: String,
        points: Number,
        questioncount: Number,
        score: Number,
    },
    { collection: "quizzes" }
);

export default QuizSchema;
