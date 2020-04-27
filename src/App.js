import React from 'react';
import { Col, Row } from 'reactstrap';
import {Search} from "./components/Search";
import {ShortLink} from "./components/ShortLink";


const data = [
    {
        id: 1,
        url: 'www.google.fr',
        shortLink: 'google.short',
        createdAt: '111222'
    },
    {
        id: 2,
        url: 'www.github.fr',
        shortLink: 'github.short',
        createdAt: '111222'
    },
    {
        id: 3,
        url: 'www.twitter.fr',
        shortLink: 'twitter.short',
        createdAt: '111222'
    }
]

function App() {
  return (
    <div className="App">
        <div className="container">
            <Row>
                <Col md="12">
                    <Search button="rechercher"/>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <ShortLink links={data}/>
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default App;
