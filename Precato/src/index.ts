import "reflect-metadata";
import * as express from "express";
import * as BodyParser from "body-parser";
import * as cors from "cors";
import router from "./routes/routes";

const app = express ();
app.listen(8080, () => console.log("Server on!"))
app.use(BodyParser.json())
app.use(cors())
app.use("/", router)


