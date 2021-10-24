import React,{ useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { prod } from '../data/product';
import { promises } from './helpers/promises';

const ItemListDetail = () => {

    console.log(prod);

    const [isLoading, setIsLoading] = useState(true);
    const [currentProducts, setCurrentProducts] = useState({});

    const getItem = () => {
        if (prod) promises(prod, setCurrentProducts, setIsLoading);
    };
    
    useEffect(() => {
        getItem();
    }, []);

  console.log(currentProducts);

    return (
        <div>
            <h1>Item List Detail</h1>
            {isLoading && <h4>Cargando...</h4>}
            <ItemDetail currentProducts = {currentProducts}/>
        </div>
    )
}

export default ItemListDetail
