import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Note {
  @Prop()
  id: string;
  
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  createAt: number;
}
export const NoteSchema = SchemaFactory.createForClass(Note);
export type NoteDocument = Note & Document;
