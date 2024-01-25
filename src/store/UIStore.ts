import { observable, action, makeObservable } from "mobx";

class UIStore {
  @observable showNav: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action toggleNav() {
    this.showNav = !this.showNav;
  }
}

export default UIStore;
