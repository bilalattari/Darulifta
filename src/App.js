import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { Steps, Input, Button, Icon, Select, Radio, Checkbox } from 'antd';
const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;

const languageArr = [
  {
    name: 'اردو',
    accent: false,
    read: false,
    write: false,
    speak: false,
    understand: false,
    where: '',
    howMuch: '',
    current: ['بیتر', 'مناسب', 'کمزور']
  },
  {
    name: 'پنجابی',
    accent: false,
    read: false,
    write: false,
    speak: false,
    understand: false,
    where: '',
    howMuch: '',
    current: ['بیتر', 'مناسب', 'کمزور']
  },
  {
    name: 'سندھی',
    accent: false,
    read: false,
    write: false,
    speak: false,
    understand: false,
    where: '',
    howMuch: '',
    current: ['بیتر', 'مناسب', 'کمزور']
  },
  {
    name: 'پشتو',
    accent: false,
    read: false,
    write: false,
    speak: false,
    understand: false,
    where: '',
    howMuch: '',
    current: ['بیتر', 'مناسب', 'کمزور']
  },
  {
    name: 'انگلش',
    accent: false,
    read: false,
    write: false,
    speak: false,
    understand: false,
    where: '',
    howMuch: '',
    current: ['بیتر', 'مناسب', 'کمزور']
  },
  {
    name: 'سرائیکی',
    accent: false,
    read: false,
    write: false,
    speak: false,
    understand: false,
    where: '',
    howMuch: '',
    current: ['بیتر', 'مناسب', 'کمزور']
  },
  {
    name: 'عربی',
    accent: false,
    read: false,
    write: false,
    speak: false,
    understand: false,
    where: '',
    howMuch: '',
    current: ['بیتر', 'مناسب', 'کمزور']
  }
]
const YearDropDown = (props) =>
  <Select onChange={(value) => props.onChange(value)} style={{ width: 80 }}
    defaultValue={"1999"} className={"tdSelect"} name="گریڈ" >
    <Option value='1990'>1990</Option>
    <Option value='1991'>1991</Option>
    <Option value='1992'>1992</Option>
    <Option value='1993'>1993</Option>
    <Option value='1994'>1994</Option>
    <Option value='1995'>1995</Option>
    <Option value='1996'>1996</Option>
    <Option value='1997'>1997</Option>
    <Option value='1998'>1998</Option>
    <Option value='1999'>1999</Option>
    <Option value='2000'>2000</Option>
    <Option value='2001'>2001</Option>
    <Option value='2002'>2002</Option>
    <Option value='2003'>2003</Option>
    <Option value='2004'>2004</Option>
    <Option value='2005'>2005</Option>
    <Option value='2006'>2006</Option>
    <Option value='2007'>2007</Option>
    <Option value='2008'>2008</Option>
    <Option value='2009'>2009</Option>
    <Option value='2010'>2010</Option>
    <Option value='2011'>2011</Option>
    <Option value='2012'>2012</Option>
    <Option value='2013'>2013</Option>
    <Option value='2014'>2014</Option>
    <Option value='2015'>2015</Option>
    <Option value='2016'>2016</Option>
    <Option value='2017'>2017</Option>
    <Option value='2018'>2018</Option>
    <Option value='2019'>2019</Option>
  </Select>

const GradeDropDown = (props) =>
  <Select onChange={(value) => props.onChange(value)} defaultValue={'A'} className={"tdSelect"} name="گریڈ" >
    <Option value="A*">A*</Option>
    <Option value="A">A</Option>
    <Option value="B">B</Option>
    <Option value="C">C</Option>
    <Option value="D">D</Option>
    <Option value="E">E</Option>
  </Select>
const Duration = (props) =>
  <Select onChange={(value) => props.onChange(value)}
    defaultValue={"1"}
    className={"tdSelect"} name="گریڈ" >
    <Option value="1">1</Option>
    <Option value="2">2</Option>
    <Option value="3">3</Option>
    <Option value="4">4</Option>
    <Option value="5">5</Option>
    <Option value="6">6</Option>
  </Select>

const YesnoDropDown = (props) =>
  <Select className={"tdSelect"} 
  onChange={(value) => props.onChange(value)}
  name="گروپ"
  defaultValue={"yes"} >
    <Option value="yes">جی ہاں</Option>
    <Option value="no">جی نہیں</Option>
  </Select>
