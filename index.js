const express = require("express");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/user.routes");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

app.use("/users", userRouter);


app.listen(4500, async () => {
  try {
    await connection;
    console.log("Server has been started on 4500");
  } catch (err) {
    console.log(err);
  }
});
