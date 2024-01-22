import Card from "../card";

/*
interface PaymentInformationRepository {
  setPaymentInformationWithExpiration: (
    key: string,
    value: PaymentInformationWithToken,
    expiration?: number
  ) => Promise<void>;
  getPaymentInformation: (
    key: string
  ) => Promise<PaymentInformationWithToken | null>;
}

*/
export default interface CardRepository {
  //insert(token: string, card : Card): Promise<void>; //set
  findOne(where: { [s: string]: string | number }): Promise<Card | null>;
  //find(token: string): Promise<CardResponse>; //get
  
}
