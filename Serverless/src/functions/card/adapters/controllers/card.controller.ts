import { CardApplication } from "../../application/card.application";
import { Card } from "../../domain/card";

export class CardController {
  constructor(private cardApplication: CardApplication) {}

  async find(tokenAuth: string) : Promise<Card> {
    console.log('tokenAuth',tokenAuth)
    return await this.cardApplication.find(tokenAuth);
  }
}
