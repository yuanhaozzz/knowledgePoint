import React, { Component } from 'react'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    handleButton = e => {
        alert('你大爷')
    }

    render () {
        return (
            <div>
                Home
                <button onClick={this.handleButton}>按钮</button>
            </div>
        )
    }

}

export default Home