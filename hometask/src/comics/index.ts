import {Item} from "../item";
import {Pages} from "../pages";

export class Comics extends Item {

  private _author: string;
  private _artist: string;

  constructor(title: string, author: string, artist: string,pages: Pages,) {
    super(pages, title);
    this._author = author;
    this._artist = artist
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

  get artist(): string {
    return this._artist
  }

  set artist(value: string) {
    this._artist = value
  }

  toString(): string {
    return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.pages.length}`
  }
}