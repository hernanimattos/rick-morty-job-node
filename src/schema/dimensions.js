import mongoose from 'mongoose';

const { Schema } = mongoose;

const Dimensions = new Schema({
  character: String,
  image: String,
  dimensions_count: Number,
});

export default Dimensions;
