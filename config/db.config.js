const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", {
    dbName: "twisks_db",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connection.on('connected',()=>{
    console.log("Connected to db");
})
mongoose.connection.on('disconnected',()=>{
    console.log("Disconnected to db");
})

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
