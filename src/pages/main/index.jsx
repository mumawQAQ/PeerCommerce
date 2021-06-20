import React, {Component} from 'react';

import './index.css'

import Header from "../../components/header";


class Index extends Component {
    render() {
        return (
            <div className='main'>
                <Header/>
                <div>
                    index
                </div>
            </div>
        );
    }
}

export default Index;