const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Campaigns collection and inserts the campaigns below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/philanthropa",
  {
    useMongoClient: true
  }
);

const campaignSeed = [
  {
    campaignName: { type: String, required: true },
    campaignPurpose: { type: String, required: true },
    campaignGoal: { type: String, required: true },
    campaignExpiration: { type: Date, default: Date.now },
    campaignImage: {type: String}
  }
  

db.Campaign
  .remove({})
  .then(() => db.Campaign.collection.insertMany(campaignSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
