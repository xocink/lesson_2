import {Pages} from "../pages";

export abstract class Item {
  protected _pages: Pages;
  protected _title: string;

  protected constructor(pages: Pages, title: string) {
    this._pages = pages
    this._title = title;
  }

  get pages() : Pages {
    return this._pages
  }

  public abstract toString() : void

  [Symbol.iterator]() {
    const pages = [...this.pages]
    const toStr = this.toString.bind(this)
    return {
      current : 0,
      last: this.pages.pages.length - 1,

      next() {
        if (this.current <= this.last) {
          const value = `${toStr()}, ${pages[this.current]}`
          this.current +=1
          return { done: false, value };
        } else {
          return { done: true };
        }
      }
    }
  }
}