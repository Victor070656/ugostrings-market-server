const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRoutes = require("./routes");
const { sequelize, db, connectToDB } = require("./db");

const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors);

// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Done" });
});

app.use("/api", apiRoutes);

// running
app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);
  // connect to db
  await connectToDB();
});
