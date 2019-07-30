
import React, { Component } from 'react'

import { test, asyncTest } from '@/redux/actions'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    handleJumpTo = () => {
        this.props.history.push('/login')
    }

    handleModify = () => {
        this.props.asyncTest()
    }

    render () {
        return (
            <div>
                Home
                <button onClick={this.handleJumpTo}>跳转</button>
                <button onClick={this.handleModify}>修改</button>
            </div>
        )
    }
}

export default connect(
    null,
    { asyncTest }
)(Home)