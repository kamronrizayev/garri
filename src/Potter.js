import React, { useState } from 'react';

const Potter = ({el, removeItem}) => {
  return(
    <article className='single-tour'>
           <img src={el.image}/>
        <footer>
          <div className='garri-info'>
            <h4>{el.name}</h4>
            <h4 className='tour-price'>{el.house}</h4>
          </div>
          <button onClick={()=> removeItem(el.name)}>delete</button>
          <p>{el.info}</p>
        </footer>
    </article>
  );
};

export default Potter;
