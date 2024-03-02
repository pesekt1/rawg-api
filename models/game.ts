import mongoose, { Schema, Document } from "mongoose";
import { IPlatform, platformSchema } from "./platform";
import { IGenre, genreSchema } from "./genre";

export interface IGame extends Document {
  name: string;
  background_image?: string;
  parent_platforms?: { platform: IPlatform }[];
  metacritic?: number;
  genres?: IGenre[];
}

const gameSchema: Schema<IGame> = new Schema({
  name: { type: String, required: true },
  background_image: { type: String },
  parent_platforms: [{ platform: platformSchema }],
  metacritic: { type: Number },
  genres: [genreSchema],
});

export default mongoose.model<IGame>("Game", gameSchema);
