const db = require("../models");

module.exports = {
  //define methods for controller

  findAllEvents: function (req, res) {
    db.Event.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    console.log(req.body);
    res.json("test");

    // db.User.updateOne(
    //   { _id: req.params.id },
    //   { $push: { accepted_events: req.body } }
    // )
    //   .then((dbModel) => {
    //     res.json(dbModel);
    //   })
    //   .catch((err) => {
    //     res.json(err);
    //   });
  },

  addEvent: function(req, res) {
    console.log(req.body)
    db.User.updateOne(
      { _id: { _id: req.user._id } }, 
      { $push: { accepted_events: req.body.id } })
    .then((dbModel) => {
      res.json(dbModel);
    })
    .catch((err) => {
      res.json(err);
    });
  }
  
};
