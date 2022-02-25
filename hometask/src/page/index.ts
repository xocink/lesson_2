export class Page {

  private _pageNumber: number;
  private _pageType: string;
  private _pageMaterial: string;

  constructor(pageNumber: number, pageType: string, pageMaterial: string) {
    this._pageNumber = pageNumber
    this._pageType = pageType;
    this._pageMaterial = pageMaterial
  }

  get pageNumber(): number {
    return this._pageNumber
  }

  set pageNumber(value: number) {
    this._pageNumber = value
  }

  get pageType(): string {
    return this._pageType
  }

  set pageType(value: string) {
    this._pageType = value
  }

  get pageMaterial(): string {
    return this._pageMaterial
  }

  set pageMaterial(value: string) {
    this._pageMaterial = value
  }

  toString() : string{
    return `here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`
  }
}
