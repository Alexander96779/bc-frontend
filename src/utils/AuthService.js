export default class AuthService {
  static setToken(token) {
    localStorage.setItem('broadcaster_token', token);
  }

  static getToken() {
    return localStorage.getItem('broadcaster_token');
  }

  static isLoggedIn() {
    return !!localStorage.getItem('broadcaster_token');
  }
}
