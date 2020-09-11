const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/events");
const keys = require("./config/keys");

require("./services/passport");

const db = require("./models/index");

const app = express();
app.use(require("cookie-parser")());

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 45 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/volunteercalendar",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

require("./routes/authRoutes")(app);
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
