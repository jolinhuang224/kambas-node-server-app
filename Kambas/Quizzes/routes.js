import * as quizDao from "./dao.js";

export default function QuizRoutes(app) {
  app.post("/api/courses/:courseId/quizzes", async (req, res) => {
    const { courseId } = req.params;
    const newQuiz = { ...req.body, course: courseId };
    const quiz = await quizDao.createQuiz(newQuiz);
    res.json(quiz);
  });

  app.get("/api/courses/:courseId/quizzes", async (req, res) => {
    const { courseId } = req.params;
    const quizzes= await quizDao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  });

  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    await quizDao.updateQuiz(quizId, quizUpdates);
    res.sendStatus(204);
  });

  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    await quizDao.deleteQuiz(quizId);
    res.sendStatus(204);
  });

  app.get("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quiz = await quizDao.findQuiz(quizId);
    res.json(quiz);
  });
}
