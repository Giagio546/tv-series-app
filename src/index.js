import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'react-bootstrap';
import logo from "./assets/movie-png-icon-27.jpg";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar class="custom-navbar" bg="light" data-bs-theme="light">
      <Container>
      <Navbar.Brand href="/">TV Series List</Navbar.Brand>
      <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"><b>Home</b></Nav.Link>
            <Nav.Link href="/series">Search</Nav.Link>
          </Nav> 
      </Container>
    </Navbar>
        <App />   
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
