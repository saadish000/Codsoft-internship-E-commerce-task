const mongoose = require("mongoose");
require("dotenv").config();
const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://saadisheikh000:saad1234@cluster0.htoif5o.mongodb.net/ecommerce?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((data) => {
      console.log(`Connected to MongoDB ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
