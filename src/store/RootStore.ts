import LocationsSearchStore from "./LocationsSearchStore";
import UIStore from "./UIStore";
import UserStore from "./UserStore";

class RootStore {
  userStore: UserStore;
  uiStore: UIStore;
  locationsSearchStore: LocationsSearchStore;

  constructor() {
    this.userStore = new UserStore();
    this.uiStore = new UIStore();
    this.locationsSearchStore = new LocationsSearchStore();
  }
}

export default RootStore;
