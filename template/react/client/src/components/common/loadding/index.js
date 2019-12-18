import React, { Component } from 'react';

import './loadding.less';

class Loadding extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='loadding-wrapper'>
                <div>
                    <div className="spinner flex-center">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>加载中</p>
                </div>
            </div>
        );
    }
}

export default Loadding;