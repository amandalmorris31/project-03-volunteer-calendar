const db = require("../models");

module.exports = {

    //define methods for controller
    
    // findAllEvents: function(req,res) {

    //     db.Event
    //     .find(req.query)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },

    getUserById : function(req,res) {

        db.User
        .findOne({_id:req.params.id},
        ).then((dbModel) => {
          res.json(dbModel)
        })
    },

    update: function (req, res) {
        db.User.updateOne(
          { _id: req.params.id },
          { $push: { accepted_events: req.body } }
        )
          .then((dbModel) => {
            res.json(dbModel);
          })
          .catch((err) => {
            res.json(err);
          });
      },

   



}