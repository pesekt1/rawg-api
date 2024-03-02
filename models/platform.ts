import mongoose, { Schema, Document } from "mongoose";

export interface IPlatform extends Document {
  _id: string;
  name: string;
  slug: string;
  platforms?: IPlatform[];
}

export const platformSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
});

// Add the platforms field after the schema has been defined
platformSchema.add({ platforms: [platformSchema] });

export default mongoose.model<IPlatform>("Platform", platformSchema);
