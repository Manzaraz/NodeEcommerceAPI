require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  userRoute = require("./routes/user"),
  productRoute = require("./routes/product"),
  cartRoute = require("./routes/cart"),
  orderRoute = require("./routes/order"),
  authRoute = require("./routes/auth");

//  db Connection
const db = require("./database/database.js");

db.connect();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

const listener = app.listen(process.env.PORT || 3500, () => {
  console.log(`Yor App is listening on port ${listener.address().port}`);
});
