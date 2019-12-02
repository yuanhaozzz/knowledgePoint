import React, { Component, Fragment } from 'react';

import Loading from '../../../../common/loadding'
import { queryUrlParams } from '../../../../../utils/common'
import api from '../../../../../api/apiHost'
import IconGo from '../../../../../assets/images/live/icon-go.png'; 1
import './content.less';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabTitleIndex: 0,
            tabSecondaryIndex: 0,
            questionTypeList: [],
            pageIndexList: [],
            timeout: null,

        };
    }

    componentWillMount () {
        let { questionTypeList } = this.state
        let { homeQuestionList } = this.props
        questionTypeList[0] = homeQuestionList
        this.setState({
            questionTypeList
        })
    }



    componentDidMount () {
        // 设置问题页数
        this.setPageIndex();
        // 绑定滚动事件
        this.bindScrollEvent();
    }

    /**
    * 请求数据
    * @param {boolean} isLoadmore   加载更多
    */
    getQuestionList = (isLoadmore = false) => {
        let { type } = queryUrlParams();
        let { tabTitleIndex, tabSecondaryIndex, questionTypeList, pageIndexList } = this.state;
        let { qaHomeList } = this.props;
        let { questionTypeId } = qaHomeList[tabTitleIndex].subQuestionTypeVoList[tabSecondaryIndex] ? qaHomeList[tabTitleIndex].subQuestionTypeVoList[tabSecondaryIndex] : {};
        // 当前二级菜单问题页数
        let currentIndexList = pageIndexList[tabSecondaryIndex];
        let currentList = questionTypeList[tabSecondaryIndex];

        //
        if (isLoadmore) {
            pageIndexList[tabSecondaryIndex] = ++currentIndexList;
            this.setState({
                pageIndexList
            });
        }
        if (currentList && currentList.haveNextPage === 0) {
            return;
        }
        this.handleLoading(true);

        let params = {
            action: 'getQaQuestionList',
            questionTypeId,
            pageIndex: currentIndexList,
            pageSize: 20,
            displayTerminal: type || '1'
        };
        api.sendBaseApi(params).then(res => {
            let qaQuestionList = res.qaQuestionList;
            // 加载更多
            if (isLoadmore) {
                qaQuestionList = res.qaQuestionList;
                qaQuestionList.questionList = [...currentList.questionList, ...qaQuestionList.questionList];
            }
            currentList = qaQuestionList;
            questionTypeList[tabSecondaryIndex] = currentList;
            this.setState({
                questionTypeList
            });

            setTimeout(() => {
                this.handleLoading(false);
            }, 300);
        }).catch(err => {
            this.handleLoading(false);
        });
    }

    /**
   * 展示loading
   */
    handleLoading = state => {
        this.setState({
            showLoading: state
        });
    }

    /**
     * 切换标题
     */
    switchTab = (index, name) => {
        if (name === 'tabTitleIndex') {
            this.setState({
                tabSecondaryIndex: 0,
                questionTypeList: []
            });
        }
        let srcollWrapper = document.querySelector('.content-list-container');
        srcollWrapper.scrollTop = 0;
        this.setState({
            [name]: index
        }, () => {
            if (name === 'tabTitleIndex') {
                this.setPageIndex();
            } else {
                let { tabSecondaryIndex, questionTypeList } = this.state;
                let data = questionTypeList[tabSecondaryIndex];
                // 当前有数据则不进行请求
                if (data) {
                    return;
                }
            }
            this.getQuestionList();
        });
    }

    /**
   *  记滚动页数
   */

    setPageIndex = () => {
        let { tabTitleIndex } = this.state;
        let { qaHomeList } = this.props;
        let secondaryLength = qaHomeList[tabTitleIndex].subQuestionTypeVoList.length;
        // 设置问题列表页数
        this.setState({
            pageIndexList: new Array(secondaryLength).fill(1)
        });
    }

    jumpToH5 = item => {
        let { questionDescription, answerDescription } = item;
        localStorage.setItem('answerDescription', answerDescription);
        location.href = `/live/qa/detail?title=${encodeURIComponent(questionDescription)}`;
    }


    /**
  * 监听滚动事件
  */
    bindScrollEvent = () => {
        let srcollWrapper = document.querySelector('.content-list-container');
        let timeout = null,
            that = this;
        // scrollHeight = srcollWrapper.scrollHeight;
        srcollWrapper.addEventListener('scroll', e => {
            let { scrollHeight, clientHeight, scrollTop } = srcollWrapper;
            if (scrollTop + clientHeight >= scrollHeight - 100) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    that.getQuestionList(true);
                }, 300)
            }
        });
    }


    /**
     * 渲染标题
     */
    renderTabTitle = () => {
        let { tabTitleIndex } = this.state;
        let { qaHomeList } = this.props;
        return (
            <ul className='content-tab flex-space-between'>
                {
                    qaHomeList.map((item, index) => (
                        <li key={index} onClick={() => this.switchTab(index, 'tabTitleIndex')}>
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
        let { tabTitleIndex, tabSecondaryIndex } = this.state;
        let { qaHomeList } = this.props;
        return (
            <Fragment>
                {
                    qaHomeList[tabTitleIndex].subQuestionTypeVoList.map((item, index) => (
                        <li className={`${tabSecondaryIndex === index && 'content-list-tab-select'} font-size-14`} onClick={() => this.switchTab(index, 'tabSecondaryIndex')} key={index}>
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
        let { tabSecondaryIndex, questionTypeList } = this.state;
        let currentPageData = questionTypeList[tabSecondaryIndex] ? questionTypeList[tabSecondaryIndex].questionList.length : []
        return (
            <Fragment>
                {
                    questionTypeList.map((item, index) => (

                        tabSecondaryIndex === index && <ul key={index}>
                            {
                                item.questionList && item.questionList.map((list, ind) => (
                                    <li key={ind} onClick={() => this.jumpToH5(list)}>
                                        {list.questionDescription}
                                    </li>
                                ))
                            }
                            {
                                item.haveNextPage === 1 ? <p>正在加载更多数据</p> : currentPageData > 10 && <p>没有更多数据</p>
                            }

                        </ul >
                    ))

                }
            </Fragment>

        );
    }
    render () {
        let { showLoading } = this.state;
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
                    <div className='content-list-container'>
                        {
                            this.renderList()
                        }
                    </div>

                </section>
                {
                    showLoading && <Loading ></Loading>
                }

            </div>
        );
    }
}

export default Content;