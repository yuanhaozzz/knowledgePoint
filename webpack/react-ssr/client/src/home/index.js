import { Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { test, testAsync } from '../../redux/actions'
import React, { Component } from 'react'


import './home.css'


import Login from '../login/index'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount () {
        // this.props.test([1, 2, 3])
    }

    componentDidMount () {
        const { dispatch, selectedPost, test, list } = this.props
    }

    handleButton = e => {
        this.props.history.push('/login')
    }

    loadData = e => {
    }

    render () {
        let { list } = this.props
        return (
            <div>222大叔大婶啊阿萨德
                {
                    list.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))
                }
                <button className="home-submit" onClick={this.handleButton}>按钮bbbbbbbbbbbbaaaa</button>
            </div>
        )
    }

}

let mapStateToProps = state => {
    return {
        list: state.login.list
    }
}

let home = connect(
    mapStateToProps,
    { test }
)(Home)

home.getInintalProps = store => {
    return store.dispatch(testAsync([1, 2, 3, 45, 6]))
    // console.log(store.dispatch, '==========================')
}

export default home