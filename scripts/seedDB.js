const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/volunteercalendar"
);

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
