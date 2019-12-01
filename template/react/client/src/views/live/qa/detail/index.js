import React, { Component } from 'react';
import {queryUrlParams} from '../../../../utils/common'
import './detail.less';
class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            htmlFragment: '',
            qaDetailTitle: ''
        };
    }

    componentDidMount () {
      this.setInitData()
    }

    /**
     * 初始化数据
     */
    setInitData = () => {
        let htmlFragment = localStorage.getItem('answerDescription') || '';
        let {title} = queryUrlParams()
        this.setState({
            htmlFragment,
            qaDetailTitle: decodeURIComponent(title)
        });
    }

    render () {
        let { htmlFragment, qaDetailTitle } = this.state;
        return (
            <div className='detail-wrapper'>
                <div className='detail-container'>
                    <div className='detail-title'>{qaDetailTitle}</div>
                    <div className='detail-content' dangerouslySetInnerHTML={{ __html: htmlFragment }}></div>
                </div>
            </div>
        );
    }
}

export default Detail