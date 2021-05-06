import { useState } from "react";
import React from 'react';
// import NavBar from './NavBar'
import Form1 from "./Form";
import Footer from './Footer'
import Buttons from './Buttons'
import Table1 from './Table'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import { Button,Card,Container,Row,Col } from 'react-bootstrap';



const Home =()=>
    {
        const  handleSubmit =async (event) => {
            event.preventDefault()
            let data={
              num:event.target.firstChild.children[1].value
            }
            let send=JSON.stringify(data)
            console.log(data)
             fetch('http://localhost:8080/api/worker', {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
                method: 'POST',
                // We convert the React state to JSON and send it as the POST body
                body: send
              }).then(function(response) {
                console.log(response)
                // alert('start crawl')
              });
              
            }
            // start


            // end
        
        return(
            <div>
           

{/* number of Iterations */}
           <Container style={{marginTop:'30px',maxWidth:'700px'}}>
           
               <Row>
                   <Col>
                   <h3>for specific batch</h3>
                   <Form1  />
            <Form style={{borderTop:'2px solid black',borderLeft:'2px solid black',borderRight:'2px solid black'}} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Number of pages</Form.Label>
              <Form.Control name='num' type='number' placeholder="Limit the crawler" />
             
            </Form.Group>
            <Button variant="secondary" type="submit">
              crawl
            </Button>
          </Form>
          </Col>
          <Col>
          <h3>for big batch</h3>
          </Col>
          </Row>
          </Container>
           </div>
            )
    }

export default Home;