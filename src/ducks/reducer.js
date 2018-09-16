const initialState = {
  // user: "",
  products: [],
  cart: [],
  totalCost: 0,
  user: {},
  name: "",
  description: ''
};

const ADD_TO_CART = "ADD_TO_CART";
const SUBTRACT_FROM_CART = "SUBTRACT_FROM_CART";
const UPDATE_USER = "UPDATE_USER";
const SEARCH_PRODUCT = "SEARCH_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

export function addToCart(product, direction, description) {
  let price = product.price;
  return {
    type: ADD_TO_CART,
    payload: { product, price, direction, description }
  };
}

export function subtractFromCart(product, direction, description) {
  let price = product.price;
  return {
    type: SUBTRACT_FROM_CART,
    payload: { product, price, direction, description }
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
       const { product, price, direction } = action.payload;
      return Object.assign({}, state, {
        totalCost: state.totalCost  + price ,
        cart: [...state.cart, product]
      });

    //   case SUBTRACT_FROM_CART:
    //   const { product, price, direction } = action.payload;
    //  return Object.assign({}, state, {
    //    totalCost: state.totalCost  - price ,
    //    cart: [...state.cart, product]
    //  });

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
