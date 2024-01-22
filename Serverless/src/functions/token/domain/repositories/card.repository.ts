import { Factory } from "../../infrastructure/card.factory";
/* import { Card } from "../card"; */

export interface CardRepository {
  create(tokenCard: string, tokenJwt: string, factory: Factory) : Promise<string>;
}
