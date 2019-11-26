import React, { Component } from 'react'

import './home.less'


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * 跳转
     */
    jumpToHtml = () => {
        location.href = '/test'
    }

    render () {
        return (
            <div>
                <p>Home</p>
                <button onClick={this.jumpToHtml}>跳转test</button>
            </div>
        );
    }
}

export default index;