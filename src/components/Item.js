import React from 'react'

const Item = ({id, title, description, price, pictureUrl}) => {
    return (
        <div className="card" style = {{width: "280px", margin: "20px", display:"inline-block"}}>
            <img src={pictureUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <h5 className="card-title">ID: {id}</h5>
                <p className="card-text">Descripción: {description}</p>
                <p className="card-text">Precio {price}</p>
                <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
    );
};

export default Item
