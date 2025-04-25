import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: uuidv4() };
    return model.create(newQuiz);
}

export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
}

export function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
}

export function updateQuiz(quizId, quizUpdates) {
    return model.updateOne({ _id: quizId }, { $set: quizUpdates });
}

export function findQuiz(quizId) {
    return model.findById(quizId);
}

export function onPublish(quizId) {
    return model.updateOne({ _id: quizId }, [
        { $set: { published: { $not: "$published" } } }
    ]);
}
export function findPublishedQuizzesForCourse(courseId) {
    return model.find({ course: courseId, published: true });
}

export function updateQuestion(quizId, questionId, questionUpdates) {
    return model.updateOne(
        { _id: quizId, "questions.id": questionId },
        { $set: { "questions.$": questionUpdates } }
    );
}