import React, { Component } from 'react';

import { Consumer } from './index'

class ContextC extends Component {
    // static contextType = Color
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        // console.log(this.context());
    }

    render () {
        return (
            <Consumer>
                {
                    value => (
                        <div style={{ "color": value }}>
                            1213
                        </div >
                    )
                }
            </Consumer>
           
        );
    }

}

export default ContextC