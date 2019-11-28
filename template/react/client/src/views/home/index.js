import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setTest, setTest1 } from '../../store/actions'
import './home.less'
import Environment from '../../utils/environment'


class index extends Component {

    static getInintalProps = store => {
        let promise = [store.dispatch(setTest()), store.dispatch(setTest1())]
        Promise.all(promise).then(res => {
            console.log(res, '----------------')
            return res
        })
        
    }

    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount () {
        console.log(Environment.DOMAIN, '----------环境')
        console.log(this.props.test, '---------------')
        console.log(12121)
    }

    /**
    * 跳转
    */
    jumpToHtml = () => {
        location.href = '/test'
    }

    render () {
        let { test, test1 } = this.props
        return (
            <div>
                <p>Home</p>
                <button onClick={this.jumpToHtml}>{test}</button>
                <button onClick={this.jumpToHtml}>{test1}</button>
            </div>
        );
    }
}

let mapStateToProps = state => {
    let { test,test1 } = state.test
    return {
        test,
        test1
    }
}

export default connect(
    mapStateToProps,
    { setTest, setTest1 }
)(index);