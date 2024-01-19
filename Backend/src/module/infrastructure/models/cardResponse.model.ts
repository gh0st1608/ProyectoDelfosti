import mongoose,  { Schema, Model, Document } from "mongoose";

class CardResponseModel {
  private readonly cardResponseSchema: Schema;

  constructor() {
    this.cardResponseSchema = new Schema({
      card_number: {
        type: String,
        required: false,
        trim: true
      },
      expiration_month: {
        type: Number,
        trim: true
      },
      expiration_year: {
        type: Number,
        trim: true
      },
    },
    { 
      collection: 'cardResponse' 
    });
  }

  get model(): Model<any> {
    return mongoose.model("CardResponse", this.cardResponseSchema);
  }
}

export default new CardResponseModel().model;
