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
    let { test, test1 } = state.test
    return {
        test,
        test1
    }
}

export default connect(
    mapStateToProps,
    { setTest, setTest1 }
)(index);


// import React, { Component } from 'react'

// import { connect } from 'react-redux'
// import { getQAType, getQaQuestionList } from '../../../../store/actions/qa'
// import './home.less'
// import api from '../../../../api/apiHost'


// class Home extends Component {
//     static getInintalProps (store, api, params) {
//         return store.dispatch(getQAType(params, api)).then(res => {
//             return store.dispatch(getQaQuestionList(params, api)).then(res => {
//                 return res
//             })
//         })
//     }

//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     componentDidMount () {
//         let { homeType, homeQuestionList } = this.props
//         console.log(homeType, 'homeType')
//         console.log(homeQuestionList, 'homeQuestionList')
//         let params = {
//             action: 'getQAType',
//             displayTerminal: 2
//         }
//         api.sendBaseApi(params).then(res => {
//             console.log(res)
//         })
//     }

//     render () {
//         return (
//             <div className='qa-wrapper'>
//                 {/* <header>
//                     {this.renderSearch()}
//                 </header>
//                 <section>
//                     {this.renderTabContent()}
//                 </section> */}
//             </div>
//         );
//     }
// }

// let mapStateToProps = state => {
//     let { homeType, homeQuestionList } = state.qa
//     console.log(state, '-=-=-=-=-=-=-=')
//     return {
//         homeType,
//         homeQuestionList
//     }
// }

// export default connect(
//     mapStateToProps,
//     { getQAType, getQaQuestionList }
// )(Home);