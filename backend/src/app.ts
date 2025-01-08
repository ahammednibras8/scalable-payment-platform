import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Express With TypeScript!");
});

export default app;