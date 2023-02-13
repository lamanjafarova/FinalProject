import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import jobRoutes from "./routes/job.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/jobs", jobRoutes);

const port = 8080;
mongoose
  .connect("mongodb+srv://lemanjaffar:lemanjaffar@cluster0.o26j4pn.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("DB Connected");
      console.log(`url: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

