import React, { Component, useState,useEffect } from 'react'; 
import { Button, Container, Table,Row,Col } from 'react-bootstrap';


const Mongo =()=>

    {
        const [redisData,setRedisData]=useState(['ofer','uriel'])
        const [count,setCount]=useState(0)
        useEffect(() => {
            const interval = setInterval(() => {
              fetchFromMongo()
            //   fetching every 1000 secondes!!!!
            }, 1000000);
            return () => clearInterval(interval);
          });
       
        const fetchFromMongo=async function() {
            await fetch('http://localhost:8001/api/mongo/posts')
            .then(response => response.json())
            .then(data =>{ 
                console.log(data)
                setRedisData(data)
            });
          }
        return(<div>
            <Container style={{marginTop:'20px'}}>
              <Row>
              <Col sm={4}>
                <Button onClick={fetchFromMongo} variant="secondary" size="lg" block>Check Mongo DB</Button>
               </Col>
              
              <Col sm={8}>
              <Container style={{borderTop:'2px solid black',borderRight:'2px solid black'}}>
                <h1>Hello, Mongo!</h1>
                <p>
                You can see all the URL's that the workers have <strong> already visited</strong>
                </p>
              </Container>
              </Col>
            </Row>
            <Row>
              <Col sm>            
                
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>url</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <td>1</td>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                    </tr> */}
                    {redisData.map((url,index)=>
                    <tr>
                        <td>{index}</td>
                      <td>{url.title}</td>
                    </tr>)
                    }
                  </tbody>
                </Table>
                          
                    </Col>
            
            </Row>
          </Container>



            

          </div>
            )
    }

export default Mongo;