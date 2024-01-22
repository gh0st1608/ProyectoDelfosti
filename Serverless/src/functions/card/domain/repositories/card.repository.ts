import { Factory } from "../../infrastructure/card.factory";
import { Card } from "../card";

export interface CardRepository {
  find(payload: string, factory : Factory) : Promise<Card>;
}
