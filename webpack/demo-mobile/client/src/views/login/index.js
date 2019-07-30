
import React, { Component } from 'react'
import { connect } from 'react-redux'


class Login extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                login
                {
                    this.props.userInfo.key
                }
            </div>
        )
    }
}

let mapStateToProps = state => {
    console.log(state)
    let { userInfo } = state.login
    return {
        userInfo
    }
}

export default connect(
    mapStateToProps,
    null
)(Login)