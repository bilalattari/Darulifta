import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { Steps } from 'antd';
const { Step } = Steps;

const educationArr = [
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
    degree: 'س کے علاوہ وکوئی دوسرا کورس  ',
    grade: '',
    status: '',
    showGroup: false,
    group: "",
    institution: "",
    city: "",
    passingYear: ''
  },
]
const islamicEducationArr = [
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
]
const skillsArr = [
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
  <select className={"tdSelect"} name="گریڈ" >
    <option value='1990'>1990</option>
    <option value='1991'>1991</option>
    <option value='1992'>1992</option>
    <option value='1993'>1993</option>
    <option value='1994'>1994</option>
    <option value='1995'>1995</option>
    <option value='1996'>1996</option>
    <option value='1997'>1997</option>
    <option value='1998'>1998</option>
    <option value='1999'>1999</option>
    <option value='2000'>2000</option>
    <option value='2001'>2001</option>
    <option value='2002'>2002</option>
    <option value='2003'>2003</option>
    <option value='2004'>2004</option>
    <option value='2005'>2005</option>
    <option value='2006'>2006</option>
    <option value='2007'>2007</option>
    <option value='2008'>2008</option>
    <option value='2009'>2009</option>
    <option value='2010'>2010</option>
    <option value='2011'>2011</option>
    <option value='2012'>2012</option>
    <option value='2013'>2013</option>
    <option value='2014'>2014</option>
    <option value='2015'>2015</option>
    <option value='2016'>2016</option>
    <option value='2017'>2017</option>
    <option value='2018'>2018</option>
    <option value='2019'>2019</option>
  </select>

const GradeDropDown = (props) =>
  <select className={"tdSelect"} name="گریڈ" >
    <option value="A*">A*</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
  </select>
const Duration = (props) =>
  <select className={"tdSelect"} name="گریڈ" >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
  </select>

const YesnoDropDown = (props) =>
  <select className={"tdSelect"} name="گروپ" >
    <option value="جی ہاں">جی ہاں</option>
    <option value="">جی نہیں</option>
  </select>

const CustomInput = (props) =>
  <div className='inputrowchild' >
    <span className={props.className ? `inputHeading ${props.className}` : 'inputHeading'}>{props.title}</span> <br />
    <input className={props.className ? `input ${props.className}` : 'input'} placeholder={props.title} type={props.type ? props.type : null} />
  </div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Steps current={0}>
    <Step title="ذات معلومات" description="This is a description." />
    <Step title="سوشل میڈیا اکاؤنٹ" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="پتہ" description="This is a description." />
  </Steps>
        <div className='header'>
          <p> دار الافتاء</p>
          <p>  کوائف فازو برائے دارالفتاء اہلسنت</p>
          <p> دار الافتاء</p>
        </div>
        <div className='header inputrow'>
          <CustomInput title={'Father-ولدیت'} />
          <CustomInput title={'Name-نام'} />
        </div>
        <div className='header inputrow'>
          <CustomInput title={'Nationality -قومیت'} />
          <CustomInput title={'Date of Birth - تاریخ پیدائش'} type={'date'} />
        </div>
        <div className='header inputrow'>
          <CustomInput title={'Passport No. - پاسپورٹ نمبر'} type={'number'} />
          <CustomInput title={'NIC/ID -شناختی کارڈ نمبر/  آئی ڈی '} type={'number'} />
        </div>
        <div className='header inputrow'>
          <CustomInput title={'PTCL-پی ٹی سی ایل نمبر'} type={'number'} />
          <CustomInput title={'Mobile No. -موبائل نمبر'} type={'number'} />
        </div>
        <div className='header inputrow'>
          <CustomInput title={'Chronic Disease - دائمی مرض'} />
          <CustomInput title={'Blood Group - بلڈ گروپ'} />
        </div>
        <div className='header inputrow'>
          <div className='inputrowchild' >
            <span className={'inputHeading'}>Marital Status - ازدواجی حیثیت</span> <br />
            <select className='input dropdown' name="Marital Status - ازدواجی حیثیت" >
              <option value="">Marital Status - ازدواجی حیثیت</option>
              <option value="شادی شدہ">شادی شدہ</option>
              <option value="غیر شادی شادی شدہ">غیر شادی شادی شدہ</option>
            </select>
          </div>
          <CustomInput title={'Emergency No. - ایمرجنسی نمبر'} type={'number'} />
        </div>
        <div className='header inputrow'>
          <div className='inputrowchild' >
            <span className={'inputHeading'}>ڈرائیونگ آتی ہے۔ </span> <br />
            <input className='radio' type="radio" id="جی ہاں" name="gender" value="ہاں" />
            <label for="male">ہاں</label>
            <input className='radio' type="radio" id="جی نہیں" name="gender" value="نہیں" />
            <label for="female">نہیں</label>
          </div>
          <div className='inputrowchild' >
            <span className={'inputHeading'}> لائسنس بنا ہوا ہے</span> <br />
            <input className='radio' type="radio" id="جی ہاں" name="gender" value="ہاں" />
            <label for="male">ہاں</label>
            <input className='radio' type="radio" id="جی نہیں" name="gender" value="نہیں" />
            <label for="female">نہیں</label>
          </div>
        </div>
        <p>Social Media Accounts  سوشل میڈیا اکاؤنٹ</p>
        َِ
        <div className='header inputrow accounts'>
          <CustomInput title={'Facebook'} />
          <CustomInput title={'Whatsapp '} />
        </div>
        <div className='header inputrow accounts'>
          <CustomInput title={'Twitter'} />
          <CustomInput title={'Skype '} />
        </div>
        <div className='header inputrow accounts'>
          <CustomInput title={'Instagram'} />
          <CustomInput title={'Linked In '} />
        </div>
        <p>Address  پتہ</p>
        <div id={'address'}>
          <div className='header inputrow accounts'>
            <div className='inputrowchild' >
              <span className={'inputHeading'}>سرکاری صوبہ </span> <br />
              <select className='input dropdown' name="سرکاری صوبہ " >
                <option value="سندھ">سندھ</option>
                <option value="پنجاب">پنجاب</option>
                <option value="بلوچستان">بلوچستان</option>
                <option value="خیبر پختون خواہ">خیبر پختون خواہ</option>
              </select>
            </div>
            <CustomInput title={'مکان نمبر'} />
            <CustomInput title={'گلی نمبر'} />
            <CustomInput title={'علاقہ/محلہ'} />
            <CustomInput title={'شہر '} />
          </div>

        </div>
        <div className='header inputrow accounts'>
          <br />
          <div className='inputrowchild' >
            <span className={'inputHeading'}>مکان کی حیثیت </span>  <br />
            <select className='input dropdown' name="سرکاری صوبہ " >
              <option value="ذاتی">ذاتی</option>
              <option value="کرائے پر">کرائے پر</option>
              <option value="مسجد کی طرف سے">مسجد کی طرف سے</option>
              <option value="مدنی مرکز کی طرف سے">مدنی مرکز کی طرف سے</option>
            </select>
          </div>
        </div>

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
              educationArr.map((data, index) =>
                <tr>
                  <td >
                    <YearDropDown />
                  </td>
                  <td ><GradeDropDown /></td>
                  <td ><input className={'input'} placeholder={'شہر'} /></td>
                  <td ><input className={'input'} placeholder={'ادارہ'} /> </td>
                  <td >
                    <select className={"tdSelect"} name="گروپ" >
                      <option value="ریگولر">ریگولر</option>
                      <option value="پرائیوٹ">پرائیوٹ</option>
                    </select>
                  </td>
                  <td >
                    {
                      data.showGroup ?
                        <select className={"tdSelect"} name="گروپ" >
                          <option value="سائنس">سائنس</option>
                          <option value="سائنس">کامرس</option>
                          <option value="آرٹس">آرٹس</option>
                        </select> :
                        <input className={'input'} placeholder={'Subject'} />
                    }
                  </td>
                  <td style={{ fontWeight: "bold" }} >{data.degree}</td>
                </tr>
              )
            }

          </table>
        </div>
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
                  <td ><YearDropDown /></td>
                  <td ><GradeDropDown /></td>
                  <td ><input className={'input'} placeholder={'شہر'} /></td>
                  <td ><input className={'input'} placeholder={'ادارہ'} /> </td>
                  <td style={{ fontWeight: "bold" }} >{data.degree}</td>
                </tr>
              )
            }
          </table>
        </div>

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
                  <td ><Duration /></td>
                  <td ><GradeDropDown /></td>
                  <td ><input className={'input'} placeholder={'شہر'} /></td>
                  <td > <input className={'input'} placeholder={'ادارہ'} /></td>
                  <td style={{ fontWeight: "bold" }} ><input className={'input'} placeholder={'مضامین'} /></td>
                  <td style={{ fontWeight: "bold" }} ><input className={'input'} placeholder={'کورس /ڈپلومہ'} /></td>
                </tr>
              )
            }
          </table>
        </div>

        <p>دارالافتاء کے علاوہ مصروفیات </p>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <table className={'skills'}>
            <tr>
              <td>جگہ</td>
              <td>عرصہ</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><input className={'input'} type={'text'} /></td>
              <td><input className={'input'} type={'text'} /></td>
              <td><YesnoDropDown /></td>
              <th style={{ padding: 4, paddingRight: 12, paddingLeft: 12 }}>امامت</th>
            </tr>
            <tr>
              <td><input className={'input'} type={'text'} /></td>
              <td><input className={'input'} type={'text'} /></td>
              <td><YesnoDropDown /></td>
              <th style={{ padding: 4, paddingRight: 12, paddingLeft: 12 }}>مؤذنی</th>
            </tr>
            <tr>
              <td><input className={'input'} type={'text'} /></td>
              <td><input className={'input'} type={'text'} /></td>
              <td><YesnoDropDown /></td>
              <th style={{ padding: 4, paddingRight: 12, paddingLeft: 12 }}>جامعۃ المدینہ میں تدریس</th>
            </tr>
            <tr>
              <td><input className={'input'} type={'text'} /></td>
              <td><input className={'input'} type={'text'} /></td>
              <td> <YesnoDropDown /></td>
              <th style={{ padding: 4, paddingRight: 12, paddingLeft: 12 }}>خطابت</th>
            </tr>
            <tr>
              <td colSpan={3}><textarea style={{ width: '90%', height: 120, textAlign: 'end' }} cols={12} row={5}  > </textarea></td>
              <th style={{ padding: 4, paddingRight: 12, paddingLeft: 12 }}>دیگر(کاروباری یا علاوہ)</th>
            </tr>
          </table>
        </div>

        <p>تحریری و تصنیفی خدمات</p>
        <div className={"textArea"}>
          <textarea style={{ width: "90%", height: 150 }} cols={12} row={5}  >
          </textarea>
        </div>
        {/* Mutalla */}
        <div className={"table-div"}>
          <table>
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
              <td><input className={'input'} type={'text'} /></td>
              <td><input className={'input'} type={'text'} /></td>
              <td><input className={'input'} type={'text'} /></td>
              <td><input className={'input'} type={'number'} /></td>
              <td> <YesnoDropDown /></td>
            </tr>
            <tr>
              <td colSpan={'3'}>
                <input className={'checkbox'} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />English
              <input className={'checkbox'} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />Arabic
              <input className={'checkbox'} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />Urdu
              </td>
              <td colSpan={'3'}>کس کس زبان میں مطالعہ کرتے ہیں؟</td>
            </tr>
          </table>
        </div>
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
        <div className={"table-div"} >
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
        </div>

        <div className={"table-div"}>
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
        </div>
        <div className={"table-div"}>
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
        </div>
        <div className={"table-div"}>
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
        </div>
        <div className={"table-div"}>
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
        </div>
      </header>


    </div>
  );
}

export default App;
