import mongoose from "mongoose";

var gallerySchema = new mongoose.Schema({
  src: String,
});

const Gallery = mongoose.model("gallery", gallerySchema);
export default Gallery;
