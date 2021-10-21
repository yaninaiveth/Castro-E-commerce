import React from 'react';
import Item from './Item';

const ItemList = ({currentProducts}) => {
    return (
        <div>
            {currentProducts.map((results)=>(
              <Item {...results}/>
            ))}  
        </div>
    );
};

export default ItemList
