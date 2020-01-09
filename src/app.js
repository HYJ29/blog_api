import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import api from "@/routes/api";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", api);

export default app;
