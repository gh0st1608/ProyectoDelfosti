import { CardApplication } from "../../application/card.application";
import { Card } from "../../domain/card";

export class CardController {
  constructor(private cardApplication: CardApplication) {}

  async create(card: Card) {
    return await this.cardApplication.create(card);
  }
}
