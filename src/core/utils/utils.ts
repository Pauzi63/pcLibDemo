import { JwtToken } from "../authentication/JwtToken";
import { getToken } from "../authentication/tokenstorage";

export function makeSearchUrl(url: string, filter: { [key: string]: any }) {
  const urlSep = url.indexOf("?") === -1 ? "?" : "&";
  let query = url + urlSep;

  // tslint:disable-next-line:forin
  for (const x in filter) {
    query += `${x}=${filter[x]}&`;
  }
  // Das letzte "&" wieder entfernen (zweck der Optik)
  return query.slice(0, query.length - 1);
}

export function getEmployeeAlternateAXIdFromToken(): string {
  const serializedToken: string | null = getToken();
  if (serializedToken != null) {
    return JwtToken.fromString(serializedToken).EmployeeAlternateAXId;
  } else {
    return "";
  }
}

export function getRoleFromToken(): string {
  const serializedToken: string | null = getToken();
  if (serializedToken != null) {
    return JwtToken.fromString(serializedToken).Role;
  } else {
    return "";
  }
}

export function getFullNameFromToken(): string {
  const serializedToken: string | null = getToken();
  if (serializedToken != null) {
    return JwtToken.fromString(serializedToken).FullName;
  } else {
    return "";
  }
}
