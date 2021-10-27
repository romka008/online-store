const ADD_PIZZA_CART = 'ADD_PIZZA_CART'
const CLEAR_CART = 'CLEAR_CART'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
const PLUS_ITEM = 'PLUS_ITEM'
const MINUS_ITEM = 'MINUS_ITEM'


const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.')
    return keys.reduce((val, key) => {
        return val[key]
    }, obj[firstKey])
}
const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path)
        return sum + value;
    }, 0)
}



const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_CART:
            {
                const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload]
                const newItems = {
                    ...state.items,
                    [action.payload.id]: {
                        items: currentPizzaItems,
                        totalPrice: getTotalPrice(currentPizzaItems),
                    }

                }


                const itemsCount = getTotalSum(newItems, 'items.length')
                const totalPrice = getTotalSum(newItems, 'totalPrice')
                return {
                    ...state,
                    items: newItems,
                    itemsCount,
                    totalPrice,
                }
            }

        case CLEAR_CART:
            return { totalPrice: 0, itemsCount: 0, items: {}, }

        case REMOVE_CART_ITEM:
            {
                const newItems = {
                    ...state.items,
                }
                const currentitemsCount = newItems[action.payload].items.length
                const currentTotalPrice = newItems[action.payload].totalPrice
                delete newItems[action.payload]
                return {
                    ...state,
                    items: newItems,
                    totalPrice: state.totalPrice - currentTotalPrice,
                    itemsCount: state.itemsCount - currentitemsCount
                }
            }
        case PLUS_ITEM:
            {
                const newObjItems = [
                    ...state.items[action.payload].items,
                    state.items[action.payload].items[0]
                ]

                const newItems = {
                    ...state.items,
                    [action.payload]: {
                        items: newObjItems,
                        totalPrice: getTotalPrice(newObjItems),
                    }
                }

                const itemsCount = getTotalSum(newItems, 'items.length')
                const totalPrice = getTotalSum(newItems, 'totalPrice')
                return {
                    ...state,
                    items: newItems,
                    itemsCount,
                    totalPrice
                }
            }

        case MINUS_ITEM:
            {
                const oldItems = state.items[action.payload].items
                const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems

                const newItems = {
                    ...state.items,
                    [action.payload]: {
                        items: newObjItems,
                        totalPrice: getTotalPrice(newObjItems),
                    }
                }

                const itemsCount = getTotalSum(newItems, 'items.length')
                const totalPrice = getTotalSum(newItems, 'totalPrice')

                return {
                    ...state,
                    items: newItems,
                    itemsCount,
                    totalPrice
                }
            }

        default:
            return state
    }
}

export default cart