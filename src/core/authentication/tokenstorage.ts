const JWT_TOKEN_KEY = process.env.REACT_APP_JWT_TOKEN_KEY
  ? process.env.REACT_APP_JWT_TOKEN_KEY
  : "JWT_TOKEN_KEY";

export function getToken() {
  return window.sessionStorage.getItem(JWT_TOKEN_KEY);
}

export function clearToken() {
  window.sessionStorage.removeItem(JWT_TOKEN_KEY);
}

export function setToken(token: string) {
  window.sessionStorage.setItem(JWT_TOKEN_KEY, token);
}
