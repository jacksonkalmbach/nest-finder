import UIStore from "./UIStore";
import UserStore from "./UserStore";

class RootStore {
  userStore: UserStore;
  uiStore: UIStore;

  constructor() {
    this.userStore = new UserStore();
    this.uiStore = new UIStore();
  }
}

export default RootStore;
