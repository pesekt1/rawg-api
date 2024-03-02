import mongoose, { Schema, Document } from "mongoose";

export interface IGenre extends Document {
  _id: string;
  name: string;
  slug?: string;
}

export const genreSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String },
});

export default mongoose.model<IGenre>("Genre", genreSchema);
