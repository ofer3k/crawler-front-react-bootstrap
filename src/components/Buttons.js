import React, { Component } from 'react'; 
import { Button,Card,Container,Row,Col } from 'react-bootstrap';


const Buttons =()=>
    {
        const fetchFromRedis=async function() {
            await fetch('http://localhost:8080/api/listRedis')
            .then(response => response.json())
            .then(data => console.log(data));
          }

        const startCrawling=async function() {
           await fetch('http://localhost:8080/api/worker')
           .then(res => res.text()) // or res.json()
           .then(res => console.log(res))
          }  
          
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
         
              
              <Container>
                <Row className="justify-content-md-center">
                  <Col md="auto">
                  {/* <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>GET all from redis</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button  onClick={fetchFromRedis} variant="info">GET</Button>
                  </Card.Body>
                </Card> */}
                  </Col>

                  <Col md="auto"> 
                     {/* <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>Start Crawling</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button  onClick={startCrawling} variant="success">START</Button>
                  </Card.Body>
                </Card> */}
                </Col>

                </Row>
                <Row className="justify-content-md-center">
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
              </Container>
                

            

           

                
               

               

            )
    }

export default Buttons;