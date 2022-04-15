import React from 'react';
import { Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { connect, useSelector } from 'react-redux';

function Cart(props) {

    let state = useSelector((state)=>state);
        console.log(state.reducer) 
    let dispatch = useDispatch();


    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {state.reducer.map((item)=>(
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.quan}</td>
                        <td>
                            <button onClick={()=>{ dispatch( {type : '수량증가', payload: item.id }) }}>+</button>
                            <button onClick={()=>{
                                if(item.quan > 1 ){
                                    dispatch( {type : '수량감소', payload: item.id })
                                }}}>-</button>
                            </td>
                        </tr>
                    ))}   
                </tbody>
            </Table>
                {
                    state.reducer2.alarm ? 
                    <div className="myalarm2">
                        <p>지금 구매하면 20% 세일</p>
                        <button className="btn" onClick={()=>{
                            dispatch({
                                type: '알림닫기'
                            })
                        }}>닫기</button>
                    </div> : 
                    null
                }
            
        </div>
    );
};

/* function state를props화함수 (state) {
    return {
        state : state.reducer,
        alarm : state.reducer2
    }
}
export default connect(state를props화함수)(Cart); *///예전 문법 

export default Cart;