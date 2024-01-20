import { Card } from "../domain/card";
import { CardRepository } from "../domain/repositories/card.repository";
import { Factory } from "./card.factory";

export class CardInfrastructure implements CardRepository {
  async create(token: string,card: Card, factory: Factory): Promise<void> {
    await factory.create(token,card);
  }
}
