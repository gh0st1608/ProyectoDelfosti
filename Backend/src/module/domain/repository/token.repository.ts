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
export default interface TokenRepository {
  insert(token: string, tokenJwt: string): Promise<void>; //set  
}
