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
    default:
      throw new Error("Unkown action type");
  }
};

export default reducer;
