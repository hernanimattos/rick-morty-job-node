import mongoose from 'mongoose';

const { Schema } = mongoose;

const dimensionsSchema = new Schema({
  character: String,
  image: String,
  dimensions_count: Number,
});

const modelDimensions = mongoose.model('dimensions', dimensionsSchema);

export default modelDimensions;
