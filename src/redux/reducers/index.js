import { combineReducers } from 'redux'
import filterReducers from './filters'
import pizzaReducers from './pizzas'

const rootReducers = combineReducers({
    filters: filterReducers,
    pizzas: pizzaReducers
})

export default rootReducers