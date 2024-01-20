export interface CardFieldsRequired {
  readonly card_number: string;
  readonly cvv: string;
  readonly expiration_month: string;
  readonly expiration_year: string;
  readonly email: string;
}

export type FieldsRequired = Required<CardFieldsRequired>;

export class Card {
  readonly card_number: string;
  readonly cvv: string;
  readonly expiration_month: string;
  readonly expiration_year: string;
  readonly email: string;
  token: string;

  constructor(properties: FieldsRequired) {
    Object.assign(this, properties);
  }
}
