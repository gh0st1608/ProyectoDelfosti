export default class CardResponse{
    readonly cardNumber: string;
    readonly expirationMonth: string;
    readonly expirationYear: string;
  
    constructor(
      cardNumber: string,
      expirationMonth: string,
      expirationYear: string,
    ) {
      this.cardNumber = cardNumber;
      this.expirationMonth = expirationMonth;
      this.expirationYear = expirationYear;
    }
  }