const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    severity: {
      type: String,
      enum: ["Critical", "Major", "Medium", "Low"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const bugModel = mongoose.model("bug", bugSchema);

module.exports = {
  bugModel,
};
