import { Router } from "express"
import paymentController from "../controllers/payment.controller.mjs";

const paymentRoute = Router();

paymentRoute.post("/invoice", paymentController.createPayment)

export default paymentRoute