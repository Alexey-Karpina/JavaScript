"use strict";

class Storage {
  constructor(items) {
    this._items = items;
  }
  getItems() {
    return this._items;
  }
  addItem(item) {
    this._items.push(item);
  }
  removeItem(item) {
    const idx = this._items.indexOf(item);
    if (idx > 0) {
      this._items.splice(idx, 1);
    }
  }
}

const storage = new Storage([
  "Nanitoidu",
  "Prolonger",
  "Geleznue jypi",
  "Antigravitator",
]);

const items = storage.getItems();

console.log(items);

storage.addItem("Droid");
console.log(storage._items);

storage.removeItem("Prolonger");
console.log(storage._items);
