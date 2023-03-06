const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    severity: {
      type: String,
      required: true
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
