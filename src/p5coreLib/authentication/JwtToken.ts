import jwt_decode from "jwt-decode";
import { Token } from "./Token";

export class JwtToken extends Token {
  static fromString(data: string) {
    return jwt_decode(data) as JwtToken;
  }
  static isValid(data: string) {
    try {
      jwt_decode(data);
      return true;
    } catch {
      return false;
    }
  }

  static isExpired(token: JwtToken) {
    const currentTime = new Date().getTime() / 1000;
    /* window.console.log("EXP", token.exp - currentTime, "sek"); */
    return currentTime > token.exp;
  }
}
