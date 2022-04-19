import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'


function Watched({shoes}){

    /* let { id } = useParams(); //id 뒤 값 path 로 설정
    let findId = shoes.find((shoe)=>{
        return shoe.id == id
    }); */

    
        let get = localStorage.getItem('watched');
        get = JSON.parse(get);
        get = [...get];
        console.log(get);
    
    

    return (
        <div>
            {get.map((item,i)=>{
                return(
                <div key={item}>
                <img src={"https://codingapple1.github.io/shop/shoes" + shoes[1].id + ".jpg"} width="20%" />
                <h4>{shoes[1].title}</h4>
                <p>{item}</p>
                </div>
                )
                
                })}
        </div>
    );
};

export default Watched;