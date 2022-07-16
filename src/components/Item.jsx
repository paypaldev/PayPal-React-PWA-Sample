import React from 'react';
import './Item.css';

const Item = ({name, img}) => {
  return (
    <>
        <div className="item">
            <img src={require(`../assets/${img}`).default} alt={name}/>
            <h2>{name}</h2>
            <button>Add To Cart</button>
        </div>
    </>
  );
}

export default Item;
