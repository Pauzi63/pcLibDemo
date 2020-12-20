import decode from "jwt-decode";

interface UserInfo {
  aud: string;
  exp: number;
  iss: string;
  jti: string;
  nbf: number;
  sub: string;
}

class JwtToken {
  aud: string;
  exp: number;
  iss: string;
  jti: string;
  nbf: number;
  sub: string;
  FullName: string;
  Role: string;
  NetworkId: string;
  EmployeeAlternateAXId: string;

  constructor(
      aud: string, exp: number, iss: string, jti: string, nbf: number, sub: string, 
      FullName: string, Role: string, NetworkId: string, EmployeeAlternateAXId: string) {
    this.aud = aud;
    this.exp = exp;
    this.iss = iss;
    this.jti = jti;
    this.nbf = nbf;
    this.sub = sub;
    this.FullName = FullName;
    this.Role = Role;
    this.NetworkId = NetworkId;
    this.EmployeeAlternateAXId = EmployeeAlternateAXId;
  }

  static fromString(data: string) {
    return decode(data) as JwtToken;
  }

  static isValid(data: string) {
    try {
      decode(data);
      return true;
    } catch {
      return false;
    }
  }

  static isExpired(token: JwtToken) {
    const currentTime = new Date().getTime() / 1000;
    // window.console.log("EXP", token.exp - currentTime, "sek");
    return currentTime > token.exp;
  }
}

const TOKEN_KEY = "KRM_NETWORK_STATS_JWT_TOKEN";
const getToken = () => { return window.sessionStorage.getItem(TOKEN_KEY); }
const setToken = (token: string) => { window.sessionStorage.setItem(TOKEN_KEY, token); }
// const clearToken = () => { window.sessionStorage.removeItem(TOKEN_KEY); }

interface TokenBasedAuthentication {
  isAuthenticated: () => boolean;
  authenticate: (name: string, password: string) => Promise<string>;
  user: () => UserInfo;
  token: UserInfo | null;
  serializedToken: string | null;
}

export class JwtAuthentication implements TokenBasedAuthentication {
  get token() {
    return this.serializedToken ? JwtToken.fromString(this.serializedToken) : null;
  }
  serializedToken: string | null;

  constructor() {
    this.serializedToken = getToken();
  }

  isAuthenticated() {
    if (this.serializedToken != null && JwtToken.isValid(this.serializedToken)) {
      const jwtToken = JwtToken.fromString(this.serializedToken);
      return !JwtToken.isExpired(jwtToken);
    }
    return false;
  }

  authenticate(name: string, password: string) {
    return new Promise<string>((resolve, reject) => {
      if (this.isAuthenticated()) {
        return resolve(this.serializedToken!);
      }

      fetch(`${process.env.REACT_APP_API_URL}/Authentication`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          networkId: name,
          // password: password,
          application: "KrmNetworkStats",
        }),
      })
      .then((response) => response.json())
      .then((response) => { return response.token;})
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
}
