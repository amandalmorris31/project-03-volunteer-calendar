const router = require("express").Router();
const controller = require("../controllers/controller");

router.route("/").get(controller.findAllEvents);

router.route("/api/events/:id").put(controller.addEvent);

// router.route("/:id").get(controller.findById);

module.exports = router;
