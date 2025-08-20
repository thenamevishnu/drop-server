import express from "express";
import cors from "cors";
import morgan from "morgan";
import { env } from "./config/loadEnv.mjs";
import { db } from "./config/db.mjs";
import userRoute from "./routes/user.route.mjs";
import paymentRoute from "./routes/payment.route.mjs";

const app = express();

await db.connect();
app.use(cors({
    origin: env.CLIENT_URL,
    methods: "*",
}));
app.use(morgan("dev"));
app.use(express.json());

app.use("/v1/pay", paymentRoute)

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
})