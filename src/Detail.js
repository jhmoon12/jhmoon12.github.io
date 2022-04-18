import React,{ useState,useEffect} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';




function Detail({shoes, setShoes, state, dispatch}){



    const [ alert, setAlert ] = useState(true);//ui 스위치
    let [tab, setTab] = useState(0);
    let [ switchCss , setSwitchCss ] = useState(false);
    let history = useHistory();//history 오브젝트 생성
    let { id } = useParams(); //id 뒤 값 path 로 설정
    let findId = shoes.find((shoe)=>{
        return shoe.id == id
    });//path 와 신발 id 값이 같을 때(실제론 ajax가 들어감)

    const order = () => {
        dispatch({ type: '상품추가' , payload: { id: findId.id , title: findId.title, quan: 1}})
        history.push('/cart')
    };/* 주문하기 함수 */
    
    
    useEffect(()=>{
        let recentItem = localStorage.getItem('watched');
        recentItem = JSON.parse(recentItem);
        if( recentItem == null ){
            recentItem = [];
        }else {
            recentItem.push(id);
        }
        recentItem = new Set(recentItem);
        recentItem = [...recentItem];
        localStorage.setItem('watched', JSON.stringify(recentItem));
    }, []);
    /* 최근 본 상품 로컬스토리지 저장 */

    useEffect(()=>{

        axios.get('http://codingapple1.github.io/shop/data2.json')
                .then(()=>{ 
                    console.log('성공')
                    
                })
                .catch(()=>{ 
                    console.log('실패')
                })

        let timer = setTimeout(()=>{
            setAlert(false)
         }, 2000);
         return ()=>{ clearTimeout(timer) }
    }, []);//ui가 2초 뒤 사라지게 한다.


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
          <img src={"https://codingapple1.github.io/shop/shoes" + findId.id + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findId.title}</h4>
          <p>{findId.content}</p>
          <p>{findId.price}</p>
          <button className="btn btn-danger" onClick={order}>주문하기</button> 
          <button className="btn back-button" onClick={()=>{history.goBack();}}>뒤로가기</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="Detail">
        <Nav.Item>
            <Nav.Link href={"/Detail/" + findId.id } onClick={()=>{setTab(0)}}>0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}}>1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>
            2
            </Nav.Link>
        </Nav.Item>
      </Nav>
          
          <TabContent tab={tab} setSwitchCss={setSwitchCss}/>
          

    </div>
    )
  }

  function TabContent({tab}){


    if(tab === 0 ){
        return(
            
            <div>0번째 내용</div>
        )
    } else if (tab === 1) {
        return(
            <div>1번째 내용</div>
        )
    } else if (tab === 2) {
        return(
            <div>2번째 내용</div>
        )
    };
  };

  function stateProps(state){
    return {
        state : state.reducer,
        alarm : state.reducer2
    }
  };


export default connect(stateProps)(Detail);