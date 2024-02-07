import { observable, action, makeObservable } from "mobx";

interface SearchParamsType {
  status_type: string;
  location: string;
  rentMinPrice?: number;
  rentMaxPrice?: number;
  minPrice?: number;
  maxPrice?: number;
  bedsMin?: number;
  bedsMax?: number;
  bathsMin?: number;
  bathsMax?: number;
  home_type?: string;
}

class LocationsSearchStore {
  @observable searchParams: SearchParamsType = {
    status_type: "ForRent",
    location: "",
  };
  @observable listingsData: any = {};
  @observable coordinates: { lat: number; lng: number }[] = [];
  @observable listingPageCount: number = 1;
  @observable listingCount: number = 0;

  constructor() {
    makeObservable(this);
  }

  @action setListingsData(data: any) {
    this.listingsData = data;
  }

  @action setSearchParams(params: SearchParamsType) {
    this.searchParams = params;
  }

  @action setListingPageCount(count: number) {
    this.listingPageCount = count;
  }

  @action setListingCount(num: number) {
    this.listingCount = num;
  }
}

export default LocationsSearchStore;
