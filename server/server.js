const express = require("express");
require("dotenv").config();
const usersRoutes = require("./routes/users.js");

const app = express();

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/users", usersRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Application started on port ${process.env.PORT}`)
);
