const initialState = {
  user: "",
  products: [],
  cart: [],
  totalCost: 0,
  user: {},
  name: ""
};

const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_USER = "UPDATE_USER";
const SEARCH_PRODUCT = "SEARCH_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

export function addToCart(product, direction) {
  let price = product.price;
  return {
    type: ADD_TO_CART,
    payload: { product, price, direction }
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}

export function searchProduct(name) {
  return {
    type: SEARCH_PRODUCT,
    payload: name
  };
}

export function deleteFromCart(productId) {
  return {
    type: DELETE_PRODUCT,
    payload: productId
  };
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // const { cart } = state;
       const { product, price, direction } = action.payload;
      // let newProduct = {},
      //   newCart = cart;

      // updating my quantity
      // let found = cart.findIndex(item => item.id === product.id);
      // if (found >= 0) {
      //   // If item is already in the cart
      //   newProduct = product;
      //   if (direction === "up") newProduct.quantity += 1;
      //   else if (direction === "down") newProduct.quantity -= 1;
      //   newCart.splice(found, 1, newProduct);
      // } else {
      //   // if item is not in the cart
      //   newProduct = product;
      //   newProduct.quantity = 1;
      //   newCart.push(newProduct);
      // }

      return Object.assign({}, state, {
        // cart: newCart,
        totalCost: state.totalCost  + price ,
        // cart: action.payload
        cart: [...state.cart, product]
      });

    case UPDATE_USER:
      return Object.assign({}, state, { user: action.payload });

    case SEARCH_PRODUCT:
      return Object.assign({}, state, { name: action.payload });

    case DELETE_PRODUCT:
      let cartCopy = state.cart.slice().filter(product => {
        return product.product_id !== action.payload;
      });
      return Object.assign({}, state, {
        cart: cartCopy
        // product: action.payload
      });

    default:
      return state;
  }
}
