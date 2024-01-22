export default class Card {
  readonly card_number: string;
  readonly cvv: string;
  readonly expiration_month: string;
  readonly expiration_year: string;
  readonly email: string;
  tokenCard: string;
  tokenJwt: string;

  constructor(
    card_number: string,
    cvv: string,
    expiration_month: string,
    expiration_year: string,
    email: string,
    tokenCard: string,
    tokenJwt: string,
    
  ) {
    this.card_number = card_number;
    this.cvv = cvv;
    this.expiration_month = expiration_month;
    this.expiration_year = expiration_year;
    this.email = email;
    this.tokenCard = tokenCard,
    this.tokenJwt = tokenJwt
  }
}
