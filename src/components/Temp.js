import React, { Component, useState,useEffect } from 'react'; 
import { Button, Container, Table } from 'react-bootstrap';


const Temp =()=>

    {
        const [redisData,setRedisData]=useState(['ofer','uriel'])
        const [count,setCount]=useState(0)
        useEffect(() => {
            const interval = setInterval(() => {
              
              fetchFromRedis()
            //   fetching every 1000 secondes!!!!
            }, 1000000);
            return () => clearInterval(interval);
          }, []);
       
        const fetchFromRedis=async function() {
            await fetch('http://localhost:8081/api/listRedis')
            .then(response => response.json())
            .then(data =>{ 
                console.log(data)
                setRedisData(data)
            });
          }
        return(<div>
            
            <Button onClick={fetchFromRedis}>fill the Table</Button>
            <Container style={{marginTop:'30px',maxWidth:'700px',maxHeight:'200px',overflow:'auto'}}>
                
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
      <td>{url}</td>
    </tr>)
    }
  </tbody>
</Table>
          </Container>
          </div>
            )
    }

export default Temp;