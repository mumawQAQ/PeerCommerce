import React, {Component} from 'react';
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom";

import Index from "./pages/main";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} component={Index}/>
                    <Redirect to={'/'}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;