import React,{ useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { prod } from '../data/product';
import { promises } from './helpers/promises';

const ItemDetailContainer = () => {

    console.log(prod);

    const [isLoading, setIsLoading] = useState(true);
    const [currentProducts, setCurrentProducts] = useState({});
    const [count, setCount] = useState(0);

    const getItem = () => {
        if (prod) promises(prod, setIsLoading, setCurrentProducts);
    };
    
    useEffect(() => {
        getItem();
    }, []);

  console.log(currentProducts);

    return (
        <div>
            <h2>Item Detail Container</h2>
            {isLoading && <h4>Cargando...</h4>}
            <ItemDetail count={count} setCount={setCount} {...currentProducts}/>
        </div>
    )
}

export default ItemDetailContainer
