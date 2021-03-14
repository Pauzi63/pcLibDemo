export interface Authentication {
  isAuthenticated: () => boolean;
  authenticate: (name: string, password: string) => Promise<string>;
  user: () => UserInfo;
}

export interface TokenBasedAuthentication extends Authentication {
  token: UserInfo | null;
  serializedToken: string | null;
}

export interface UserInfo {
  aud: string;
  exp: number;
  iss: string;
  jti: string;
  nbf: number;
  sub: string;
}
