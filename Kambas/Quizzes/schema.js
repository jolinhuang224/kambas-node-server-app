import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
    {
        _id: String,
        title: { type: String, default: "New Quiz" },
        description : String,
        course: String,
        assignmentgroup: {type: String, default: "Quizzes"}, //change to enum
        shuffle: {type: Boolean, default: true},
        timelimit: {type: Number, default: 20},
        multipleattempts: {type: Boolean, default: false},
        maxattempts: {type: Number, default: 1},
        showcorrectanswers: {type: Boolean, default: false},
        accesscode: {type: String, default: ""},
        onequestion: {type: Boolean, default: true},
        webcam: {type: Boolean, default: false},
        lockquestions: {type: Boolean, default: false},
        duedate: String,
        points: Number,
        questioncount: Number,
        taken: {type: Boolean, default: false},
        score: {type: Number, default: 0},
        published: {type: Boolean, default: false},
        availabledate: {type: String, required: false},  
        untildate: {type: String, required: false},
    },
    { collection: "quizzes" }
);

export default quizSchema;
