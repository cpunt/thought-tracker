export class UserType {
  public loggedIn: boolean;
  public displayName: string;
  public email: string;

  constructor (loggedIn: boolean, displayName = '', email = '') {
    this.loggedIn = loggedIn
    this.displayName = displayName;
    this.email = email;
  }
}
