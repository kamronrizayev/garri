import React from 'react';
import Potter from './Potter';
const Garri = ({data,removeItem}) => {
  console.log(data);
  return(
    <section>
       <div className="title">
          <h2>Garri Potter characters</h2>
        
          <div className="underline"></div>
       </div>
       <div>

          {data.map(el =>{
            return(
              <Potter removeItem={removeItem} el ={el} />
            )
          })}
       </div>

    </section>
  )
};

export default Garri;
