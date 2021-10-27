const ADD_PIZZA_CART = 'ADD_PIZZA_CART'
const SET_ITEMS_COUNT = 'SET_ITEMS_COUNT'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
const PLUS_ITEM = 'PLUS_ITEM'
const MINUS_ITEM = 'MINUS_ITEM'

export const addPizzaToCart = (pizzaObj) => ({
    type: ADD_PIZZA_CART,
    payload: pizzaObj
});


export const setItemsCount = (itemsCount) => ({
    type: SET_ITEMS_COUNT,
    payload: itemsCount
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
    type: REMOVE_CART_ITEM,
    payload: id,
});

export const plusItem = (id) => ({
    type: PLUS_ITEM,
    payload: id,
});

export const minusItem = (id) => ({
    type: MINUS_ITEM,
    payload: id,
});