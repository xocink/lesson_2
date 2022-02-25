import {Item} from "../item";
import {Pages} from "../pages";

export class Magazine extends Item {

  constructor(title: string,pages: Pages,) {
    super(pages, title);
  }

  get title(): string {
    return this._title
  }
  set title(value: string) {
    this._title = value
  }

  get pages() : Pages {
    return this._pages
  }

  toString(): string {
    return `Magazine: ${this.title} with number of pages: ${this.pages.pages.length}`
  }
}