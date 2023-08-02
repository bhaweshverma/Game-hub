import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

interface CartState {
  items: string[];
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["burger", "pizza"],
  } as CartState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action?) => {
      //state is local variable here
      //console.log("clearCart - ", state); //Proxy(Object) for state & Proxy(Array) for state.items
      //state = []; //Wont mutate the state hence nothing will happen
      //console.log(state); //[] now, it refers to new empty array, but older state has not been mutated, it is still in same original state
      //console.log(current(state));
      state.items.length = 1; //behind the scenes, Immer will mutuate the state
      //return { items: [] }; //theoratically it would work
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
