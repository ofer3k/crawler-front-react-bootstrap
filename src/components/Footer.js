import React, { Component } from 'react'; 
import { Navbar, Accordion, Card, Button } from 'react-bootstrap';


const Footer =()=>
    {
        return(
            <Navbar style={{backgroundColor:"#E2E2E2"}} fixed="bottom">
              <Accordion style={{maxWidth:'85%'}} defaultActiveKey="0">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <Navbar.Brand >README.md</Navbar.Brand>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body >The crawler was created to efficiently and quickly extract information from the web. To activate it, send an initial crawl address via the url line. You can then choose one of two options - I. Specific crawling by determining the number of pillars to which the crawler will reach, the crawling is specific but less efficient and its cost is higher.
ii. Crawl by amount of iterations - in which the crawler accesses sqs and draws up to 10 addresses at a time.
In Redis we see all the inscriptions collected by the worker.
In Mongo we will see the address where the crawler has passed so far and from which he has gathered information</Card.Body>
            </Accordion.Collapse>
          </Accordion>

           
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
               Made by: <a href="https://www.instagram.com/oferklein1/">oferiko</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
            )
    }

export default Footer;