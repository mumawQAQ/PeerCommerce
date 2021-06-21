import React, {Component} from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
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
                        <Row className={'home-into mt-600'}>
                            <Col md={{ span: 4, offset: 8 }}>Socially enabling</Col>
                        </Row>
                        <Row className={'home-into'}>
                            <Col md={{ span: 4, offset: 8 }}>micro-internships to</Col>
                        </Row>
                        <Row className={'home-into'}>
                            <Col md={{ span: 6, offset: 8 }}>foster economic innovation</Col>
                        </Row>
                        <Row className={'home-into'}>
                            <Col md={{ span: 4, offset: 8 }}>in every community </Col>
                        </Row>
                        <Form.Row className={'mt-5'}>
                            <Col md={{span: 4,offset:6}} >
                                <Form.Control size={'lg'}></Form.Control>
                            </Col>
                            <Col className={'small-button'}>
                                <Button variant="warning" size={'lg'}>
                                    <span className={'home-button'}>JOIN US!</span>
                                </Button>
                            </Col>
                        </Form.Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Index;