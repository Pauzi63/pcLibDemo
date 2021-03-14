import {
  TokenBasedAuthentication,
  UserInfo,
} from "./JwtAuthenticationInterfaces";
import { JwtToken } from "./JwtToken";
import { getToken, setToken } from "./tokenstorage";
import globals from "../../globals";

export class JwtAuthentication implements TokenBasedAuthentication {
  get token() {
    return this.serializedToken
      ? JwtToken.fromString(this.serializedToken)
      : null;
  }
  serializedToken: string | null;

  constructor() {
    this.serializedToken = getToken();
  }

  isAuthenticated() {
    if (
      this.serializedToken != null &&
      JwtToken.isValid(this.serializedToken)
    ) {
      const jwtToken = JwtToken.fromString(this.serializedToken);
      if (!JwtToken.isExpired(jwtToken)) {
        return true;
      }
    }

    return false;
  }

  authenticate(name: string, password: string) {
    return new Promise<string>((resolve, reject) => {
      if (this.isAuthenticated()) {
        return resolve(this.serializedToken!);
      }

      this.issueToken(name, password)
        .then((token) => {
          this.serializedToken = token;
          setToken(token);
          resolve(token);
        })
        .catch(reject);
    });
  }

  user() {
    return this.token as UserInfo;
  }

  private issueToken(name: string, pw: string) {
    return fetch(`${process.env.REACT_APP_API_URL}/Authentication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        networkId: name,
        // password: pw,
        application: globals.appName,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        return response.token;
      });
  }
}
