const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "DISPLAY_ITEMS":
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
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
    case "DECREASE":
      let tempCart2 = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload)
            return { ...cartItem, amount: cartItem.amount-- };

          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return {
        ...state,
        cart: tempCart2,
      };
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.amount += amount;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      };
    case "TOGGLE_AMOUNT":
      let tempCart3 = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...cartItem, amount: cartItem.amount++ };
            }
            if (action.payload.type === "dec") {
              return { ...cartItem, amount: cartItem.amount-- };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return {
        ...state,
        cart: tempCart3,
      };
    default:
      throw new Error("Unkown action type");
  }
};

export default reducer;
