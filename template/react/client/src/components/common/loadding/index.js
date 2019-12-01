import React, { Component } from 'react';

import './loadding.less';

class Loadding extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='loadding-wrapper'>
                {/* <Spin tip='Loading...'></Spin> */}
            </div>
        );
    }
}

export default Loadding;