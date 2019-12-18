import React, { Component } from 'react';

import './loadding.less';

class Loadding extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='loadding-wrapper'>
<<<<<<< HEAD
                <div>
=======
                <div className="loadding-container">
>>>>>>> 28a745e3133f1ad272b73e697d7d632dfe9196d5
                    <div className="spinner flex-center">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
<<<<<<< HEAD
                        <div></div>
=======
>>>>>>> 28a745e3133f1ad272b73e697d7d632dfe9196d5
                    </div>
                    <p>加载中</p>
                </div>
            </div>
        );
    }
}

export default Loadding;