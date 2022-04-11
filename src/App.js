
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data'
import Col from './Col'
import Detail from './Detail'
import { Link, Route, Switch } from 'react-router-dom'



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
            <div className="row">
              <Col shoes={shoes}/>
            </div>
          </div>  
      </Route>
      <Route path="/detail/:id">
        <Detail shoes={shoes}/>
      </Route>
    </div>
  );
}



export default App;
