import React,{useState} from 'react';
import Data from './data'


const Col = ({shoes}) => {

    const shoesMap = shoes.map((item,i)=>{
        return (
            <div className="col-md-4" key={item.id}>
                <img src={ 'https://codingapple1.github.io/shop/shoes'+ item.id +'.jpg' } width="100%"/>
                <h4>{item.title}</h4>
                <p>{item.content} / {item.price}</p>
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