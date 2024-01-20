import { Card } from "../domain/card";
import { CardRepository } from "../domain/repositories/card.repository";
import { Factory } from "./card.factory";

export class CardInfrastructure implements CardRepository {
  async find(payload: Card, factory: Factory): Promise<Card> {
    return await factory.find(payload)
  }
}
