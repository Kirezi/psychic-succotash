import { observable } from "mobx";
import { v4 as uuid } from "uuid";

function createTodoStore() {
  const self = observable({
    items: [
      {
        id: uuid(),
        name: "Sample item",
        isComplete: false,
        isInProgress: false,
        tags: [],
      },
    ],

    get activeItems() {
      return self.items.filter((i) => !i.isComplete && !i.isInProgress);
    },
    get completedItems() {
      return self.items.filter((i) => i.isComplete);
    },

    get inProgressItems() {
      return self.items.filter((i) => i.isInProgress);
    },

    addItem() {
      self.items.push({
        id: uuid(),
        name: `Item ${self.items.length}`,
      });
    },
    setItemName(id, name) {
      const item = self.items.find((i) => i.id === id);
      item.name = name;

      self.items.find((item) => item.id === id).changes.push("Name changed");
    },
    setCompleted(id) {
      const item = self.items.find((i) => i.id === id);
      item.isComplete = true;
    },

    setInProgress(id) {
      const item = self.items.find((i) => i.id === id);
      item.isInProgress = true;
    },

    deleteItem(id) {
      // Todo: removing item
      self.items = self.items.filter((i) => i.id !== id);
    },
  });

  return self;
}

export { createTodoStore };