const lang = ['Urdu' , 'Arabic' , 'Farsi' , 'Sindhi' , 'English'];
const children = []
for (let i = 0; i < lang.length; i++) {
  children.push(<Option key={lang[i]}>{lang[i]}</Option>);
}
const CustomInput = (props) =>
  <div className='inputrowchild' >
    {
      !props.label ?
        <span className={props.className ? `inputHeading ${props.className}` : 'inputHeading'}>{props.title}</span>
        : null}
    <br />
    <Input className={props.className ? `input ${props.className}` : 'input'}
      placeholder={props.title}
      onChange={props.onChange}
      type={props.type ? props.type : null} />
  </div>

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      countNumber: 8,
      driving: false,
      license: false,
      name: "",
      father: '',
      nationality: "",
      passport: "",
      cnic: '',
      ptcl: "",
      mobile: "",
      desease: "",
      bloodGroup: "",
      maritialStatus: "",
      emergency: "",
      facebook: "",
      whatsapp: '',
      skype: "",
      linkedIn: "",
      twitter: "",
      instagram: '',
      worldlyEducation: [
        {
          degree: 'میٹرک',
          grade: '',
          status: '',
          group: "",
          showGroup: true,
          institution: "",
          city: "",
          passingYear: ''
        },
        {
          degree: 'انٹر',
          grade: '',
          status: '',
          group: "",
          institution: "",
          city: "",
          showGroup: true,
          passingYear: ''
        },
        {
          degree: 'گریجویٹ',
          grade: '',
          status: '',
          group: "",
          institution: "",
          showGroup: true,
          city: "",
          passingYear: ''
        },
        {
          degree: 'ماسٹر',
          grade: '',
          status: '',
          group: "",
          showGroup: false,
          institution: "",
          city: "",
          passingYear: ''
        },
        {
          degree: 'ایم فل',
          grade: '',
          status: '',
          group: "",
          showGroup: false,
          institution: "",
          city: "",
          passingYear: ''
        },
        {
          degree: 'پی ایچ ڈی',
          grade: '',
          status: '',
          group: "",
          showGroup: false,
          institution: "",
          city: "",
          passingYear: ''
        },
        {
          degree: ' بی ایس',
          grade: '',
          status: '',
          group: "",
          showGroup: false,
          institution: "",
          city: "",
          passingYear: ''
        },
        {
          degree: 'عالم فاضل عربی',
          grade: '',
          status: '',
          showGroup: false,
          group: "",
          institution: "",
          city: "",
          passingYear: ''
        },
        {
          degree: 'اس کے علاوہ وکوئی دوسرا کورس',
          grade: '',
          status: '',
          showGroup: false,
          group: "",
          institution: "",
          city: "",
          passingYear: ''
        },
      ],
      islamicEducationArr: [
        {
          degree: 'ناظرہ قرآن',
          grade: '',
          institution: "",
          city: "",
          passingYear: ''
        },
        {
          degree: 'حفظِ قرآن',
          grade: '',
          institution: "",
          city: "",
          passingYear: ''
        },
        {
          degree: 'درسِ نظامی',
          grade: '',
          institution: "",
          city: "",
          passingYear: ''
        },
        {
          degree: 'حسنِ قرأت',
          grade: '',
          showDropDown: true,
          institution: "",
          city: "",
          passingYear: ''
        },
        {
          degree: 'نعت شریف',
          grade: '',
          institution: "",
          showDropDown: true,
          city: "",
          passingYear: ''
        },
        {
          degree: 'اس کے علاوہ وکوئی دوسرا کورس  ',
          grade: '',
          institution: "",
          city: "",
          passingYear: ''
        },
      ],
      skillsArr: [
        {
          course: '',
          subjects: '',
          institution: '',
          city: '',
          grade: '',
          years: '',
        },
        {
          course: '',
          subjects: '',
          institution: '',
          city: '',
          grade: '',
          years: '',
        },
        {
          course: '',
          subjects: '',
          institution: '',
          city: '',
          grade: '',
          years: '',
        },
      ]
    }
  }
  handleChange(name, value) {
    console.log(`selected ${name} ${value}`);
    this.setState({ [name]: value })
  }
  handleArrayChange = (value, index, propert, array) => {
    let arr = this.state[array]
    arr[index][propert] = value
    console.log(arr, 'arr')
    this.setState({ [array]: arr })
  }
  onchangetext = (name, val) => {
    console.log(name, val, 'valll')
    this.setState({ [name]: val })
  }
  render() {
    let { countNumber, driving, license, worldlyEducation, skillsArr, islamicEducationArr } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <div className='header'>
            <p> دار الافتاء</p>
            <p>  کوائف فازو برائے دارالفتاء اہلسنت</p>
            <p> دار الافتاء</p>
          </div>
          <div className={"stepDiv"}>
            <Steps direction={'vertical'} current={countNumber}>
              <Step title="ذاتی معلومات" description="" />
              <Step title="سوشل میڈیا اکاؤنٹ" description="" />
              <Step title="پتہ" description="" />
              <Step title="دنیوی تعلیم" description="" />
              <Step title="اسلامی  تعلیم" description="" />
              <Step title="دیگر پیشہ ورانہ صلاحیت" description="" />
              <Step title="دارالافتاء کے علاوہ مصروفیات" description="" />
              <Step title="مطالعہ" description="" />
              <Step title="زبان میں مہارت" description="" />
              <Step title="سلسلہ" description="" />
              <Step title="تنظیمی ذمہ داری" description="" />
              <Step title="د فتری استعمال" description="" />
            </Steps>
          </div>

          <div className={"rightDiv"}>
            {
              countNumber === 0 ?
                <div className={'counter'}>
                  <div className='header inputrow'>
                    <CustomInput onChange={(e) => this.onchangetext('name', e.target.value)} title={'Father-ولدیت'} />
                    <CustomInput onChange={(e) => this.onchangetext('father', e.target.value)} title={'Name-نام'} />
                  </div>
                  <div className='header inputrow'>
                    <CustomInput onChange={(e) => this.onchangetext('nationality', e.target.value)} title={'Nationality -قومیت'} />
                    <CustomInput onChange={(e) => this.onchangetext('dob', e.target.value)} title={'Date of Birth - تاریخ پیدائش'} type={'date'} />
                  </div>
                  <div className='header inputrow'>
                    <CustomInput onChange={(e) => this.onchangetext('passport', e.target.value)} title={'Passport No. - پاسپورٹ نمبر'} type={'number'} />
                    <CustomInput onChange={(e) => this.onchangetext('cnic', e.target.value)} title={'NIC/ID -شناختی کارڈ نمبر/  آئی ڈی '} type={'number'} />
                  </div>
                  <div className='header inputrow'>
                    <CustomInput onChange={(e) => this.onchangetext('ptcl', e.target.value)} title={'PTCL-پی ٹی سی ایل نمبر'} type={'number'} />
                    <CustomInput onChange={(e) => this.onchangetext('mobile', e.target.value)} title={'Mobile No. -موبائل نمبر'} type={'number'} />
                  </div>
                  <div className='header inputrow'>
                    <CustomInput onChange={(e) => this.onchangetext('desease', e.target.value)} title={'Chronic Disease - دائمی مرض'} />
                    <div className='inputrowchild' >
                      <span className={'inputHeading'}>Blood Group - بلڈ گروپ</span> <br />
                      <Select className='input dropdown' defaultValue="A+" onChange={(value) => this.handleChange('bloodGroup', value)} >
                        <Option value="A+">A+</Option>
                        <Option value="A-">A-</Option>
                        <Option value="B+">B+</Option>
                        <Option value="B-">B-</Option>
                        <Option value="AB+">AB+</Option>
                        <Option value="AB-">AB-</Option>
                        <Option value="O+">O+</Option>
                        <Option value="O-">O-</Option>
                      </Select>
                    </div>
                  </div>
                  <div className='header inputrow'>
                    <div className='inputrowchild' >
                      <span className={'inputHeading'}>Marital Status - ازدواجی حیثیت</span> <br />
                      <Select className='input dropdown' defaultValue="Married" onChange={(value) => this.handleChange('maritialStatus', value)}  >
                        <Option value="">Marital Status - ازدواجی حیثیت</Option>
                        <Option value="Married">شادی شدہ</Option>
                        <Option value="unmarried">غیر شادی شادی شدہ</Option>
                      </Select>
                    </div>
                    <CustomInput onChange={(e) => this.onchangetext('emergency', e.target.value)} title={'Emergency No. - ایمرجنسی نمبر'} type={'number'} />
                  </div>
                  <div className='header inputrow'>
                    <div className='inputrowchild' >
                      <Checkbox value={driving} onChange={() => this.setState({ driving: !driving })} ></Checkbox>
                      <span className={'checkbox'}>ڈرائیونگ آتی ہے۔ </span> <br />
                    </div>
                    <div className='inputrowchild' >
                      <Checkbox value={license} onChange={() => this.setState({ license: !license })} ></Checkbox>
                      <span className={'checkbox'}> لائسنس بنا ہوا ہے</span> <br />
                    </div>
                  </div>
                </div>
                : null
            }




            {
              countNumber === 1 ?
                <div className={'counter'}>
                  <p>Social Media Accounts  سوشل میڈیا اکاؤنٹ</p>

                  <div className='header inputrow accounts'>
                    <CustomInput className={"social"} onChange={(e) => this.onchangetext('facebook', e.target.value)} title={'Facebook'} />
                    <CustomInput className={"social"} onChange={(e) => this.onchangetext('whatsapp', e.target.value)} title={'Whatsapp '} />
                  </div>
                  <div className='header inputrow accounts'>
                    <CustomInput className={"social"} onChange={(e) => this.onchangetext('twitter', e.target.value)} title={'Twitter'} />
                    <CustomInput className={"social"} onChange={(e) => this.onchangetext('skype ', e.target.value)} title={'Skype '} />
                  </div>
                  <div className='header inputrow accounts'>
                    <CustomInput className={"social"} onChange={(e) => this.onchangetext('intagram', e.target.value)} title={'Instagram'} />
                    <CustomInput className={"social"} onChange={(e) => this.onchangetext('linkedIn', e.target.value)} title={'Linked In '} />
                  </div>
                </div> : null
            }

            {
              countNumber === 2 ?
                <div className={'counter'}>
                  <p>Address  پتہ</p>
                  <div id={'address'}>
                    <div className='header inputrow accounts'>
                      <div className='inputrowchild' >
                        <span className={'inputHeading'}>سرکاری صوبہ </span> <br />
                        <Select className='input dropdown' defaultValue="سندھ" onChange={(value) => this.handleChange('province', value)}  >
                          <Option value="سندھ">سندھ</Option>
                          <Option value="پنجاب">پنجاب</Option>
                          <Option value="بلوچستان">بلوچستان</Option>
                          <Option value="خیبر پختون خواہ">خیبر پختون خواہ</Option>
                        </Select>
                      </div>
                      <CustomInput width={true} title={'مکان نمبر'} />
                      <CustomInput width={true} title={'گلی نمبر'} />
                      <CustomInput width={true} title={'علاقہ/محلہ'} />
                      <CustomInput width={true} title={'شہر '} />
                    </div>

                  </div>
                  <div className='header inputrow accounts'>
                    <br />
                    <div className='inputrowchild' >
                      <span className={'inputHeading'}>مکان کی حیثیت </span>  <br />
                      <Select className='input dropdown' defaultValue="ذاتی" onChange={(value) => this.handleChange('houseVal', value)}  >
                        <Option value="ذاتی">ذاتی</Option>
                        <Option value="کرائے پر">کرائے پر</Option>
                        <Option value="مسجد کی طرف سے">مسجد کی طرف سے</Option>
                        <Option value="مدنی مرکز کی طرف سے">مدنی مرکز کی طرف سے</Option>
                      </Select>
                    </div>
                  </div>
                </div> : null
            }
            {
              countNumber === 3 ?
                <div className={'counter'}>
                  <p>تعلیمی پسِ منظر</p>
                  <div className={"table-div"}>
                    <table>
                      <tr>
                        <td className={'tableHeading'} colSpan={'7'}>دنیاوی  تعلیم</td>
                      </tr>
                      <tr>
                        <td  >Passing Year</td>
                        <td  >Grade/CGPA گریڈ</td>
                        <td  >City شہر</td>
                        <td  >Institution ادارہ</td>
                        <td  >ریگولر/پرائیوٹ</td>
                        <td  >گروپ (سائنس /آرٹس)</td>
                        <td  >Degree سند</td>
                      </tr>
                      {
                        worldlyEducation.map((data, index) =>
                          <tr key={index}>
                            <td >
                              <YearDropDown onChange={(value) => this.handleArrayChange(value, index, 'passingYear', 'worldlyEducation')} />
                            </td>
                            <td ><GradeDropDown onChange={(value) => this.handleArrayChange(value, index, 'grade', 'worldlyEducation')} /></td>
                            <td ><Input
                              onChange={(e) => this.handleArrayChange(e.target.value, index, 'city', 'worldlyEducation')}
                              className={'tableInput'} placeholder={'شہر'} /></td>
                            <td ><Input
                              onChange={(e) => this.handleArrayChange(e.target.value, index, 'institution', 'worldlyEducation')}
                              className={'tableInput'} placeholder={'ادارہ'} /> </td>
                            <td >
                              <Select
                                onChange={(value) => this.handleArrayChange(value, index, 'group', 'worldlyEducation')}
                                className={"tdSelect"} name="گروپ" defaultValue={"ریگولر"} >
                                <Option value="ریگولر">ریگولر</Option>
                                <Option value="پرائیوٹ">پرائیوٹ</Option>
                              </Select>
                            </td>
                            <td >
                              {
                                data.showGroup ?
                                  <Select className={"tdSelect"} name="گروپ"
                                    onChange={(value) => this.handleArrayChange(value, index, 'group', 'worldlyEducation')}
                                    defaultValue={"سائنس"}>
                                    <Option value="سائنس">سائنس</Option>
                                    <Option value="کامرس">کامرس</Option>
                                    <Option value="آرٹس">آرٹس</Option>
                                  </Select> :
                                  <Input className={'tableInput'} placeholder={'Subject'} />
                              }
                            </td>
                            <td style={{ fontWeight: "bold" }} >{data.degree}</td>
                          </tr>
                        )
                      }

                    </table>
                  </div>
                </div> : null}
            {countNumber == 4 ?
              <div className={"table-div"}>
                <table>
                  <tr>
                    <td className={'tableHeading'} colSpan={'5'}>اسلامی  تعلیم</td>
                  </tr>
                  <tr>
                    <td  >Passing Year</td>
                    <td  >Grade/CGPA گریڈ</td>
                    <td  >City شہر</td>
                    <td  >Institution ادارہ</td>
                    <td  >Degree سند</td>
                  </tr>
                  {
                    islamicEducationArr.map((data, index) =>
                      <tr>
                        <td ><YearDropDown
                          onChange={(value) => this.handleArrayChange(value, index, 'passingYear', 'islamicEducationArr')} /></td>
                        <td ><GradeDropDown
                          onChange={(value) => this.handleArrayChange(value, index, 'grade', 'islamicEducationArr')} /></td>
                        <td ><Input
                          onChange={(e) => this.handleArrayChange(e.target.value, index, 'city', 'islamicEducationArr')}
                          className={'tableInput'}
                          placeholder={'شہر'} /></td>
                        <td ><Input
                          onChange={(e) => this.handleArrayChange(e.target.value, index, 'institution', 'islamicEducationArr')}
                          className={'tableInput'}
                          placeholder={'ادارہ'} /> </td>
                        <td style={{ fontWeight: "bold" }} >{data.degree}</td>
                      </tr>
                    )
                  }
                </table>
              </div>
              : null
            }
            {countNumber == 5 ?
              <div className={"table-div"}>
                <table>
                  <tr>
                    <td className={'tableHeading'} colSpan={'6'}>دیگر پیشہ ورانہ صلاحیت</td>
                  </tr>
                  <tr>
                    <td  >Duration/Year-دورانیہ/سال</td>
                    <td  >Grade/CGPA گریڈ</td>
                    <td  >City شہر</td>
                    <td  >Institution ادارہ</td>
                    <td  >Major Subjects-مضامین</td>
                    <td  >Course Diploma کورس ڈپلومہ</td>
                  </tr>
                  {
                    skillsArr.map((data, index) =>
                      <tr>
                        <td ><Duration onChange={(value) => this.handleArrayChange(value, index, data.years, 'skillsArr')} /></td>
                        <td ><GradeDropDown onChange={(value) => this.handleArrayChange(value, index, data.grade, 'skillsArr')} /></td>
                        <td >
                          <Input
                             onChange={(e) => this.handleArrayChange(e.target.value, index, 'city', 'skillsArr')}
                            className={'tableInput'}
                            placeholder={'شہر'} /></td>
                        <td >
                          <Input
                             onChange={(e) => this.handleArrayChange(e.target.value, index, 'institution', 'skillsArr')}
                            className={'tableInput'}
                            placeholder={'ادارہ'} /></td>
                        <td style={{ fontWeight: "bold" }} >
                          <Input
                             onChange={(e) => this.handleArrayChange(e.target.value, index, 'subjects', 'skillsArr')}
                            className={'tableInput'}
                            placeholder={'مضامین'} /></td>
                        <td style={{ fontWeight: "bold" }} >
                          <Input
                             onChange={(e) => this.handleArrayChange(e.target.value, index, 'course', 'skillsArr')}
                            className={'tableInput'}
                            placeholder={'کورس /ڈپلومہ'} /></td>
                      </tr>
                    )
                  }
                </table>
              </div> : null
            }

{countNumber == 6 ?
<div>
             <p>دارالافتاء کے علاوہ مصروفیات </p>
        <div style={{   width : '90%'}}>
          <table className={'skills'}>
            <tr>
              <td>جگہ</td>
              <td>عرصہ</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><Input className={'tableInput'}  type={'number'} /></td>
              <td><Input className={'tableInput'}  type={'text'} /></td>
              <td><YesnoDropDown /></td>
              <th style={{ padding: 4, paddingRight: 12, paddingLeft: 12 }}>امامت</th>
            </tr>
            <tr>
              <td><Input className={'tableInput'}  type={'number'} /></td>
              <td><Input className={'tableInput'}  type={'text'} /></td>
              <td><YesnoDropDown /></td>
              <th style={{ padding: 4, paddingRight: 12, paddingLeft: 12 }}>مؤذنی</th>
            </tr>
            <tr>
              <td><Input className={'tableInput'}  type={'number'} /></td>
              <td><Input className={'tableInput'}  type={'text'} /></td>
              <td><YesnoDropDown /></td>
              <th style={{ padding: 4, paddingRight: 12, paddingLeft: 12 }}>جامعۃ المدینہ میں تدریس</th>
            </tr>
            <tr>
              <td><Input className={'tableInput'}  type={'number'} /></td>
              <td><Input className={'tableInput'}  type={'text'} /></td>
              <td> <YesnoDropDown /></td>
              <th style={{ padding: 4, paddingRight: 12, paddingLeft: 12 }}>خطابت</th>
            </tr>
            <tr>
              <td colSpan={3}><TextArea style = {{textAlign : 'right'}} rows={4} /></td>
              <th style={{ padding: 4, paddingRight: 12, paddingLeft: 12 }}>دیگر(کاروباری یا علاوہ)</th>
            </tr>
          </table>
            <p>تحریری و تصنیفی خدمات</p>
        <div className={"textArea"}>
        <TextArea style = {{textAlign : 'right'}} rows={4} />
        </div>
        </div> 
  </div> : null}
  {
    countNumber == 7 ?
    <div>
            {/* Mutalla */}
            <div className={"table-div"}>
          <table className = {'skills'}>
            <tr>
              <td className={'tableHeading'} colSpan={'6'}>مطالعہ</td>
            </tr>
            <tr>
              <td>کس علم میں خصوصی مہارت ہے؟</td>
              <td>کس علم میں خصوصی شغف ہے؟</td>
              <td>کن کن علوم کا مطالعہ کرتے ہیں؟ </td>
              <td>ایک ہفتے میں کتنے صفحات اوسطا پڑھتے ہیں؟ </td>
              <td>مطالعہ کی عادت ہے؟</td>
            </tr>
            <tr>
              <td><Input className={'tableInput'} type={'text'} /></td>
              <td><Input className={'tableInput'} type={'text'} /></td>
              <td><Input className={'tableInput'} type={'text'} /></td>
              <td><Input className={'tableInput'} type={'number'} /></td>
              <td> <YesnoDropDown /></td>
            </tr>
            <tr>
              <td colSpan={'3'}>
              <Select
          mode="tags"
          placeholder="Please select"
          defaultValue={['Urdu',]}
          onChange={()=> console.log()}
          style={{ width: '100%' }}
        >
          {children}
        </Select>

              </td>
              <td colSpan={'3'}>کس کس زبان میں مطالعہ کرتے ہیں؟</td>
            </tr>
          </table>
        </div>
      </div> : null
  }
{
    countNumber == 8 ?
    <div>
 <div className={"table-div"} >
          <table>
            <tr>
              <td className={'tableHeading'} colSpan={'4'}>بیاىا ت</td>
            </tr>
            <tr>
              <td >کس زبان میں</td>
              <td >ہفتہ وار اجتماع میں بیان کرتے ہیں</td>
              <td >کیا بیانات کرتے ہیں؟</td>
              <td rowSpan={'3'}> مہینے میں اوسطاً کتنے </td>
            </tr>
            <tr>
              <td rowSpan={'2'}><input className={'input'} type={'text'} /></td>
              <td> <YesnoDropDown /></td>
              <td> <YesnoDropDown /></td>
            </tr>
            <tr>
              <td> <input className={'input'} type={'number'} /></td>
              <td> <input className={'input'} type={'number'} /></td>
            </tr>
          </table>
        </div>
      </div> : null}
            {/* <div className={"table-div"} >
          <table>
            <tr>
              <td className={'tableHeading'} colSpan={'10'}>زبان میں مہارت</td>
            </tr>
            <tr>
              <td colSpan={'6'}> <input className={'input'} /></td>
              <td colSpan={'4'} >Mother Tongue - مادری زبان</td>
            </tr>
            <tr>
              <td>  موجودہ کیفیت</td>
              <td>
                کتنا عرصہ سیکھی</td>
              <td>
                کہاں سے سیکھی</td>
              <td>
                Understand
                سمجھنا</td>
              <td>
                Speak
                بولنا</td>
              <td>
                Write
                لکھنا</td>
              <td>
                Read
                پڑھنا</td>
              <td>Accent
               لب و لہجہ</td>
              <td>Language
               زبان</td>
              <td rowSpan={`${languageArr.length + 1}`}>Language Proficiency
               آپ کِن کِن زبانوں پہ کتنی مہارت رکھتے ہیں</td>
            </tr>
            {
              languageArr.map((data, index) => {
                return (
                  <tr key={index}>
                    <td><input className={'input'} type={'text'} /></td>
                    <td><input className={'input'} type={'text'} /></td>
                    <td><input className={'input'} type={'text'} /></td>
                    <td> <input className={'checkbox'} type="checkbox" /></td>
                    <td> <input className={'checkbox'} type="checkbox" /></td>
                    <td> <input className={'checkbox'} type="checkbox" /></td>
                    <td> <input className={'checkbox'} type="checkbox" /></td>
                    <td> <input className={'checkbox'} type="checkbox" /></td>
                    <td>{data.name}</td>
                  </tr>
                )
              })
            }
            <tr>

            </tr>
          </table>
        </div> */}

            {/* <div className={"table-div"}>
          <table>
            <tr>
              <td className={'tableHeading'} colSpan={'6'}>مدنی چینل و سوشل میڈیا سلسلے</td>
            </tr>
            <tr>
              <td>دیگر سلسلوں میں شرکت</td>
              <td>سلسلہ دارالاافتاء اہلسنت</td>
              <td>ذاتی سلسلہ</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td> <input className={'checkbox'} type="checkbox" /></td>
              <td> <input className={'checkbox'} type="checkbox" /></td>
              <td> <input className={'checkbox'} type="checkbox" /></td>
              <td><YesnoDropDown /></td>
              <td>کیا آپ مدنی چینل پر سلسلے کرتےہیں؟ </td>
            </tr>
            <tr>
              <td> <input className={'checkbox'} type="checkbox" /></td>
              <td> <input className={'checkbox'} type="checkbox" /></td>
              <td> <input className={'checkbox'} type="checkbox" /></td>
              <td><YesnoDropDown /></td>
              <td>کیا آپ سوشل میڈیا پر سلسلے کرتےہیں؟</td>
            </tr>
          </table>
        </div> */}
            {/* <div className={"table-div"}>
          <table>
            <tr>
              <td className={'tableHeading'} colSpan={'4'}>تيظیمی ذمہ داری</td>
            </tr>
            <tr>
              <td >مقام</td>
              <td >عرصہ ذمہ داری</td>
              <td >کس سطح پر؟</td>
              <td rowSpan={'2'}>تنظیمی ذمہ داری</td>
            </tr>
            <tr>
              <td><input className={'input'} type={'text'} /> </td>
              <td> <input className={'input'} type={'number'} /> </td>
              <td><select className={"tdSelect"} name="گروپ" >
                <option value="ذیلی">ذیلی</option>
                <option value="حلقہ">حلقہ</option>
                <option value="علاقہ">علاقہ</option>
                <option value="ڈویژن">ڈویژن</option>
                <option value="کابینہ">کابینہ</option>
                <option value="زون">زون</option>
              </select></td>
            </tr>
            <tr>
              <td >مقام</td>
              <td >عرصہ ذمہ داری</td>
              <td >شعبہ</td>
              <td rowSpan={'2'}> شعبہ سطح کی ذمہ داری</td>
            </tr>
            <tr>
              <td><input className={'input'} type={'text'} /> </td>
              <td> <input className={'input'} type={'number'} /> </td>
              <td><input className={'input'} type={'text'} /></td>
            </tr>
          </table>
        </div> */}
            {/* <div className={"table-div"}>
          <table>
            <tr>
              <td className={'tableHeading'} colSpan={'6'}>بیرون ملک سفر</td>
            </tr>
            <tr>
              <th>سفر کا مقصد</th>
              <th>سفر کا دورانیہ</th>
              <th>سفر کا سال</th>
              <th>شہر</th>
              <th>ملک</th>
              <th></th>
            </tr>
            <tr>
              <td> <select className={"tdSelect"} name="گروپ" >
                <option value="ذاتی">ذاتی</option>
                <option value="تنظیمی">تنظیمی</option>
                <option value=" اپنی طرف سے "> اپنی طرف سے </option>
                <option value="دعوتِ اسلامی کی طرف سے ">دعوتِ اسلامی کی طرف سے </option>
                <option value="کسی اور تنظیم کی طرف سے">کسی اور تنظیم کی طرف سے</option>
              </select> </td>
              <td> <input className={'input'} type={'text'} /></td>
              <td> <input className={'input'} type={'text'} /></td>
              <td> <input className={'input'} type={'text'} /></td>
              <td>  <input className={'input'} type={'text'} /></td>
              <td>1</td>
            </tr>
          </table>
        </div> */}
            {/* <div className={"table-div"}>
          <table>
            <tr>
              <td className={'tableHeading'} colSpan={'6'}>صرف د فتری استعمال کے لیے</td>
            </tr>
            <tr>
            <td><select className={"tdSelect"} name="گروپ" >
                <option value="ہشاش بشاچ">ہشاش بشاچ</option>
                <option value="درمیانہ">درمیانہ</option>
                <option value="سست">سست</option>
              </select></td>
              <td>فریشنس</td>
              <td><select className={"tdSelect"} name="گروپ" >
                <option value="گھلنے ملنے والے">گھلنے ملنے والے</option>
                <option value="تنہائی پسند">تنہائی پسند</option>
              </select></td>
              <td>گھلنے ملنی کی کوالٹی</td>
              <td><select className={"tdSelect"} name="گروپ" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select></td>
              <td>اسلامی بھائی کا مزاج و انداز</td>
            </tr>
            <tr>
            <td><select className={"tdSelect"} name="گروپ" >
                <option value="ہشاش بشاچ">لمبا</option>
                <option value="درمیانہ">درمیانہ</option>
                <option value="سست">چہوٹا</option>
              </select></td>
              <td>قد</td>
              <td><select className={"tdSelect"} name="گروپ" >
                <option value="گھلنے ملنے والے">غیر وجیہ</option>
                <option value="گھلنے ملنے والے">درمیانہ</option>
                <option value="تنہائی پسند">وجیہ</option>
              </select></td>
              <td>شخصیت</td>
              <td><select className={"tdSelect"} name="گروپ" >
                <option value="6"> غیر مہزب </option>
                <option value="6">مہزب</option>
              </select></td>
              <td>کھانا کھانے کا انداز</td>
            </tr>
            <tr>
            <td><YesnoDropDown /></td>
              <td>وقت کے پابند ہیں</td>
              <td><YesnoDropDown /></td>
              <td>کام آکے برھ چڑھ کے کرتے ہیں</td>
              <td><select className={"tdSelect"} name="گروپ" >
                <option value="6"> سادہ لباس </option>
                <option value="6">خوش لباس</option>
              </select></td>
              <td>لباس</td>
            </tr>
            <tr>
            <td>
            <select className={"tdSelect"} name="گروپ" >
                <option value="">محض معلومات کے لئے</option>
                <option value="">غیر مناسب</option>
                <option value="">دینی ضرورت کے پیش نظر</option>
              </select>
            </td>
              <td>سوشل میڈیا بالخصوص فیس بک کے استعمال کا انداز</td>
              <td>
              <select className={"tdSelect"} name="گروپ" >
                <option value="">اخلاقی</option>
                <option value="">علمی</option>
                <option value="">عملی</option>
                <option value="">بالکل بھی نہیں</option>
              </select>
              </td>
              <td>ان کے حوالے سے لوگوں سےشکایت وصول ہوتی ہے۔</td>
              <td><YesnoDropDown /></td>
              <td>بر وقت رپلائے دیتے ہیں</td>
            </tr>
          </table>
        </div> */}
            <div className={"buttonDiv"}>
              <Button size={'large'} type="primary" onClick={() => {
                if (countNumber > 0) {
                  this.setState({ countNumber: countNumber - 1 })
                } else { this.setState({ countNumber: 0 }) }
              }}>
                Back
            <Icon type="left" />
              </Button>
              <Button size={'large'} type="primary" onClick={() => {
                if (countNumber < 10) {
                  this.setState({ countNumber: countNumber + 1 })
                } else { this.setState({ countNumber: 0 }) }
              }}>
                <Icon type="right" />
                Next
          </Button>

            </div>

          </div>


        </header>


      </div>
    )
  }
}

export default App;
