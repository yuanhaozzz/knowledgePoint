
import React, { Component } from 'react'
import { Button, Icon, Input } from 'antd';
class Home extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                dasdasd
                <Input.Password placeholder="input password" allowClear />
                <Icon type="step-forward" />
                <Icon type="pic-right" />
                <Icon type="profile" />
            </div>
        )
    }
}

export default Home
