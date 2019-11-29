import React, { Component } from 'react';

import { List, InputItem, WhiteSpace } from 'antd-mobile';
import './search.less';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            question: ['abcd', 'abc', 'abcde', 'abdcqw']
        };
    }

    /**
     * 匹配输入的值
     */
    searchValue = () => {
        let { question, searchValue } = this.state;
        if (!searchValue) {
            return (
                <p></p>
            );
        }
        let value = question.filter(item => item.includes(searchValue));
        if (value.length === 0) {
            return (
                <p>未找到相关问题</p>
            );
        }
        return value.map(item => {
            return (
                <p className='search-list-item'>{item}</p>
            );
        });

    }

    render () {
        let { searchValue } = this.state;
        return (
            <div className='qa-search-wrapper'>
                <section className='search-input'>
                    <InputItem
                        clear
                        placeholder='请输入问题名称'
                        onChange={(v) => this.setState({ searchValue: v })}
                    ></InputItem>
                </section>
                {
                    searchValue && <section className='search-list'>
                        {this.searchValue()}
                    </section>
                }

            </div>
        );
    }
}

export default Search;