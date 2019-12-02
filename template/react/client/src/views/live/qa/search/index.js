import React, { Component, Fragment } from 'react';

import api from '../../../../api/apiHost';
import { queryUrlParams } from '../../../../utils/common';
import './search.less';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchTimer: null,
            pageIndex: 1,
            questionTypeList: {},
            scrollTimer: null
        };
    }

    componentDidMount () {
        this.bindScrollEvent();
    }



    /**
     * 请求数据
     * @param {boolean} isLoadmore   加载更多
     */
    getQuestionList = (isLoadmore = false) => {
        let { type } = queryUrlParams();
        let { questionTypeList, pageIndex } = this.state;
        if (isLoadmore) {
            pageIndex = ++pageIndex;
            this.setState({
                pageIndex
            });
        }
        if (questionTypeList.haveNextPage && questionTypeList.haveNextPage === 0) {
            return;
        }

        let params = {
            action: 'getQaQuestionList',
            keyword: this.state.searchValue,
            pageIndex: pageIndex,
            pageSize: 20,
            displayTerminal: type
        };
        api.sendBaseApi(params).then(res => {

            let qaQuestionList = res.qaQuestionList;
            // 加载更多
            if (isLoadmore) {
                qaQuestionList = res.qaQuestionList;
                qaQuestionList.questionList = [...questionTypeList.questionList, ...qaQuestionList.questionList];
            }
            this.setState({
                questionTypeList: qaQuestionList
            });
            console.log(questionTypeList);

        }).catch(err => {
            this.setState({
                questionTypeList: {}
            });
        });
    }

    /**
     * 跳转
     */
    jumpToH5 = item => {
        let { questionDescription, answerDescription } = item;
        localStorage.setItem('answerDescription', answerDescription);
        location.href = `/live/qa/detail?title=${encodeURIComponent(questionDescription)}`;
    }

    /**
     * 加载更多
     */
    bindScrollEvent = () => {
        let scrollWrapper = document.querySelector('.search-list');
        let scrollTimer = null;
        scrollWrapper.addEventListener('scroll', e => {
            let { scrollHeight, clientHeight, scrollTop } = scrollWrapper;
            if (clientHeight + scrollTop >= scrollHeight - 100) {
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => {
                    this.getQuestionList(true);
                }, 1000)
            }
        });
    }

    /**
     * 输入框输入字符
     */
    onChange = e => {

        let value = e.target.value.replace(/(^\s*)|(\s*$)/g, "");
        let { searchTimer } = this.state;
        this.setState({
            searchValue: value,
            pageIndex: 1
        });


        clearTimeout(searchTimer);
        this.setState({
            searchTimer: setTimeout(() => {
                if (value === '') {
                    return;
                };
                let scrollWrapper = document.querySelector('.search-list');
                scrollWrapper.scrollTop = 0;
                this.getQuestionList();
            }, 1000)
        });
    }

    /**
 * 匹配输入的值
 */
    renderValueList = () => {
        let { questionTypeList } = this.state;
        let currentPageData = questionTypeList ? questionTypeList.length : []
        if (!questionTypeList.questionList) {
            return (
                <p className='loadmore-title'>没有更多数据</p>
            );
        }
        return (
            <Fragment>
                {
                    questionTypeList.questionList.map((item, index) => (
                        <p className='search-list-item' key={index} onClick={() => this.jumpToH5(item)}>{item.questionDescription}</p>
                    ))
                }
                {
                    questionTypeList.haveNextPage === 1 ? <p className='loadmore-title'>正在加载更多数据</p> : currentPageData > 10 && <p className='loadmore-title'>没有更多数据</p>
                }

            </Fragment>
        );

    }

    render () {
        let { searchValue } = this.state;
        return (
            <div className='qa-search-wrapper'>
                <section className='search-input'>
                    <input placeholder='请输入问题名称' onChange={this.onChange} value={searchValue} />
                </section>
                <section className='search-list' style={{ display: searchValue ? 'block' : 'none' }}>
                    {
                        this.renderValueList()
                    }
                </section>


            </div>
        );
    }
}

export default Search;