import { Card } from "../domain/card";
import { CardRepository } from "../domain/repositories/card.repository";
import { Factory } from "./card.factory";

export class CardInfrastructure implements CardRepository {
  async create(tokenCard: string,tokenJwt: string, factory: Factory): Promise<string> {
    return await factory.create(tokenCard,tokenJwt);
  }
}
