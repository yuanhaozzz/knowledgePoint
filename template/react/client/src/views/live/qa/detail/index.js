import React, { Component } from 'react';

import './detail.less';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div className='detail-wrapper'>
                <div className='detail-title'>奥术大师大所多</div>
                <div className='detail-content'></div>
            </div>
        );
    }
}

export default Detail;