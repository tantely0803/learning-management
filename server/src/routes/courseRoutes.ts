import express from "express";
import multer from "multer";
import {
  listCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getUploadVideoUrl,
} from "../controllers/courseController";
import { requireAuth } from "@clerk/express";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", listCourses);
router.get("/:courseId", getCourse);
router.post("/", requireAuth(), createCourse);
router.put("/:courseId", requireAuth(), upload.single("image"), updateCourse);
router.delete("/:couseId", requireAuth(), deleteCourse);
router.post(
  "/:courseId/sections/:sectionId/chapters/:chapterId/get-upload-url",
  requireAuth(),
  getUploadVideoUrl
);

export default router;
