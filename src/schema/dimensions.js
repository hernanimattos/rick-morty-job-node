import Mongoose from 'mongoose';

const { Schema } = Mongoose;

const Dimensions = new Schema({
  character: String,
  image: String,
  dimensions_count: Number,
});

export default Dimensions;
