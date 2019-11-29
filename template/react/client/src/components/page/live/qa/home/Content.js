import React, { Component, Fragment } from 'react';

import IconGo from '../../../../../assets/images/live/icon-go.png';
import './content.less';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabTitleIndex: 0,
            tabSecondaryIndex: 0,
            data: [{ "id": 1, "name": "运行环境", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "questionLevelTwoList": [{ "id": 1, "name": "电脑配置", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": [{ "id": 1, "questionDescription": "怎么看回放?", "displayTerminal": 1, "answerDescription": "用chrome浏览器看", "createUserName": "admin", "createTime": "2019-11-22T14:23:45.3050001+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00" }, { "id": 1, "questionDescription": "可以用手机登录吗 ？?", "displayTerminal": 1, "answerDescription": "不行啊", "createUserName": "admin", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00" }] }, { "id": 1, "name": "电脑配置", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": null }, { "id": 1, "name": "电脑配置", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": null }, { "id": 1, "name": "电脑配置", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": null }, { "id": 1, "name": "电脑配置", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": null }, { "id": 1, "name": "电脑配置", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": null }, { "id": 1, "name": "电脑配置", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": null }, { "id": 1, "name": "电脑配置", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": null }, { "id": 1, "name": "电脑配置", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": null }, { "id": 2, "name": "软件境", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": [{ "id": 1, "questionDescription": "怎么看回放?", "displayTerminal": 1, "answerDescription": "用chrome浏览器看", "createUserName": "admin", "createTime": "2019-11-22T14:23:45.3050001+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00" }, { "id": 1, "questionDescription": "可以用手机登录吗 ？?", "displayTerminal": 1, "answerDescription": "不行啊", "createUserName": "admin", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00" }] }] },

            { "id": 1, "name": "运行环境", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "questionLevelTwoList": [{ "id": 1, "name": "电脑配置", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": null }, { "id": 2, "name": "软件环境", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": [{ "id": 1, "questionDescription": "怎么看回放?", "displayTerminal": 1, "answerDescription": "用chrome浏览器看", "createUserName": "admin", "createTime": "2019-11-22T14:23:45.3050001+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00" }, { "id": 1, "questionDescription": "可以用手机登录吗 ？?", "displayTerminal": 1, "answerDescription": "不行啊", "createUserName": "admin", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00" }] }] }, { "id": 1, "name": "运行环境", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "questionLevelTwoList": [{ "id": 1, "name": "电配置", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": null }, { "id": 2, "name": "软件环境", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00", "QuestionAnswerList": [{ "id": 1, "questionDescription": "怎么看回放?", "displayTerminal": 1, "answerDescription": "用chrome浏览器看", "createUserName": "admin", "createTime": "2019-11-22T14:23:45.3050001+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00" }, { "id": 1, "questionDescription": "可以用手机登录吗 ？?", "displayTerminal": 1, "answerDescription": "不行啊", "createUserName": "admin", "createTime": "2019-11-22T14:23:45.3069964+08:00", "updateTime": "2019-11-22T14:23:45.3069964+08:00" }] }] }]
        };
    }

    /**
     * 切换标题
     */
    swtichTab = (index, name) => {

        if (name === 'tabTitleIndex') {
            this.setState({
                tabSecondaryIndex: 0
            });
        }

        this.setState({
            [name]: index
        });
    }


    /**
     * 渲染标题
     */
    renderTabTitle = () => {
        let { data, tabTitleIndex } = this.state;
        return (
            <ul className='content-tab flex-space-between'>
                {
                    data.map((item, index) => (
                        <li key={index} onClick={() => this.swtichTab(index, 'tabTitleIndex')}>
                            <div className={`content-tab-name flex-center ${tabTitleIndex === index && 'content-tab-name-select'}`}>
                                {item.name}
                                {
                                    tabTitleIndex === index ? <div className='content-tab-line'></div> : <div className='content-tab-empty'></div>
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
        );
    }

    /**
     * 渲染二级菜单
     */
    renderSecondaryMenu = () => {
        let { data, tabTitleIndex, tabSecondaryIndex } = this.state;
        return (
            <Fragment>
                {
                    data[tabTitleIndex].questionLevelTwoList.map((item, index) => (
                        <li className={`${tabSecondaryIndex === index && 'content-list-tab-select'}`} onClick={() => this.swtichTab(index, 'tabSecondaryIndex')} key={index}>
                            {item.name}
                            {
                                tabSecondaryIndex === index && <div className='secondary-triangle'></div>
                            }

                        </li>
                    ))
                }
            </Fragment>
        );
    }

    /**
     * 渲染右侧问题列表
     */
    renderList = () => {
        let { data, tabTitleIndex, tabSecondaryIndex } = this.state;
        let renderList = data[tabTitleIndex].questionLevelTwoList[tabSecondaryIndex].QuestionAnswerList;
        let list = renderList ? renderList : [];
        return (
            <Fragment>
                {
                    list.map((item, index) => (
                        <li key={index} style={{ "background": `url(${IconGo}) no-repeat` }}>
                            {item.questionDescription}
                        </li>
                    ))
                }
            </Fragment>
        );
    }
    render () {
        let { data, tabTitleIndex } = this.state;
        return (
            <div className='qa-home-content-wrapper'>
                <section>
                    {
                        this.renderTabTitle()
                    }
                </section>
                <section className='content-list flex-center'>
                    <ul className='content-list-tab'>
                        {
                            this.renderSecondaryMenu()
                        }
                    </ul>
                    <ul className='content-list-container'>
                        {
                            this.renderList()
                        }
                    </ul>
                </section>
            </div>
        );
    }
}

export default Content;