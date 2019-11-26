import React, { Component } from 'react'

import {connect} from 'react-redux'
import {setTest} from '@/store/actions'
import './home.less'


class index extends Component {

    static getInintalProps = store => {
        console.log(11111111111111)
        return store.dispatch(setTest())
    }

    constructor(props) {
        super(props);
        this.state = {};
    }
    

    componentDidMount() {
        console.log(this.props.test, '---------------')
    }

     /**
     * 跳转
     */
    jumpToHtml = () => {
        location.href = '/test'
    }

    render () {
        let {test} = this.props
        return (
            <div>
                <p>Home</p>
        <button onClick={this.jumpToHtml}>跳转test{test}</button>
            </div>
        );
    }
}

let mapStateToProps = state => {
    let {test} = state.test
    return {
        test
    }
}

export default connect(
    mapStateToProps,
    {setTest}
)(index);