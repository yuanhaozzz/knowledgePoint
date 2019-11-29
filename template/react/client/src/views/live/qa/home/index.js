import React, { Component } from 'react';

import HomeContent from '../../../../components/page/live/qa/home/Content';
import Search from '../../../../assets/images/live/search.png';
import './home.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    /**
     * 跳转搜索页
     */
    jumpToH5 = () => {

    }

    /**
     * 首页搜索
     */
    renderSearch = () => {

        return (
            <div className='header-wrapper'>
                <div className='header-search' style={{ 'background': `url(${Search}) no-repeat` }} onClick={this.jumpToH5}>输入你的问题或关键字</div>
            </div>
        );
    }

    /**
     * tab 及 列表
     */
    renderTabContent = () => {

        return (
            <div>
                <HomeContent></HomeContent>
            </div>
        );
    }

    render () {
        return (
            <div className='qa-wrapper'>
                <header>
                    {this.renderSearch()}
                </header>
                {/* tab选项内容 */}
                <section>
                    {this.renderTabContent()}
                </section>
            </div>
        );
    }
}

export default Home;