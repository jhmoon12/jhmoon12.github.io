import React from 'react';
import { useHistory, useParams } from 'react-router-dom'

function Detail({shoes}){

    let history = useHistory();//history 오브젝트 생성
    let { id } = useParams();
    let findId = shoes.find((shoe)=>{
        return shoe.id == id
    });

    return(
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findId.title}</h4>
          <p>{findId.content}</p>
          <p>{findId.price}</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn back-button" onClick={()=>{history.goBack();}}>뒤로가기</button> 
        </div>
      </div>
    </div>
    )
  }
export default Detail;