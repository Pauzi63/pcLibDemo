export abstract class Token {
  aud: string = "";
  exp: number = 0;
  iss: string = "";
  jti: string = "";
  nbf: number = 0;
  sub: string = "";
  FullName: string = "unbekannt";
  Role: string = "unbekannt";
  NetworkId: string = "unbekannt";
  EmployeeAlternateAXId: string = "unbekannt";
  UserAccountGuid: string = "00000000-0000-0000-0000-000000000000";
}
