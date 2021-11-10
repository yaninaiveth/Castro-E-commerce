import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { ItemListContainer } from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import NotFound from '../layout/not-found/NotFound';
import Cart from '../layout/cart-container/Cart';
import Burger from '../layout/product-layout/Burger';
import Pizza from '../layout/product-layout/Pizza';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path ='/'>
                        <ItemListContainer greeting = {"Bienvenido a mi Tienda"}/>
                    </Route>
                    <Route path="/item/:itemId">
                        <ItemDetailContainer/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/burger">
                        <Burger/>
                    </Route>
                    <Route path="/pizza">
                        <Pizza/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
                
            </BrowserRouter>   
        </div>
    )
}

export default Routes

