import {Page} from "../page";

export class Pages {
  private _pages: Page[];
  constructor(pages: Page[]) {
    this._pages = pages
  }

  get pages() {
    return this._pages
  }


  [Symbol.iterator]() {
    const pages = this._pages;
    return {
      current: 0,
      last: pages.length - 1,

      next() {
        if (this.current <= this.last) {
          const value : string = pages[this.current].toString();
          this.current +=1;
          return { done: false, value };
        } else {
          return { done: true };
        }
      }
    }

  }
}