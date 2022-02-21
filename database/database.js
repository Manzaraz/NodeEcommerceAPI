const mongoose = require("mongoose");

exports.connect = () => {
  const mySecret = process.env["MONGO_URI"],
    connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    };
  mongoose
    .connect(mySecret, connectionParams)
    .then(() => {
      console.log("Database is successfully connected");
    })
    .catch((err) => {
      console.error(`Error connecting to the database: ${err}`);
    });

  return mongoose.connection;
};
