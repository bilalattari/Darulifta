import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase'
import { getUsers } from './firebase'
import { Select, Card } from 'antd';
const { Option } = Select;
const { Meta } = Card;

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allUsers: [],
            filterdVal: 0,
            filteredArr: []
        }
        this.allUsers = []
    }
    componentDidMount = async () => {
        this.getUsers()
    }
    getUsers() {
        firebase.database().ref().child('Brother').once('value', (snapshot) => {
            let val = snapshot.val()
            if (val !== null) {
                let arr = Object.values(val)
                console.log(arr, 'arr')
                this.setState({ allUsers: arr })
                this.allUsers = arr
            }
        })
    }
    handleChange = async (array, value) => {
        let { allUsers } = this.state
        if (value !== '') {
            this.setState({ allUsers: this.allUsers }, async () => {
                let filteredNumber = 0
                let arrVal = 0
                let filteredArr = []
                let outOfIfta = ['امامت', 'مؤذنی', 'جامعۃ المدینہ میں تدریس', 'خطابت']
                let usersArr = Object.values(this.allUsers)
                await usersArr.map(async (info) => {
                    let arrValue = ++arrVal
                    await info[array].map((data) => {
                        if (data[outOfIfta[value]]) {
                            filteredArr.push(info)
                            let updatedVal = ++filteredNumber
                        }
                    })
                    console.log(arrVal, 'arrVal')
                    if (arrVal === usersArr.length) {
                        this.setState({ allUsers: filteredArr, filteredNumber: filteredNumber })
                    }
                })
            })
        }
        else {
            this.setState({ allUsers: this.allUsers })
        }
    }
    handleChangeTanzeem = async (array, value) => {
        let { allUsers } = this.state
        if (value !== '') {
            this.setState({ allUsers: this.allUsers }, async () => {
                let filteredNumber = 0
                let arrVal = 0
                let filteredArr = []
                let usersArr = Object.values(this.allUsers)
                await usersArr.map(async (info) => {
                    let arrValue = ++arrVal
                    console.log(value, '+++++++++++++++++++++++')
                    if (info[array][0]['کس سطح پر؟'] === value) {
                        let val = ++filteredNumber
                        console.log(filteredNumber, 'filter number')
                        filteredArr.push(info)
                    }
                    if (arrVal === usersArr.length) {
                        this.setState({ allUsers: filteredArr, filteredNumber: filteredNumber })
                    }
                })
            })
        }
        else {
            this.setState({ allUsers: this.allUsers })
        }
    }
    handleChangeSpeech = async (array, value) => {
        let { allUsers } = this.state
        let outOfIfta = ['ہفتہ وار اجتماع میں بیان کرتے ہیں؟', 'کیا بیانات کرتے ہیں؟']
        if (value !== '') {
            this.setState({ allUsers: this.allUsers }, async () => {
                let filteredNumber = 0
                let arrVal = 0
                let filteredArr = []
                let usersArr = Object.values(this.allUsers)
                await usersArr.map(async (info) => {
                    let arrValue = ++arrVal
                    await info[array].map((data) => {
                        if (data[outOfIfta[value]]) {
                            filteredArr.push(info)
                            let updatedVal = ++filteredNumber
                            console.log(filteredArr, filteredNumber, 'filteredNumber')
                        }
                    })
                    if (arrVal === usersArr.length) {
                        this.setState({ allUsers: filteredArr, filteredNumber: filteredNumber })
                    }
                })
            })
        }
        else {
            this.setState({ allUsers: this.allUsers })
        }
    }
    handleChangeWorld = async (array, value) => {
        let { allUsers } = this.state
        if (value !== '') {
            this.setState({ allUsers: this.allUsers }, async () => {
                let filteredNumber = 0
                let arrVal = 0
                let filteredArr = []
                let usersArr = Object.values(this.allUsers)
                await usersArr.map(async (info) => {
                    let arrValue = ++arrVal
                    await info[array].map((data) => {
                        console.log(data.degree, data.haveDone, ' data.haveDone')
                        if (data.degree === value && data.haveDone) {
                            filteredArr.push(info)
                            let updatedVal = ++filteredNumber
                            console.log(filteredArr, filteredNumber, 'filteredNumber')
                        }
                    })
                    if (arrVal === usersArr.length) {
                        this.setState({ allUsers: filteredArr, filteredNumber: filteredNumber })
                    }
                })
            })
        }
        else {
            this.setState({ allUsers: this.allUsers })
        }
    }
    render() {
        let { allUsers } = this.state
        return (
            <div className="App">
                <div className={"selectorDiv"}>
                    <div className={'selector'}>
                        <Select defaultValue="" style={{ width: '80%' }}
                            onChange={(value) => this.handleChangeTanzeem('tanzeemWork', value)}>
                            <Option value="">تنظیمی ذمہ داری</Option>
                            <Option value="ذیلی">ذیلی</Option>
                            <Option value="حلقہ">حلقہ</Option>
                            <Option value="علاقہ">علاقہ</Option>
                            <Option value="ڈویژن">ڈویژن</Option>
                            <Option value="کابینہ">کابینہ</Option>
                            <Option value="زون">زون</Option>
                        </Select>
                    </div>
                    <div className={'selector special'}>
                        <Select defaultValue="" style={{ width: '90%' }}
                            onChange={(value) => this.handleChange('outOfDarulifta', value)}>
                            <Option value="">دار الافتاء کے علاوہ مصروفیات</Option>
                            <Option value="0">امامت</Option>
                            <Option value="1">مؤذنی</Option>
                            <Option value="2">جامعۃ المدینہ میں تدریس</Option>
                            <Option value="3">خطابت</Option>
                        </Select>
                    </div>
                    <div className={'selector'}>
                        <Select defaultValue="" style={{ width: '80%' }}
                            onChange={(value) => this.handleChangeSpeech('speeches', value)}>
                            <Option value="">بیاىا ت</Option>
                            <Option value="0">ہفتہ وار اجتماع میں بیان</Option>
                            <Option value="1">بیانات کرتے ہیں</Option>
                        </Select>
                    </div>
                    <div className={'selector'}>
                        <Select defaultValue="" style={{ width: '80%' }}
                            onChange={this.handleChange}>
                            <Option value="">سلسلہ</Option>
                            <Option value="کیا آپ مدنی چینل پر سلسلے کرتےہیں؟"> مدنی چینل</Option>
                            <Option value="کیا آپ سوشل میڈیا پر سلسلے کرتےہیں؟"> سوشل میڈیا</Option>
                        </Select>
                    </div>
                    <div className={'selector'}>
                        <Select defaultValue="" style={{ width: '80%' }}
                            onChange={(value) => this.handleChangeWorld('worldlyEducation', value)}>
                            <Option value="">دنیوی تعلیم</Option>
                            <Option value="میٹرک">میٹرک</Option>
                            <Option value="انٹر">انٹر</Option>
                            <Option value="گریجویٹ">گریجویٹ</Option>
                            <Option value="ماسٹر">ماسٹر</Option>
                            <Option value="ایم فل">ایم فل</Option>
                            <Option value="پی ایچ ڈی">پی ایچ ڈی</Option>
                            <Option value="بی ایس">بی ایس</Option>
                            <Option value="عالم فاضل عربی">عالم فاضل عربی</Option>
                        </Select>
                    </div>
                    <div className={'selector'}>
                        <Select defaultValue="" style={{ width: '80%' }}
                            onChange={(value) => this.handleChangeWorld('islamicEducationArr', value)}>
                            <Option value="">اسلامی تعلیم</Option>
                            <Option value="ناظرہ قرآن">ناظرہ قرآن</Option>
                            <Option value="حفظِ قرآن">حفظِ قرآن</Option>
                            <Option value="درسِ نظامی">درسِ نظامی</Option>
                            <Option value="حسنِ قرأت">حسنِ قرأت</Option>
                            <Option value="نعت شریف">نعت شریف</Option>
                        </Select>
                    </div>
                </div>
                <div className={'containerHome'}>
                    {
                        allUsers.map((data, index) => {
                            let item = data['personalInfo']
                            if(item[9]){
                                console.log(item[9])
                            }
                            return (
                                <div className={'containerCards'}>
                                    <div onClick={() => {
                                        this.props.history.push({
                                            pathname: '/detail',
                                            state: {
                                                data: data
                                            }
                                        })
                                    }} >
                                        {
                                            item[9] ?
                                                <Card
                                                    hoverable
                                                    style={{ width: 240 }}
                                                    cover={<img alt="example" src={item[9]['image']} />}
                                                >
                                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                                </Card> :
                                                <Card title={item[1]['Name-نام']} extra={<a href="#">More</a>} style={{ width: 300, }}>
                                                </Card>
                                        }
                                    </div>
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
