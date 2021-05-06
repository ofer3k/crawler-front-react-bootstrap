import { useState } from "react";
import React from 'react';
import { Form, Button,Container } from 'react-bootstrap';


const Form1 =()=>
    {
      // const a=async function (e) {
      //   e.preventDefault()
      //   // get the url
      //   alert(e.target.firstChild.children[1].value)
      //    fetch('http://localhost:8080/api/listRedis', {
      //   method: 'GET',
      //   // We convert the React state to JSON and send it as the POST body
      //   // body: JSON.stringify(this.state)
      // }).then(function(response) {
      //   console.log(response)
      //   return response.json();
      // });
      // }
      const  handleSubmit =async (event) => {
        event.preventDefault()
        let data={
          url:event.target.firstChild.children[1].value
        }
        let send=JSON.stringify(data)
        
        console.log(data)
         fetch('http://localhost:8080/api/new-url', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: send
          }).then(function(response) {
            console.log(response)
            alert('was sent to sqs')
          });
          
        }
        return(
         
            <Form style={{borderBottom:'2px solid black'}} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>URL</Form.Label>
              <Form.Control name='url' type='text' placeholder="Enter URL" />
              <Form.Text className="text-muted">
                let's crawl
              </Form.Text>
            </Form.Group>
            <Button className='mb-4' variant="primary" type="submit">
              Send
            </Button>
          </Form>

            )
    }

export default Form1;