import React from 'react';
import {Router, Route, IndexRoute} from 'react-router'

import App from '../containers/index'
import Home from '../containers/Main/index';
import NotPage from '../containers/404';

class routerMap extends React.Component {
    render() {
        return(
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="*" component={NotPage}></Route>
                </Route>
            </Router>
        )
    }
}

export default routerMap;