const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };

    case "INCREASE":
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload)
          return { ...cartItem, amount: cartItem.amount++ };

        return cartItem;
      });
      return {
        ...state,
        cart: tempCart,
      };
    default:
      throw new Error("Unkown action type");
  }
};

export default reducer;
