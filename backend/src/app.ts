import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "./passport";
import authRoutes from "./authRoutes";

const app: Application = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

//Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Express With TypeScript!");
});

app.use("/auth", authRoutes);

export default app;