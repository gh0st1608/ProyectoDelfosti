import { v4 as uuidv4 } from 'uuid'
import jwt from "jwt-simple";
import moment from 'moment';
import EnvironmentVariables from "./app.service";



export default class TokenService {


   static validateToken(tokenCard: string) {
    return new Promise((resolve, reject) => {
      try {
        console.log(tokenCard)
        const payload = jwt.decode(
          tokenCard,
          EnvironmentVariables.TOKEN_SECRET_WORD
        );
        console.log(payload)
        resolve(payload);
      } catch (error: any) {
        console.log(error)
        if (error.message === "Token expired") {
          reject({ status: 409, message: "El token de la tarjeta ha expirado" });
        } else {
          reject({ status: 401, message: "El token ingresado no es válido" });
        }
      }
    });
  }

  static generate = (length: number = 16): string => {
    /* if (typeof length !== 'number') return false
    if (length < 16 || length > 16) return false */
  
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength: number = characters.length
    let token: string = ''
  
    for (let i: number = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return token
  }

   static signIn(card: Object, tokenExpiration: number = EnvironmentVariables.TOKEN_TIMEOUT): string{

    const payload = {
      card: card,
      iat: moment().unix(),
      exp: moment().add(EnvironmentVariables.TOKEN_TIMEOUT, "minutes").unix(),
    };
    return jwt.encode(payload, EnvironmentVariables.TOKEN_SECRET_WORD);
}}
