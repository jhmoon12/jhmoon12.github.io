import React,{useContext, useState} from 'react';
import { Link , useHistory} from 'react-router-dom'


const Col = ({shoes, saveItem}) => {

    let history = useHistory();
    

    const shoesMap = shoes.map((item,i)=>{
        return (
            <div className="col-md-4" key={item.id} onClick={()=>{
                history.push('/detail/' + item.id )
                saveItem(item.id);
                
            }}>
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