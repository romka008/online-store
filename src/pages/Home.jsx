import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components'
import { addPizzaToCart } from '../redux/action/cart';


import { setCategory as setCategoryAction, setSortBy } from '../redux/action/filters';
import { fetchPizzas } from "../redux/action/pizzas";


const categoryNames = ['Мясные', 'Вегетеринская', 'Гриль', 'Острая', 'Закрытые',]
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' }
]


function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategoryAction(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    })
  }


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames} />
        <SortPopup
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}
          items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map(obj => (
            <PizzaBlock
              onClickAddPizza={handleAddPizzaToCart}
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
              {...obj} />))
          : Array(10)
            .fill()
            .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  )
}

export default Home
