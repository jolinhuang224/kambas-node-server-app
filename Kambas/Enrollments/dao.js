import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(enrollmentId) {
    const { enrollments } = Database;
    const index = enrollments.findIndex(e => e._id === enrollmentId);
    if (index !== -1) {
        enrollments.splice(index, 1);
    }
}

export function findEnrollmentByCourseAndUser(userId, courseId) {
    const { enrollments } = Database;
    return enrollments.find(
        e => e.user === userId && e.course === courseId
    );
}