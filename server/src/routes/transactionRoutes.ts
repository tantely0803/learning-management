import express from "express";
import {
  listTransactions,
  createStripePaymentIntent,
  createTransaction,
} from "../controllers/transactionController";

const router = express.Router();

router.get("/", listTransactions);
router.post("/", createTransaction);
router.post("/stripe/payment-intent", createStripePaymentIntent);

export default router;
