
import { Button } from 'antd';
import React, { Component } from 'react'


import { Calendar } from 'antd';
class Login extends Component {

    constructor(props) {
        super(props)
    }

    onPanelChange = (value, mode) => {
    console.log(value, mode);
        
    }

    render () {
        return (
            <div>
                <Button type="primary">Button</Button>adasdasd
                <button className="home-submit" onClick={this.handleButton}>按钮</button>
                <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange}/>
                </div>
            </div>
        )
    }

}


export default Login