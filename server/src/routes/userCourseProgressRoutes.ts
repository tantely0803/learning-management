import express from "express";
import {
  getUserCourseProgress,
  getUserEnrolledCoures,
  updateUserCourseProgress,
} from "../controllers/userCourseProgressController";

const router = express.Router();

router.get("/:userId/enrolled-courses", getUserEnrolledCoures);
router.post("/:userId/courses/:courseId", getUserCourseProgress);
router.put("/:userId/courses/:courseId", updateUserCourseProgress);

export default router;
 