const express = require("express");
const cors = require("cors");
const User = require("./models/UserModel");
const corsOptions = require("./config/corsConfig");
const connectDB = require("./config/dbConfig");

const app = express();
app.use(cors(corsOptions));
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is healthy");
});

app.post("/", async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = new User({
      name,
      password,
    });
    await user.save();
    console.log("user", user);
    res.status(200).send("successfully saved");
  } catch (ex) {
    res.status(500).send(ex.message);
  }
});

app.listen(5000, () => console.log("Server started on port 5000"));
