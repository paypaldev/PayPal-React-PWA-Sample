import React from 'react';
import './Item.css';

const Item = ({name, img}) => {
  return (
    <>
        <div className="item">
            <img src={`../assets/${img}`} alt={img}/>
            <h2>{name}</h2>
            <p>{`../assets/${img}`}</p>
            <button>Add To Cart</button>
        </div>
    </>
  );
}

export default Item;
