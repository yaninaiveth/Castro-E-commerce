import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({title, description, pictureUrl}) => {

    return (

        <div style = {{display:"inline-block"}}>
            <img src={pictureUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h2>Item Detail</h2>
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <ItemCount initial = {0} onAdd = {() => alert("Alert")} stock = {5}/>
            </div>
        </div>
    );
};

export default ItemDetail
