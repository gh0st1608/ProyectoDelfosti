import { Factory } from "../../infrastructure/card.factory";
import { Card } from "../card";

export interface CardRepository {
  create(token: string,card: Card, factory: Factory) : Promise<void>;
}
