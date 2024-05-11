// server/models/Document.ts

import { Schema, model, Document } from 'mongoose';

const documentSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export default model<Document>('Document', documentSchema);
