import { Factory } from "../../infrastructure/card.factory";
import { Card } from "../card";

export interface CardRepository {
  find(payload: Card, factory : Factory) : Promise<Card>;
}
