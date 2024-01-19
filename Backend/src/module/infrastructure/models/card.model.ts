import mongoose,  { Schema, Model, Document } from "mongoose";

class CardModel {
  private readonly cardSchema: Schema;

  constructor() {
    this.cardSchema = new Schema({
      cardNumber: {
        type: String,
        required: false,
        trim: true
      },
      cvv: {
        type: Number,
        trim: true
      },
      expirationMonth: {
        type: Number,
        trim: true
      },
      expirationYear: {
        type: Number,
        trim: true
      },
      email: {
        type: String,
        trim: true
      },
      token: {
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
