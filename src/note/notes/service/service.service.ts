import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Note, NoteDocument } from "src/schemas/note.shemas";

@Injectable()
export class ServiceService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async create(note: Note) {
    //note.createAt = Date.now();

    let createNote = new this.noteModel(note);
    //createNote.createAt =  Date.now();
    createNote.id = createNote._id;
    createNote.createAt = new Date().toLocaleString();
    return await createNote.save();
  }

  async findAll() {
    return await this.noteModel.find().exec();
  }

  async findById(id: string) {
    return await this.noteModel.findById(id).exec();
  }
  async updateNote(id: string, note: Note) {
    return await this.noteModel
      .findByIdAndUpdate({ _id: id }, note, { new: true })
      .exec();
  }
  async deleteNote(id: string) {
    return await this.noteModel.findByIdAndDelete(id).exec();
  }
}
