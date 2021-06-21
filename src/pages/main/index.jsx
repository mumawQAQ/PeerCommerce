import React, {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.sass'

import Header from "../../components/header";


class Index extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className={'home-container'}>
                    <div className={'spliter'}></div>
                    <Container>
                        <Row className={'home-into'}>
                            <Col md={4}></Col>
                            <Col md={{ span: 4, offset: 4 }}>Socially enabling</Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Index;