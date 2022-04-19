import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'


function Watched({shoes}){

    /* let { id } = useParams(); //id 뒤 값 path 로 설정
    let findId = shoes.find((shoe)=>{
        return shoe.id == id
    }); */

    
        let get = localStorage.getItem('watched');
        get = JSON.parse(get);
        let arr = [get];
        console.log(arr);
    
    

    return (
        <div>
            {arr.map((item,i)=>{
                return(
                <div>
                <img src={"https://codingapple1.github.io/shop/shoes" + shoes[i].id + ".jpg"} width="20%" />
                <h4 className="pt-5">{shoes[i].title}</h4>
                <p>{shoes[i].content}</p>
                </div>
                )
                
                })}
        </div>
    );
};

export default Watched;