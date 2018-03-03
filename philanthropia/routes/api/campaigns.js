const router = require("express").Router();
const campaignsController = require("../../controllers/campaignsController");

// Matches with "/api/books"
router.route("/")
  .get(campaignsController.findAll)
  .post(campaignsController.create);

// Matches with "/api/campaigns/:id"
router
  .route("/:id")
  .get(campaignsController.findById)
  .put(campaignsController.update)
  .delete(campaignsController.remove);

module.exports = router;
