import {useContext} from "react"
import {Route, Switch} from "react-router-dom"
import {GlobalState} from "../GlobalState"
import Cart from "./Pages/Cart"
import Products from "./Pages/Products"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import Test from "./Pages/Test"
import ProductDetails from "./ProductDetails"
import Categories from './Pages/Categories'
import NotFound from './utils/NotFound'
import CreateProduct from "./Pages/CreateProduct"
import History from './Pages/History'

const Pages = () => {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route exact path="/">
        <Products/>
      </Route>
      <Route path="/details/:id" >
        <ProductDetails/>
      </Route>
      <Route path="/login" exact component={isLogged ? NotFound : Signin} />
      <Route path="/register" exact component={isLogged ? NotFound : Signup} />
      <Route path='/category' exact component={
          isAdmin ? Categories : NotFound
      } />
      <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
      <Route path="/edit/product/:id" exact component={isAdmin ? CreateProduct : NotFound} />
      
      <Route path="/history" exact component={isLogged ? History : NotFound} />
      <Route path='/cart'>
        <Cart/>
      </Route>
      <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
