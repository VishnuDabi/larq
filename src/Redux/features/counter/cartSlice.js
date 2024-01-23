import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.items.length < 1) {
        state.items.push(action.payload);
      } else {
        state.items.filter((element) => {
          if (element.src.incldes(action.payload.src)) {
            console.log(state.items.src, action.payload.src);
            state.items.push(action.payload);
          } else {
            console.log("ejdh");
          }
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.src !== action.payload.src
      );
    },
    // addToCart(state, action) {
    //   console.log(action);
    //   const item = action.payload;
    //   let productItem = state.cartItems.find(
    //     (product) => product.id === item.id
    //   );
    //   if (productItem) {
    //     productItem.quantity += 1;
    //   } else {
    //     state.cartItems = [item, ...state.cartItems];
    //   }
    // },
    // incrementQ(state, action) {
    //   const item = action.payload;
    //   let productItem = state.cartItems.find(
    //     (product) => product.id === item.id
    //   );
    //   if (productItem) {
    //     productItem.quantity += 1;
    //   }
    // },
    // decrementQ(state, action) {
    //   const item = action.payload;
    //   let productItem = state.cartItems.find(
    //     (product) => product.id === item.id
    //   );
    //   if (productItem) {
    //     productItem.quantity -= 1;
    //     if (productItem.quantity === 0) {
    //       state.cartItems = state.cartItems.filter(
    //         (product) => product.id !== item.id
    //       );
    //     }
    //   }
    // },
    // removeFromCart(state, action) {
    //   const item = action.payload;
    //   state.cartItems = state.cartItems.filter(
    //     (product) => product.id !== item.id
    //   );
    // },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const {
//   increment,
//   decrement,
//   incrementByAmount,
//   addToCart,
//   removeFromCart,
//   incrementQ,
//   decrementQ,
// } = cartSlice.actions;

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
