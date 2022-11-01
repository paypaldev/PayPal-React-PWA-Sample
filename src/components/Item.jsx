import React from 'react';
import './Item.css';

const Item = ({name, img}) => {
  return (
    <>
        <div className="item">
            <img src={`../assets/${img}`} alt={img}/>
            <h3>{name}</h3>
        </div>
    </>
  );
}

export default Item;
