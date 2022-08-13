import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from "@nestjs/common";

import { ServiceService } from "src/note/notes/service/service.service";
import { Note } from "src/schemas/note.shemas";

@Controller("note")
export class NoteController {
  constructor(private noteServices: ServiceService) {}

  @Get("/all")
  public async getAllNotes() {
    return await this.noteServices.findAll();
  }
  @Get("/")
  public async getNoteById(@Query("id") id: string) {
    return await this.noteServices.findById(id);
  }
  @Post("/")
  public async createNote(@Body() note: Note) {
    return await this.noteServices.create(note);
  }
  @Put("/")
  public async updateNote(@Body() note: Note) {
    return await this.noteServices.updateNote(note.id, note);
  }
  @Delete("/")
  public async deleteNote(@Query("id") id: string) {
    return await this.noteServices.deleteNote(id);
  }
}
