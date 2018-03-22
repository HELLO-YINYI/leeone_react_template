import  React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class NotPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return(
            <div>
                <p>this is Page404</p>
                <h3>没有这个页面哦。。。</h3>
            </div>
        )
    }
}

export default NotPage;