import React,{ useState,useEffect} from 'react';
import { useHistory, useParams} from 'react-router-dom';




function Detail({shoes}){

    const [ alert, setAlert ] = useState(true);//ui 스위치

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setAlert(false)
         }, 2000);
         return ()=>{ clearTimeout(timer) }
    }, [alert]);//ui가 2초 뒤 사라지게 한다.

    

    let history = useHistory();//history 오브젝트 생성
    let { id } = useParams(); //id 뒤 값 path 로 설정
    let findId = shoes.find((shoe)=>{
        return shoe.id == id
    });//path 와 신발 id 값이 같을 때(실제론 ajax가 들어감)

    return(
      <div className="container">
          {
              alert === true
              ? (<div className="my-alert">
                 <p>재고가 얼마 남지 않았습니다.</p>
                </div>)
              :null
          }
          
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