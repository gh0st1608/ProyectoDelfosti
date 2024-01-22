import jwt from "jwt-simple";
import moment from "moment";

export class Token {
     static signIn(card : Object): string {
      const payload = {
        card : card,
        iat: moment().unix(),
        exp: moment().add(15, "minutes").unix(),
      };
  
      return jwt.encode(payload, process.env.JWT_SECRET);
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


  }
  
  