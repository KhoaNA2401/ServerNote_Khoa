import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { ServiceService } from "./service/service.service";
import { Note, NoteSchema } from "src/schemas/note.shemas";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
  ],
  providers: [ServiceService],
  exports: [ServiceService],
})
export class NotesModule {}
