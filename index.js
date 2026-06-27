import express from "express";
import { authRoute } from "./src/routes/auth.js";
import { menuRoute } from "./src/routes/menu.js";
import { orderRoute } from "./src/routes/order.js";

const app = express();

app.use("/api/auth", authRoute);

app.use("/api/menu", menuRoute);

app.use("/api/order", orderRoute);

app.listen(3000, () => console.log("Server is running"));
