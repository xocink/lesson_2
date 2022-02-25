// // @ts-ignore
// export const pagesIterableMixin = {
//   cur : 0,
//   to : this.pages.length
// }
// pagesIterableMixin[Symbol.iterator] = function() {
//   return {
//     pages:this.pages,
//     current: 0,
//     last: this.pages.length,
//     next() {
//       if (this.current <= this.last) {
//         const value : string = `${this.toString()}, here is page with images #${this.current} and it\\'s material is ${this.pages[this.current].pageMaterial}`
//         this.current +=1;
//         return { done: false, value };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// }