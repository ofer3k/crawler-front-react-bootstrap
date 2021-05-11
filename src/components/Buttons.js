import React, { Component, useState } from 'react'; 
import { Button,Card,Container,Row,Col } from 'react-bootstrap';
import Footer from './Footer';


const Buttons =()=>
    {
    
          
          const removeFromRedis=async function() {
          await fetch('http://localhost:8080/api/remove-from-redis', {
            method: 'DELETE',
            })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
           } 
           const removeFromSQS=async function() {
            await fetch('http://localhost:8080/api/remove-from-sqs', {
              method: 'DELETE',
              })
              .then(res => res.text()) // or res.json()
              .then(res => console.log(res))
             } 

             const removeFromMongo=async function() {
              await fetch('http://localhost:8001/api/mongo/postsall', {
                method: 'DELETE',
                })
                .then(res => res.text()) // or res.json()
                .then(res => console.log(res))
               } 
             
        return(
         
              <Container >
                <Row style={{marginTop:'10%'}} className="justify-content-md-center">
                  <Col md="auto">
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>REMOVE from redis </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button  onClick={removeFromRedis} variant="danger">DELETE ALL</Button>
                  </Card.Body>
                </Card>
                  </Col>
                  <Col md="auto">
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>REMOVE from SQS </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button  onClick={removeFromSQS} variant="danger">DELETE ALL</Button>
                  </Card.Body>
                </Card>
                  </Col>

                  <Col md="auto">
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>REMOVE from Mongo </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button  onClick={removeFromMongo} variant="danger">DELETE ALL</Button>
                  </Card.Body>
                </Card>
                  </Col>
                </Row>
                <Footer/>
               
              </Container>
                

            

           

                
               

               

            )
    }

export default Buttons;