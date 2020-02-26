import React, {useState} from 'react';
import ReactCard from './MainCard.js';
import ReportsCard from './ReportsCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../App.css';


function Extract (){
  
  const [key, setKey] = useState('workflow');

  return(
    <>
      <Container className="mt-5 mb-5">
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
          <Tab eventKey="workflow" title="Workflow">
            <Card className="border-top-0 border border-rad-0">
              <Card.Body>
                <ReactCard />
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="report" title="Report">
            <Card className="border-top-0 border border-rad-0">
              <Card.Body>
                <ReportsCard />
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
  
export default Extract;