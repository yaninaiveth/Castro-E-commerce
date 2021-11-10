import React from 'react';
import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({id, title, description, price, pictureUrl, count, setCount}) => {

    const [show, setShow] = useState(false)
    const { addItem } = useContext(CartContext)
 
    const onAdd = () =>{
        if (count > 0) {
            setShow(true);
        }

        const item = {id, title, description, price, pictureUrl}
        addItem(item, count);
        
    } 


    return (

        <div style = {{display:"inline-block"}}>
            <img src={pictureUrl} className="card-img-top" style = {{width: "280px"}} alt="..."/>
            <div className="card-body">
                <h2>Item Detail</h2>
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>

                {show === false && (<ItemCount stock = {5} initial = {0} count = {count} setCount = {setCount} />)} 
                {show === false && count > 0 && (<button style = {{margin: "8px 0 0 10"}} onClick = {onAdd}>Añadir todo al carrito</button>)}

                {show === true && count > 0 && (
                <Link to="/cart"> 
                    <button>Ir al carrito</button>
                </Link>)}
            
            </div>

                
        </div>  
                  
)}
export default ItemDetail
