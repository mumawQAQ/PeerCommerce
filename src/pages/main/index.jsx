import React, {Component} from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.sass'

import Header from "../../components/header";
import StudentSlide from "../studentSlide";


class Index extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className={'home-container'}>
                    <div className={'spliter'}></div>
                    <Container className={'sm-blur-front'}>
                        <Row className={'home-into mt-600'}>
                            <Col md={{ span: 4, offset: 7 }}>Socially enabling micro-internships to foster economic innovation in every community</Col>
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
                <Container fluid={true} className={'slide-container'} >
                    <Row>
                        <Col md={{offset:2}}>
                            <div className={'slide-title'}>
                                So How Does It Work?
                            </div>
                            <div className={'student-slide-title'}>Student</div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Index;