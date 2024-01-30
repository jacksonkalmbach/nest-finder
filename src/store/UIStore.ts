import { observable, action, makeObservable } from "mobx";

interface RecentlyViewedItem {
  zpid: number;
  title: string;
  price: number;
  bed?: number;
  bath?: number;
  sqft?: number;
}

class UIStore {
  @observable showNav: boolean = false;
  @observable listingView: string = "grid";
  @observable recentlyViewed: RecentlyViewedItem[] = [];

  constructor() {
    makeObservable(this);
  }

  @action toggleNav() {
    this.showNav = !this.showNav;
  }

  @action toggleListingView() {
    if (this.listingView === "grid") {
      this.listingView = "queue";
    } else {
      this.listingView = "grid";
    }
  }

  @action addRecentlyViewed(
    zpid: number,
    title: string,
    price: number,
    bed?: number,
    bath?: number,
    sqft?: number
  ) {
    this.recentlyViewed.push({ zpid, title, price, bed, bath, sqft });
  }
}

export default UIStore;
