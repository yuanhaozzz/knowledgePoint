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
    render () {
        return (
        <div>Home {this.props.test}</div>
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