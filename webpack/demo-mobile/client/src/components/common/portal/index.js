import React, {Component} from 'react'
import ReactDom from 'react-dom'
const modalRoot = document.body;
class Medal extends Component {

    constructor(props) {
        super(props)
        this.el = document.createElement('div');

        console.log(this)
    }

    componentDidMount() {
        modalRoot.appendChild(this.el)
    }
    render () {
        return (
            ReactDom.createPortal(
                this.props.children,
                this.el
            )
        )
    }

    
}

class TestPortal extends Component{
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Medal>
                    阿拉啦啦啦
                </Medal>
            </div>
        )
    }
}

export default TestPortal