import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase'
import { getUsers } from './firebase'
import { Select, Card } from 'antd';
const { Option } = Select;

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allUsers: {}
        }
    }
    componentDidMount = async () => {
        this.getUsers()
    }
    getUsers() {
        firebase.database().ref().child('Brother').once('value', (snapshot) => {
            let val = snapshot.val()
            this.setState({ allUsers: val })
        })
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        let { allUsers } = this.state
        return (
            <div className="App">
                <div className={"selectorDiv"}>
                    <div className={'selector'}>
                        <Select defaultValue="" style={{ width: '80%' }}
                            onChange={this.handleChange}>
                            <Option value="">تنظیمی ذمہ داری</Option>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                    <div className={'selector'}>
                        <Select defaultValue="" style={{ width: '80%' }}
                            onChange={this.handleChange}>
                            <Option value="">بیاىا ت</Option>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                    <div className={'selector'}>
                        <Select defaultValue="" style={{ width: '80%' }}
                            onChange={this.handleChange}>
                            <Option value="">دنیوی تعلیم</Option>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                    <div className={'selector'}>
                        <Select defaultValue="" style={{ width: '80%' }}
                            onChange={this.handleChange}>
                            <Option value="">اسلامی تعلیم</Option>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                </div>
                <div className={'containerHome'}>

                        {
                            Object.keys(allUsers).map((data, index) => {
                                let item = allUsers[data]['personalInfo']
                                return (
                                    <div className={'containerCards'}>
                                        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300, }}>
                                            <div onClick={() => {
                                                this.props.history.push({
                                                    pathname: '/detail',
                                                    state: {
                                                        data: allUsers[data]
                                                    }
                                                })
                                            }} >
                                                <h2>{item[1]['Name-نام']}  :  نام</h2>
                                                <h2>{item[1]['Father-ولدیت']}  :  ولدیت</h2>
                                            </div>
                                        </Card>
                                    </div>

                                )
                            })
                        }


                </div>
            </div>
        )
    }
}

export default Home;
