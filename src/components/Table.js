import React, { Component, useState,useEffect } from 'react'; 
import { Button, Container, Table,Row,Col, Badge,Jumbotron } from 'react-bootstrap';


const Table1 =()=>

    {
        const [redisData,setRedisData]=useState([''])
        const [count,setCount]=useState(0)
        useEffect(() => {
            const interval = setInterval(() => {
              fetchFromRedis()
            //   fetching every 1000 secondes!!!!
            }, 1000000);
            return () => clearInterval(interval);
          });
       
        const fetchFromRedis=async function() {
            await fetch('http://localhost:8080/api/listRedis')
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
                <Button onClick={fetchFromRedis} variant="secondary" size="lg" block>Check Redis DB</Button>
               </Col>
              
              <Col sm={8}>

           
              <Container style={{borderTop:'2px solid black',borderRight:'2px solid black'}}>
                <h1>Hello, Redis!</h1>
                <p>
                You can see<strong> ALL </strong>the URL's that the workers have collected
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
                    {redisData.map((url,index)=>
                    <tr>
                        <td>{index}</td>
                      <td style={{maxWidth:'0rem',overflow:'hidden'}}>{url}</td>
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

export default Table1;