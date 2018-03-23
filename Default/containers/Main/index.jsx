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
            </div>
        )
    }
}

export default Home;