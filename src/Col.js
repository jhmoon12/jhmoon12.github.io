import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom'
import Data from './data'


const Col = ({shoes}) => {

    const shoesMap = shoes.map((item,i)=>{
        return (
            <div className="col-md-4" key={item.id}>
                <Link to={"/detail/"+ (i+1) }>
                <img src={ 'https://codingapple1.github.io/shop/shoes'+ (i+1) +'.jpg' } width="100%"/>
                <h4>{item.title}</h4>
                <p>{item.content} / {item.price}</p>
                </Link>
                
            </div>
        )
    })  

    return (
        <div className="row">
            {shoesMap}
        </div>
    );
};

export default Col;