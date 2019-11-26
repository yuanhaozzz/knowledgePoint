import React, { Component } from 'react'

import {connect} from 'react-redux'
import {setTest} from '@/store/actions'
import './home.less'


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.setTest({test: 'test'})
        console.log(this.props.test)
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

let mapStateToProps = state => {
    console.log(state)
    let {test} = state.test
    return {
        test
    }
}

export default connect(
    mapStateToProps,
    {setTest}
)(index);