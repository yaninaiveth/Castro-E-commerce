import React from 'react';
import Promises from './Promises';
import { products } from '../data/products';

export const ItemListContainer = ({ greeting }) => {

    return (
        <>
            <h1>{greeting}</h1>
            <h2>Artículos</h2>
            <Promises products = { products }/>

        </>
    );
};
