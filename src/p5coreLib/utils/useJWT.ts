import { JwtToken } from "../authentication/JwtToken";
import { getToken } from "../authentication/tokenstorage";

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
