import React, { Component } from 'react';
import { Input, Button } from 'antd';

function StudentItme (props) {
    let { student } = props;
    return (
        <ul>
            <li></li>
        </ul>
    );
}

class Teacher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            student: [],
            loading: false
        };
    }

    componentDidMount () {
        let student = [
            {
                id: 1,
                name: '张三',
                reward: '5',
            },
            {
                id: 5,
                name: '张四',
                reward: '10',
            },
            {
                id: 10,
                name: '张五',
                reward: '9',
            },
        ];
        // 排序 并且新增 字段
        student.sort((a, b) => +b.reward - +a.reward).map(item => item.input = '');
        this.setState({
            student
        });
    }

    /**
     * 处理老师对学生的评价
     */
    changeEvaluation = (e, item) => {
        let value = e.target.value;
        item.input = value;
    }

    /**
     * 处理点击
     */
    handleSubmit = e => {
        console.log(JSON.parse(JSON.stringify(this.state.student)));
        window.webAdapter.closeWindow();
    }
    render () {
        return (
            <div className='teacher'>
                <div className='teacher-header'>
                    课后评价
                </div>
                <div className='teacher-content'>
                    <ul className='teacher-content-table'>
                        <li>
                            <div className='table-sort flex-center'>排名</div>
                            <div className='table-name flex-center'>姓名</div>
                            <div className='table-reward flex-center'>奖励数</div>
                            <div className='table-evaluation flex-center'>老师评语</div>
                        </li>
                        {
                            this.state.student.map(item => {
                                return (
                                    <li key={item.id}>
                                        <div className='table-sort flex-center'>排名</div>
                                        <div className='table-name flex-center'>{item.name}</div>
                                        <div className='table-reward flex-center'>{item.reward}</div>
                                        <div className='table-evaluation flex-center'><Input placeholder='请在这里输入您对学生的评价' onChange={e => {
                                            this.changeEvaluation(e, item);
                                        }} /></div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className='teacher-content-submit'>
                        <Button type='primary' block size='large' loading={this.state.loading} onClick={this.handleSubmit}>
                            提交
                        </Button>
                    </div>
                </div>
                <style jsx>{`
                    .teacher{
                        
                    }
                    .teacher-header{
                        border-bottom: 1px solid #ddd;
                        height: 70px;
                        text-align: center;
                        line-height: 70px;
                        font-size: 20px;
                        color: #000;
                    }
                    .teacher-content{
                        padding: 25px 20px;
                    }
                    .teacher-content-table{
                        border: 1px solid #ddd;
                    }
                    .table-sort, .table-name, .table-reward{
                        width: 20%;
                    }
                    .table-evaluation{
                        width: 40%;
                    }
                    .teacher-content-table li{
                        display: flex;
                        justify-content: flex-start;
                        min-height: 55px;
                        font-size: 18px;
                        color: #000;
                        border-bottom: 1px solid #ddd;
                    }
                    .table-evaluation{
                        padding: 20px;
                        box-sizing: border-box;
                    }
                    .teacher-content-table li:nth-of-type(1) {
                        background-color: #B0E0E6;
                    }
                    .teacher-content-table li:last-child {
                        border: none;
                    }
                    .teacher-content-submit{
                        width: 40%;
                        margin: 30px auto;
                    }
                `}</style>
            </div >
        );
    }
}

export default Teacher;