import { CardApplication } from "../../application/card.application";
import { Card } from "../../domain/card";

export class CardController {
  constructor(private cardApplication: CardApplication) {}

  async create(token: string, card: Card) {
    console.log(token)
    console.log(card)
    await this.cardApplication.create(token,card);
  }
}
