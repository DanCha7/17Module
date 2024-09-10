import { createStore, createEvent, createEffect } from 'effector';


export const addItem = createEvent();

export const $itemsStore = createStore(["item1"]).on(
  addItem , 
  (state , item) => [...state , item]
);

export const fetchItems = createEffect(async () => {
  const res = await fetch()
});

$itemsStore.on(fetchItems.doneData , (state,items) => [...state, ...items]);