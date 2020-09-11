const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/volunteercalendar"
);

<<<<<<< HEAD
const volunteerSeed =[
    {
    first_name: "Amanda",
      last_name: "Morris",
      email: "amandalmorris31@gmail.com",
      picture: "",
      admin: false
    }
=======
const volunteerSeed = [
  {
    first_name: "Amanda",
    last_name: "Morris",
    email: "amandalmorris31@gmail.com",
    picture: "",
    accept_evt: "",
    decline_evt: "",
    admin: false,
  },
>>>>>>> 47f5a29b6cbb9f51274c5f896cd193889d43d9f6
];
const eventSeed = [
  {
    event_name: "",
    date: "",
    location: "",
    time: "",
  },
];

db.Event.remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(volunteerSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
