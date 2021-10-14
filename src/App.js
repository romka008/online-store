import React from "react";
import axios from "axios";
import { Route } from "react-router";
import { connect } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas as setPizzasAction} from "./redux/action/pizzas";



// function App() {
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       setPizzas(data.pizzas)
//     })
//   }, [])


//   return ;
// }


class App extends React.Component {
componentDidMount() {
  axios.get('http://localhost:3000/db.json').then(({data}) => {
    this.props.setPizzas(data.pizzas)
    })
}

  render() {
    console.log(this.props)
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' render={() => <Home items={this.props.items} />} />
          <Route exact path='/cart' component={Cart} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
