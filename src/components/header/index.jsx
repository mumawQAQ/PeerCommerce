import React, {Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap'

import './index.sass'
class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="primary">
                    <Navbar.Brand href="#home">
                        <Nav.Link className={'pc-logo'}>
                            <span className={'logo-left mr'}>Peer</span>
                            <span className={'logo-right'}>Co</span>
                        </Nav.Link>
                    </Navbar.Brand>
                </Navbar>
            </>
        );
    }
}

export default Header;