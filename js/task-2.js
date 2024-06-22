console.log("task-2");

class Storage {
	#items; 

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

	removeItem(itemToRemove) {
		// const x = this.#items.indexOf(itemToRemove);
		// return this.#items.splice(2, 1);
		// this.items = this.items.filter((item) => item !== itemToRemove);

		const indexToDelete = this.#items.indexOf(itemToRemove);
		if (indexToDelete !== -1) {
      this.#items.splice(indexToDelete, 1);
    } else {
      console.log("Такого товару не існує");
    }

	}

}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
const items = storage.getItems();
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]