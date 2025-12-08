import { Router } from "express";
import {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingController";
import { requireAuth } from "../middleware/authMiddleware";

const router = Router();

router.post("/", requireAuth, createBooking);
router.get("/", requireAuth, getBookings);
router.put("/:id", requireAuth, updateBooking);
router.delete("/:id", requireAuth, deleteBooking);

export default router;
