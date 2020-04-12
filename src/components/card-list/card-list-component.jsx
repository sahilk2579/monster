import React from 'react';
import './card-list.css';
import  {Card } from '../card/card.component';

export const CardList = (props) => (

        <div className="card-list">

        {props.monsters.map(monsteru => 
        <Card key={monsteru.id} monster={monsteru}/>
        )        
        }
        




        </div>
        
    );
