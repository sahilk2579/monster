import React from 'react';
import './card.css';


export const Card = (props ) => (

        <div className="card-container">

        <img src={`https://robohash.org/${props.monster.id}`}/>
        
        <h1 >{ props.monster.name}</h1>  

        <p>{props.monster.email}</p>




        </div>
        
    )


