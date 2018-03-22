import  React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Link } from 'react-router';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return(
            <div>
                <p>this is Home Component</p>
                <div>
                    <Link to="/todolist">goto 《todolist》</Link>
                </div>
                <div>
                    <Link to="/list">goto 《list》</Link>
                </div>
                <div>
                    <Link to="/react_redux">goto 《react_redux_demo》</Link>
                </div>
                <div>
                    <Link to="/city">goto 《city info》</Link>
                </div>
            </div>
        )
    }
}

export default Home;