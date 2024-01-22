import mongoose,  { Schema, Model, Document } from "mongoose";

class CardModel {
  private readonly cardSchema: Schema;

  constructor() {
    this.cardSchema = new Schema({
      tokenCard: {
        type: String,
        trim: true
      },
      tokenJwt: {
        type: String,
        trim: true
      },
    },
    { 
      collection: 'card' 
    });
  }

  get model(): Model<any> {
    return mongoose.model("Card", this.cardSchema);
  }
}

export default new CardModel().model;
