const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  product: { type: String, required: true },
  query: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Inquiry", InquirySchema);
