import React from 'react';
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';

function Cart(props) {
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
                    {props.state.map((item, i)=>(
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quan}</td>
                        <td>
                            <button onClick={()=>{ props.dispatch( {type : '수량증가'}) }}>+</button>
                            <button onClick={()=>{ props.dispatch( {type : '수량감소'}) }}>-</button>
                            </td>
                        </tr>
                    ))}   
                </tbody>
            </Table>
                {
                    props.alarm ? 
                    <div className="myalarm2">
                        <p>지금 구매하면 20% 세일</p>
                        <button className="btn" onClick={()=>{
                            props.dispatch({
                                type: '알림닫기'
                            })
                        }}>닫기</button>
                    </div> : 
                    null
                }
            
        </div>
    );
};

function state를props화함수 (state) {
    return {
        state : state.reducer,
        alarm : state.reducer2
    }
}


export default connect(state를props화함수)(Cart);