import React, {Component} from 'react';
import {Row, Col, Container, Image, Form, Button} from "react-bootstrap";

import './index.sass'

class StudentSlide extends Component {
    render() {
        return (
            <>
                <Container fluid={true} className={'slide-container'} >
                    <Row>
                        <Col md={{offset:2}}>
                            <div className={'slide-title'}>
                                So How Does It Work?
                            </div>
                            <div className={'student-slide-title'}>Student</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{offset:1,span:8}}>
                            <div className={'slide-content'}>
                                <div>
                                    PeerCommerce connects students with compensated micro-
                                    internship opportunities.
                                </div>
                                <div>
                                    1. Sign Up to Learn More and be a member of our talented
                                    cohort
                                </div>
                                <div>
                                    2. Submit your Resume/Portfolio and experience
                                </div>
                                <div>
                                    3. Begin exploring opportunities available near your campus
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Image src={'https://picsum.photos/200/300'} alt={'student page image'} className={'student-image'}/>
                    <Form.Row className={'mt-2'}>
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
            </>
        );
    }
}

export default StudentSlide;