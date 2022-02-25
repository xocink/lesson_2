import {Item} from "../item";
import {Pages} from "../pages";

export class Book extends Item {
  private _author: string;

  constructor(title: string, author: string,pages: Pages) {
    super(pages, title);
    this._author = author;
  }

  get title(): string {
    return this._title
  }

  set title(value: string) {
    this._title = value
  }

  get author(): string {
    return this._author
  }

  set author(value: string) {
    this._author = value
  }

  get pages() : Pages {
    return this._pages
  }

  toString(): string {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.pages.length}`
  }
}