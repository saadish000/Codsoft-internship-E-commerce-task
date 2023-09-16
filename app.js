const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const errorMiddleware = require("./middleware/error.js");
app.use(express.json());
app.use(cookieParser());

const productRoute = require("./routes/product.routes.js");
const userRoute = require("./routes/user.routes.js");
const orderRoute = require("./routes/order.routes.js");

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);

app.use(errorMiddleware);

module.exports = app;
