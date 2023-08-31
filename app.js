const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const authRouter = require("./routes/api/auth");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const { status = 500, message } = err;
  res.status(status).json({ message });
});

module.exports = app;
