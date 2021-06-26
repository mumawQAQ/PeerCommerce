import React, {Component} from 'react';
import {Row, Col, Container} from "react-bootstrap";

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
                </Container>
            </>
        );
    }
}

export default StudentSlide;