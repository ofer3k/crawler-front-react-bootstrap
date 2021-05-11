import React, { Component, useState,useEffect } from 'react'; 
import { Button, Container, Table,Row,Col } from 'react-bootstrap';


const Mongo =()=>

    {
        const [redisData,setRedisData]=useState([''])
       
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
                
                <Table style={{maxWidth:'300%'}} striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>url</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* map the fetched data */}
                    {redisData.map((url,index)=>
                    <tr >
                        <td>{index}</td>
                      <td style={{maxWidth:'20rem',overflow:'hidden'}}>{url.title}</td>
                      <td style={{maxWidth:'',overflow:'hidden'}}>
                        {url.childrens}</td>
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