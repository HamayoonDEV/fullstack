import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRouter from "./routes/posts.js";

const app = express();

app.use(
  bodyparser.json({
    limit: "30mb",
    extented: true,
  })
);
app.use(
  bodyparser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use(cors());

app.use("/posts", postRouter);

const CONNECTION_URL =
  "mongodb+srv://hamayoonkhan:hamayoon123@hamayooncluster.ewdssez.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server is runing on PORT ${PORT}`))
  )
  .catch((err) => console.log(err.message));
