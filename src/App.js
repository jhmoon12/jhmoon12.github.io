
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, lazy, Suspense } from 'react';
import Data from './data'
import Col from './Col'



import Cart from './Cart'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios';

let Detail = lazy(()=>{ return import ('./Detail.js') });


function App() {

  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand >Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link}><Link to="/">Home</Link></Nav.Link>
          <Nav.Link as={Link}><Link to="/Detail">Detail</Link></Nav.Link>
          <Nav.Link as={Link}>Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Route exact path="/">{/* 속성 */}
          <div className="bg-light p-5 rounded-lg m-3">	
                <h1 className="display-4">20% sale</h1>	
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>	
                <hr className="my-4" />	
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>	
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>	
          </div>
          <div className="container">
              <Col shoes={shoes}/>
              <button className="btn btn-primary" onClick={()=>{
                axios.get('http://codingapple1.github.io/shop/data2.json')
                .then((result)=>{ 
                    console.log('성공')
                    setShoes([...shoes, ...result.data])    
                })
                .catch(()=>{ 
                    console.log('실패')
                })
            }}>더보기</button>
          </div>  
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>

      <Route path="/detail/:id">
        <Suspense fallback={<div>로딩중이예요</div>}>
          <Detail shoes={shoes} setShoes={setShoes}/>
        </Suspense>
      </Route>
    </div>
  );
}



export default App;
