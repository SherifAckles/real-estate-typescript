import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.Mongo_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongo db  connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "Mongo db  connection error  make sure mongodb is running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
}
