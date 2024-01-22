import { CardApplication } from "../../application/card.application";
import { Card } from "../../domain/card";

export class CardController {
  constructor(private cardApplication: CardApplication) {}

  async find(tokenCard: string) : Promise<Card> {
    console.log('controller',tokenCard)
    return await this.cardApplication.find(tokenCard);
  }
}
