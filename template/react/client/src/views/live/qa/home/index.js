import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux'
import { getQAType, getQaQuestionList } from '../../../../store/actions/qa'

import dsbridge from '../../../../utils/native'
import { queryUrlParams } from '../../../../utils/common'
import HomeContent from '../../../../components/page/live/qa/home/Content';
import Search from '../../../../assets/images/live/search.png';
import './home.less';

class Home extends Component {

    static getInintalProps (store, api) {
        return store.dispatch(getQAType(api)).then(res => {
            return store.dispatch(getQaQuestionList(api)).then(res => {
                return res
            })
        })
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount () {
        dsbridge.goBackAction(1)
    }

    /**
    * 跳转搜索页
    */
    jumpToH5 = () => {
        let { type } = queryUrlParams();
        location.href = `/ipad/live/qa/search?type=${type || 2}`;
    }

    /**
     * 首页搜索
     */
    renderSearch = () => {
        return (
            <div className='header-wrapper flex-center'>
                <div className='header-search' onClick={this.jumpToH5}>请输入你的问题或关键字</div>
            </div>
        );
    }

    /**
     * tab 及 列表
     */
    renderTabContent = () => {

        return (
            <Fragment>
                <HomeContent {...this.props}></HomeContent>
            </Fragment>
        );
    }

    render () {
        return (
            <div className='qa-wrapper'>
                <header>
                    {this.renderSearch()}
                </header>
                {/* tab选项内容 */}
                <section className="qa-home-content">
                    {this.renderTabContent()}
                </section>
            </div>
        );
    }
}

let mapStateToProps = state => {
    let { qaHomeList, homeQuestionList } = state.qa
    return {
        qaHomeList,
        homeQuestionList
    }
}

export default connect(
    mapStateToProps,
    null
)(Home);