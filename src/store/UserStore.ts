import { observable, action, makeObservable } from "mobx";

class UserStore {
  @observable firstName: string = "Jackson";
  @observable lastName: string = "Kalmbach";
  @observable email: string = "jacksonrkalmbach@gmail.com";

  constructor() {
    makeObservable(this);
  }

  @action logIn(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    // Add additional logic for handling user login
  }

  @action logOut() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    // Add additional logic for handling user logout
  }

  // Add other actions and computed values as necessary
}

export default UserStore;
