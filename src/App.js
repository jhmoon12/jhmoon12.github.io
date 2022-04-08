
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data'
import Col from './Col'


function App() {

  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
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
      
  
    </div>
  );
}

export default App;
