import React from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import { addUser } from "./firebase";
import { Steps, Input, Button, Icon, Select, Radio, Checkbox } from "antd";
import { Upload, Modal } from "antd";

import { FaWhatsapp , FaInstagram , FaLinkedin , FaSkype , FaFacebook , FaTwitter } from 'react-icons/fa';

import firebase from "firebase";
import ImageUploader from "react-images-upload";
import { PlusSquareOutline } from "@ant-design/icons";
const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;

const YearDropDown = (props) => (
  <Select
    disabled={props.disabled}
    onChange={(value) => props.onChange(value)}
    style={{ width: 80 }}
    defaultValue={"1999"}
    className={"tdSelect"}
    name="گریڈ"
  >
    <Option value="1990">1990</Option>
    <Option value="1991">1991</Option>
    <Option value="1992">1992</Option>
    <Option value="1993">1993</Option>
    <Option value="1994">1994</Option>
    <Option value="1995">1995</Option>
    <Option value="1996">1996</Option>
    <Option value="1997">1997</Option>
    <Option value="1998">1998</Option>
    <Option value="1999">1999</Option>
    <Option value="2000">2000</Option>
    <Option value="2001">2001</Option>
    <Option value="2002">2002</Option>
    <Option value="2003">2003</Option>
    <Option value="2004">2004</Option>
    <Option value="2005">2005</Option>
    <Option value="2006">2006</Option>
    <Option value="2007">2007</Option>
    <Option value="2008">2008</Option>
    <Option value="2009">2009</Option>
    <Option value="2010">2010</Option>
    <Option value="2011">2011</Option>
    <Option value="2012">2012</Option>
    <Option value="2013">2013</Option>
    <Option value="2014">2014</Option>
    <Option value="2015">2015</Option>
    <Option value="2016">2016</Option>
    <Option value="2017">2017</Option>
    <Option value="2018">2018</Option>
    <Option value="2019">2019</Option>
  </Select>
);

const GradeDropDown = (props) => (
  <Select
    disabled={props.disabled}
    onChange={(value) => props.onChange(value)}
    defaultValue={"A"}
    className={"tdSelect"}
    name="گریڈ"
  >
    <Option value="A*">A*</Option>
    <Option value="A">A</Option>
    <Option value="B">B</Option>
    <Option value="C">C</Option>
    <Option value="D">D</Option>
    <Option value="E">E</Option>
  </Select>
);
const Duration = (props) => (
  <Select
    onChange={(value) => props.onChange(value)}
    defaultValue={"1"}
    className={"tdSelect"}
    name="گریڈ"
  >
    <Option value="1">1</Option>
    <Option value="2">2</Option>
    <Option value="3">3</Option>
    <Option value="4">4</Option>
    <Option value="5">5</Option>
    <Option value="6">6</Option>
  </Select>
);

const YesnoDropDown = (props) => (
  <Select
    className={"tdSelect"}
    disabled={props.disabled}
    onChange={(value) => props.onChange(value)}
    name="گروپ"
    defaultValue={true}
  >
    <Option value={true}>جی ہاں</Option>
    <Option value={false}>جی نہیں</Option>
  </Select>
);
const lang = [
  "Urdu",
  "Arabic",
  "Farsi",
  "Sindhi",
  "English",
  "Siraiki",
  "Pashtun",
];
const children = [];
for (let i = 0; i < lang.length; i++) {
  children.push(<Option key={lang[i]}>{lang[i]}</Option>);
}
const CustomInput = (props) => (
  <div className="inputrowchild">
    {!props.label ? (
      <span
        className={
          props.className ? `inputHeading ${props.className}` : "inputHeading"
        }
      >
        {props.title}
      </span>
    ) : null}
    <br />
    <Input
      className={"input"}
      placeholder={props.title}
      prefix = {props.prefix}
      onChange={props.onChange}
      type={props.type ? props.type : null}
    />
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: "",
      countNumber: 0,
      pictureUploadingToServer: false,
      driving: false,
      license: false,
      dateOfSubmission: "",
      designation: "",
      name: "",
      father: "",
      nationality: "",
      passport: "",
      cnic: "",
      ptcl: "",
      mobile: "",
      desease: "",
      bloodGroup: "",
      maritialStatus: "",
      emergency: "",
      facebook: "",
      whatsapp: "",
      skype: "",
      linkedIn: "",
      twitter: "",
      instagram: "",
      previewImage: "",
      previewVisible: false,
      allData: {},
      languageArr: [
        {
          "Mother Tongue - مادری زبان": "",
        },
        {
          name: "اردو",
          accent: false,
          read: false,
          write: false,
          speak: false,
          understand: false,
          where: "",
          howMuch: "",
          curr: "",
          current: ["بیتر", "مناسب", "کمزور"],
        },
        {
          name: "پنجابی",
          accent: false,
          read: false,
          write: false,
          speak: false,
          understand: false,
          where: "",
          howMuch: "",
          curr: "",
          current: ["بیتر", "مناسب", "کمزور"],
        },
        {
          name: "سندھی",
          accent: false,
          read: false,
          write: false,
          speak: false,
          understand: false,
          where: "",
          howMuch: "",
          curr: "",
          current: ["بیتر", "مناسب", "کمزور"],
        },
        {
          name: "پشتو",
          accent: false,
          read: false,
          write: false,
          speak: false,
          understand: false,
          where: "",
          howMuch: "",
          curr: "",
          current: ["بیتر", "مناسب", "کمزور"],
        },
        {
          name: "انگلش",
          accent: false,
          read: false,
          write: false,
          speak: false,
          understand: false,
          where: "",
          howMuch: "",
          curr: "",
          current: ["بیتر", "مناسب", "کمزور"],
        },
        {
          name: "سرائیکی",
          accent: false,
          read: false,
          write: false,
          speak: false,
          understand: false,
          where: "",
          howMuch: "",
          curr: "",
          current: ["بیتر", "مناسب", "کمزور"],
        },
        {
          name: "عربی",
          accent: false,
          read: false,
          write: false,
          speak: false,
          understand: false,
          where: "",
          howMuch: "",
          curr: "",
          current: ["بیتر", "مناسب", "کمزور"],
        },
      ],
      personalInfo: [
        {
          "موجودہ منصب": "",
          "تاریخ تقرری": "",
        },
        {
          "Name-نام": "",
          "Father-ولدیت": "",
        },
        {
          "Nationality -قومیت": "",
          "Date of Birth - تاریخ پیدائش": "",
        },
        {
          "Passport No - پاسپورٹ نمبر": "",
          "NIC-ID -شناختی کارڈ نمبر آئی ڈی": "",
        },
        {
          "PTCL-پی ٹی سی ایل نمبر": "",
          "Mobile No -موبائل نمبر": "",
        },
        {
          "Chronic Disease - دائمی مرض": "",
          "Blood Group - بلڈ گروپ": "",
        },
        {
          "Marital Status - ازدواجی حیثیت": "unmarried",
          "Emergency No - ایمرجنسی نمبر": "",
        },
        {
          "E-mail-ای میل": "",
        },
        {
          "ڈرائیونگ آتی ہے": false,
          "لائسنس بنا ہوا ہے": false,
        },
        {
          image: "",
        },
      ],
      socialMedia: [
        {
          Facebook: "",
          Whatsapp: "",
          Skype: "",
        },
        {
          LinkedIn: "",
          Twitter: "",
          Instagram: "",
        },
      ],
      address: [
        {
          "مکان نمبر": "",
          "گلی نمبر": "",
          "علاقہ-محلہ": "",
          شہر: "",
        },
        {
          "سرکاری صوبہ": "سندھ",
          "مکان کی حیثیت": "ذاتی",
        },
      ],
      worldlyEducation: [
        {
          degree: "میٹرک",
          haveDone: false,
          grade: "",
          status: "",
          group: "",
          showGroup: true,
          institution: "",
          city: "",
          passingYear: "",
        },
        {
          degree: "انٹر",
          haveDone: false,
          grade: "",
          status: "",
          group: "",
          institution: "",
          city: "",
          showGroup: true,
          passingYear: "",
        },
        {
          degree: "گریجویٹ",
          haveDone: false,
          grade: "",
          status: "",
          group: "",
          institution: "",
          showGroup: true,
          city: "",
          passingYear: "",
        },
        {
          degree: "ماسٹر",
          haveDone: false,
          grade: "",
          status: "",
          group: "",
          showGroup: false,
          institution: "",
          city: "",
          passingYear: "",
        },
        {
          degree: "ایم فل",
          haveDone: false,
          grade: "",
          status: "",
          group: "",
          showGroup: false,
          institution: "",
          city: "",
          passingYear: "",
        },
        {
          degree: "پی ایچ ڈی",
          haveDone: false,
          grade: "",
          status: "",
          group: "",
          showGroup: false,
          institution: "",
          city: "",
          passingYear: "",
        },
        {
          degree: " بی ایس",
          haveDone: false,
          grade: "",
          status: "",
          group: "",
          showGroup: false,
          institution: "",
          city: "",
          passingYear: "",
        },
        {
          degree: "عالم فاضل عربی",
          haveDone: false,
          grade: "",
          status: "",
          showGroup: false,
          group: "",
          institution: "",
          city: "",
          passingYear: "",
        },
        {
          degree: "اس کے علاوہ وکوئی دوسرا کورس",
          haveDone: false,
          grade: "",
          status: "",
          showGroup: false,
          group: "",
          institution: "",
          city: "",
          passingYear: "",
        },
      ],
      islamicEducationArr: [
        {
          "Degree سند": "ناظرہ قرآن",
          "Institution ادارہ": "",
          "City شہر": "",
          "Grade-CGPA گریڈ": "",
          "Passing Year": "",
        },
        {
          degree: "ناظرہ قرآن",
          haveDone: false,
          grade: "",
          institution: "",
          city: "",
          passingYear: "",
        },
        {
          degree: "حفظِ قرآن",
          haveDone: false,
          grade: "",
          institution: "",
          city: "",
          passingYear: "",
        },
        {
          degree: "درسِ نظامی",
          haveDone: false,
          grade: "",
          institution: "",
          city: "",
          passingYear: "",
        },
        {
          degree: "حسنِ قرأت",
          haveDone: false,
          grade: "",
          showDropDown: true,
          institution: "",
          city: "",
          passingYear: "",
        },
        {
          degree: "نعت شریف",
          haveDone: false,
          grade: "",
          institution: "",
          showDropDown: true,
          city: "",
          passingYear: "",
        },
        {
          degree: "اس کے علاوہ وکوئی دوسرا کورس  ",
          haveDone: false,
          grade: "",
          institution: "",
          city: "",
          passingYear: "",
        },
      ],
      skillsArr: [
        {
          course: "",
          subjects: "",
          institution: "",
          city: "",
          grade: "",
          years: "",
        },
        {
          course: "",
          subjects: "",
          institution: "",
          city: "",
          grade: "",
          years: "",
        },
        {
          course: "",
          subjects: "",
          institution: "",
          city: "",
          grade: "",
          years: "",
        },
      ],
      outOfDarulifta: [
        {
          امامت: true,
          عرصہ: "",
          جگہ: "",
        },
        {
          مؤذنی: true,
          عرصہ: "",
          جگہ: "",
        },
        {
          "جامعۃ المدینہ میں تدریس": true,
          عرصہ: "",
          جگہ: "",
        },
        {
          خطابت: true,
          عرصہ: "",
          جگہ: "",
        },
        {
          "(دیگر(کاروباری یا علاوہ": "",
          عرصہ: "",
          جگہ: "",
        },
      ],
      writtenWork: "",
      reading: [
        {
          "کس علم میں خصوصی شغف ہے؟": "",
          "کن کن علوم کا مطالعہ کرتے ہیں؟": "",
          "ایک ہفتے میں کتنے صفحات اوسطا پڑھتے ہیں؟": "",
          "مطالعہ کی عادت ہے؟": true,
        },
        {
          "کس علم میں خصوصی مہارت ہے؟": "",
          "کس کس زبان میں مطالعہ کرتے ہیں؟": "",
        },
      ],
      speeches: [
        {
          "مہینے میں اوسطاً کتنے": "",
          "کیا بیانات کرتے ہیں؟": true,
          "ہفتہ وار اجتماع میں بیان کرتے ہیں؟": true,
          "کس زبان میں": "",
        },
        {
          "مہینے میں اوسطاً کتنے بیان": "",
          "مہینے میں اوسطاً کتنے اجتماع": "",
        },
      ],
      socialMediaPrograms: [
        {
          "کیا آپ مدنی چینل پر سلسلے کرتےہیں؟": true,
          "ذاتی سلسلہ": "",
          "سلسلہ دارالاافتاء اہلسنت": "",
          "دیگر سلسلوں میں شرکت": "",
        },
        {
          "کیا آپ سوشل میڈیا پر سلسلے کرتےہیں؟": true,
          "ذاتی سلسلہ": "",
          "سلسلہ دارالاافتاء اہلسنت": "",
          "دیگر سلسلوں میں شرکت": "",
        },
      ],
      tanzeemWork: [
        {
          "تنظیمی ذمہ داری": "",
          "کس سطح پر؟": "",
          "عرصہ ذمہ داری": "",
          مقام: "",
        },
        {
          "شعبہ سطح کی ذمہ داری": "",
          شعبہ: "",
          "عرصہ ذمہ داری": "",
          مقام: "",
        },
      ],
      outOfCountry: [
        {
          ملک: "",
          شہر: "",
          "سفر کا سال": "",
          "سفر کا دورانیہ": "",
          "سفر کا مقصد": "",
        },
        {
          ملک: "",
          شہر: "",
          "سفر کا سال": "",
          "سفر کا دورانیہ": "",
          "سفر کا مقصد": "",
        },
        {
          ملک: "",
          شہر: "",
          "سفر کا سال": "",
          "سفر کا دورانیہ": "",
          "سفر کا مقصد": "",
        },
      ],
      officeDetail: [
        {
          "گھلنے ملنی کی کوالٹی": "1",
          "اسلامی بھائی کا مزاج و انداز": "گھلنے ملنے والے",
        },
        {
          قد: "درمیانہ",
          فریشنس: "ہشاش بشاش",
        },
        {
          "کھانا کھانے کا انداز": "مہزب",
          شخصیت: "وجیہ",
        },
        {
          "کام آگے برھ چڑھ کے کرتے ہیں": true,
          لباس: "سادہ لباس",
        },
        {
          "بر وقت رپلائے دیتے ہیں": true,
          "وقت کے پابند ہیں": true,
        },
        {
          "ان کے حوالے سے لوگوں سےشکایت وصول ہوتی ہے۔": "بالکل بھی نہیں",
          "سوشل میڈیا بالخصوص فیس بک کے استعمال کا انداز":
            "دینی ضرورت کے پیش نظر",
        },
      ],
    };
  }
  handleChange(name, value) {
    console.log(`selected ${name} ${value}`);
    this.setState({ [name]: value });
  }
  handleArrayChange = (value, index, propert, array) => {
    let arr = this.state[array];
    arr[index][propert] = value;
    console.log(arr, "arrarrarr");
    this.setState({ [array]: arr });
  };
  onchangetext = (name, val, arr, row) => {
    let array = this.state[arr];
    array[row][name] = val;
    console.log(array, "arayyyyyyyyyyyyyyyyyyyyyyyyy");
    this.setState({ [arr]: array });
  };
  beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      console.log("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      console.log("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }
  onDrop = async (picture) => {
    let allPictures = [];
    this.setState({ pictureUploadingToServer: true });
    await picture.map(async (picture) => {
      var storageRef = firebase.storage().ref();
      await storageRef
        .child("Images" + picture.name)
        .put(picture)
        .then(async (snapshot) => {
          await storageRef
            .child("Images" + picture.name)
            .getDownloadURL()
            .then((url) => allPictures.push(url));
        })
        .catch((err) => this.setState({ pictureUploadingToServer: false }));
      let info = this.state.personalInfo;
      info[9]["image"] = allPictures[0];
      this.setState({ personalInfo: info });
    });
  };
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await this.getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  render() {
    let {
      countNumber,
      driving,
      license,
      worldlyEducation,
      skillsArr,
      outOfCountry,
      address,
      outOfDarulifta,
      reading,
      branch,
      speeches,
      personalInfo,
      islamicEducationArr,
      languageArr,
      socialMedia,
      tanzeemWork,
      officeDetail,
      allData,
      socialMediaPrograms,
    } = this.state;
    const { previewVisible, previewImage, imageUrl } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div className={"stepDiv"}>
            <Steps direction={"vertical"} current={countNumber}>
              <Step className={"steps"} title="ذاتی معلومات" description="" />
              <Step
                className={"steps"}
                title="سوشل میڈیا اکاؤنٹ"
                description=""
              />
              <Step className={"steps"} title="پتہ" description="" />
              <Step className={"steps"} title="دنیوی تعلیم" description="" />
              <Step className={"steps"} title="اسلامی  تعلیم" description="" />
              <Step
                className={"steps"}
                title="دیگر پیشہ ورانہ صلاحیت"
                description=""
              />
              <Step
                className={"steps"}
                title="دارالافتاء کے علاوہ مصروفیات"
                description=""
              />
              <Step className={"steps"} title="مطالعہ" description="" />
              <Step className={"steps"} title="بیانات" description="" />
              <Step className={"steps"} title="زبان میں مہارت" description="" />
              <Step className={"steps"} title="سلسلہ" description="" />
              <Step
                className={"steps"}
                title="تنظیمی ذمہ داری"
                description=""
              />
              <Step className={"steps"} title="د فتری استعمال" description="" />
            </Steps>
          </div>

          <div className={"rightDiv"}>
            {countNumber === 0 ? (
              <div className={"counter"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "cenetr",
                  }}
                >
                  <ImageUploader
                    withIcon={true}
                    buttonText="Choose images"
                    onChange={this.onDrop}
                    withPreview={true}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                  />
                </div>
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
                <div  style = {{ justifyContent : "center" , textAlign : "right" , width : "60%"}}>
                  <span className={"inputHeading"}>موجودہ شاخ</span> <br />
                  <Select
                    className="input dropdown"
                    defaultValue="موجودہ شاخ"
                    onChange={(value) => this.setState({ branch: value })}
                  >
                    <Option value="افتاء مکتب کراچی">افتاء مکتب کراچی</Option>
                    <Option value="نارتھ کراچی">نارتھ کراچی</Option>
                    <Option value="صدر">صدر</Option>
                    <Option value="کورنگی">کورنگی</Option>
                    <Option value="کھاردار">کھاردار</Option>
                    <Option value="بابری چوک">بابری چوک</Option>
                    <Option value="حیدر آباد">حیدر آباد</Option>
                    <Option value="لاہور">لاہور</Option>
                    <Option value="فیصل آباد">فیصل آباد</Option>
                    <Option value="گلزار طیبہ">گلزار طیبہ</Option>
                    <Option value="راولپنڈی">راولپنڈی</Option>
                    <Option value=" یوکے-برمنگھم"> یوکے-برمنگھم</Option>
                    <Option value=" تخصص فی الفقہ لاہور سال اول">
                      {" "}
                      تخصص فی الفقہ لاہور سال اول
                    </Option>
                    <Option value=" تخصص فی الفقہ لاہور سال دوم">
                      {" "}
                      تخصص فی الفقہ لاہور سال دوم
                    </Option>
                    <Option value=" تخصص فی الفقہ کراچی سال اول">
                      {" "}
                      تخصص فی الفقہ کراچی سال اول
                    </Option>
                    <Option value=" تخصص فی الفقہ کراچی سال دوم">
                      {" "}
                      تخصص فی الفقہ کراچی سال دوم
                    </Option>
                    <Option value=" تخصص فی الفقہ فیصل آباد سال اول">
                      {" "}
                      تخصص فی الفقہ فیصل آباد سال اول
                    </Option>
                    <Option value=" تخصص فی الفقہ فیصل آباد سال دوم">
                      {" "}
                      تخصص فی الفقہ فیصل آباد سال دوم
                    </Option>
                  </Select>
                </div>

                <div className="header inputrow">
                  <div className="inputrowchild">
                    <span className={"inputHeading"}>موجودہ منصب</span> <br />
                    {/* <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "موجودہ منصب",
                        e.target.value,
                        "personalInfo",
                        0
                      )
                    }
                    title={"موجودہ منصب"}
                  /> */}
                    <Select
                      className="input dropdown"
                      defaultValue="موجودہ منصب"
                      onChange={(value) =>
                        this.onchangetext(
                          "موجودہ منصب",
                          value,
                          "personalInfo",
                          0
                        )
                      }
                    >
                      <Option value="مصدق">مصدق</Option>
                      <Option value="مفتی">مفتی</Option>
                      <Option value="نائب مفتی">نائب مفتی</Option>
                      <Option value="سینیئر متخصص">سینیئر متخصص</Option>
                      <Option value="متخصص">متخصص</Option>
                      <Option value="معاون">معاون</Option>
                    </Select>
                  </div>
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "تاریخ تقرری",
                        e.target.value,
                        "personalInfo",
                        0
                      )
                    }
                    type={"date"}
                    title={"تاریخ تقرری"}
                  />
                </div>
                <div className="header inputrow">
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "Father-ولدیت",
                        e.target.value,
                        "personalInfo",
                        1
                      )
                    }
                    title={"Father-ولدیت"}
                  />
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "Name-نام",
                        e.target.value,
                        "personalInfo",
                        1
                      )
                    }
                    title={"Name-نام"}
                  />
                </div>
                <div className="header inputrow">
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "Nationality -قومیت",
                        e.target.value,
                        "personalInfo",
                        2
                      )
                    }
                    title={"Nationality -قومیت"}
                  />
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "Date of Birth- تاریخ پیدائش",
                        e.target.value,
                        "personalInfo",
                        2
                      )
                    }
                    title={"Date of Birth- تاریخ پیدائش"}
                    type={"date"}
                  />
                </div>
                <div className="header inputrow">
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "Passport No - پاسپورٹ نمبر",
                        e.target.value,
                        "personalInfo",
                        3
                      )
                    }
                    title={"Passport No. - پاسپورٹ نمبر"}
                  />
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "NIC-ID -شناختی کارڈ نمبر آئی ڈی",
                        e.target.value,
                        "personalInfo",
                        3
                      )
                    }
                    title={"NIC/ID -شناختی کارڈ نمبر/  آئی ڈی "}
                  />
                </div>
                <div className="header inputrow">
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "PTCL-پی ٹی سی ایل نمبر",
                        e.target.value,
                        "personalInfo",
                        4
                      )
                    }
                    title={"PTCL-پی ٹی سی ایل نمبر"}
                  />
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "Mobile No -موبائل نمبر",
                        e.target.value,
                        "personalInfo",
                        4
                      )
                    }
                    title={"Mobile No. -موبائل نمبر"}
                  />
                </div>
                <div className="header inputrow">
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "Chronic Disease - دائمی مرض",
                        e.target.value,
                        "personalInfo",
                        5
                      )
                    }
                    title={"Chronic Disease - دائمی مرض"}
                  />
                  <div className="inputrowchild">
                    <span className={"inputHeading"}>
                      Blood Group - بلڈ گروپ
                    </span>{" "}
                    <br />
                    <Select
                      className="input dropdown"
                      defaultValue="A+"
                      onChange={(value) =>
                        this.onchangetext(
                          "Blood Group - بلڈ گروپ",
                          value,
                          "personalInfo",
                          5
                        )
                      }
                    >
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
                <div className="header inputrow">
                  <div className="inputrowchild">
                    <span className={"inputHeading"}>
                      Marital Status - ازدواجی حیثیت
                    </span>{" "}
                    <br />
                    <Select
                      className="input dropdown"
                      defaultValue="unmarried"
                      onChange={(value) =>
                        this.onchangetext(
                          "Marital Status - ازدواجی حیثیت",
                          value,
                          "personalInfo",
                          6
                        )
                      }
                    >
                      <Option value="">Marital Status - ازدواجی حیثیت</Option>
                      <Option value="Married">شادی شدہ</Option>
                      <Option value="unmarried">غیر شادی شدہ</Option>
                    </Select>
                  </div>
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "Emergency No - ایمرجنسی نمبر",
                        e.target.value,
                        "personalInfo",
                        6
                      )
                    }
                    title={"Emergency No. - ایمرجنسی نمبر"}
                  />
                </div>
                <div className="header inputrow">
                  <CustomInput
                    onChange={(e) =>
                      this.onchangetext(
                        "E-mail-ای میل",
                        e.target.value,
                        "personalInfo",
                        7
                      )
                    }
                    title={"E-mail - ای میل"}
                  />
                </div>
                <div className="header inputrow">
                  <div className="inputrowchild">
                    <Checkbox
                      value={personalInfo[8]["ڈرائیونگ آتی ہے۔"]}
                      onChange={(value) => {
                        this.onchangetext(
                          "ڈرائیونگ آتی ہے",
                          !personalInfo[8]["ڈرائیونگ آتی ہے"],
                          "personalInfo",
                          8
                        );
                      }}
                    ></Checkbox>
                    <span className={"checkbox"}>ڈرائیونگ آتی ہے۔ </span>{" "}
                    <br />
                  </div>
                  <div className="inputrowchild">
                    <Checkbox
                      value={personalInfo[8]["لائسنس بنا ہوا ہے"]}
                      onChange={(value) => {
                        this.onchangetext(
                          "لائسنس بنا ہوا ہے",
                          !personalInfo[8]["لائسنس بنا ہوا ہے"],
                          "personalInfo",
                          8
                        );
                      }}
                    ></Checkbox>
                    <span className={"checkbox"}> لائسنس بنا ہوا ہے</span>{" "}
                    <br />
                  </div>
                </div>
              </div>
            ) : null}
            {countNumber === 1 ? (
              <div className={"counter"}>
                <p>Social Me dia Accounts سوشل میڈیا اکاؤنٹ</p>

                <div className="header inputrow accounts">
                  <CustomInput
                    className={"social"}
                    prefix = {<FaFacebook className="site-form-item-icon"  />}
                    value = {socialMedia[0]['Facebook']}
                    onChange={(e) =>
                      this.onchangetext(
                        "Facebook",
                        e.target.value,
                        "socialMedia",
                        0
                      )
                    }
                    title={"Facebook"}
                  />
                  <CustomInput
                    className={"social"}
                    value = {socialMedia[0]['Whatsapp']}
                    prefix = {<FaWhatsapp className="site-form-item-icon"  />}
                    onChange={(e) =>
                      this.onchangetext(
                        "Whatsapp",
                        e.target.value,
                        "socialMedia",
                        0
                      )
                    }
                    title={"Whatsapp "}
                  />
                </div>
                <div className="header inputrow accounts">
                  <CustomInput
                    className={"social"}
                    value = {socialMedia[1]['Twitter']}
                    prefix = {<FaTwitter className="site-form-item-icon"  />}
                    onChange={(e) =>
                      this.onchangetext(
                        "Twitter",
                        e.target.value,
                        "socialMedia",
                        1
                      )
                    }
                    title={"Twitter"}
                  />
                  <CustomInput
                    className={"social"}
                    value = {socialMedia[0]['Skype']}
                    prefix = {<FaSkype className="site-form-item-icon"  />}
                    onChange={(e) =>
                      this.onchangetext(
                        "Skype",
                        e.target.value,
                        "socialMedia",
                        0
                      )
                    }
                    title={"Skype "}
                  />
                </div>
                <div className="header inputrow accounts">
                  <CustomInput
                    className={"social"}
                    value = {socialMedia[1]['Instagram']}
                    prefix = {<FaInstagram className="site-form-item-icon"  />}
                    onChange={(e) =>
                      this.onchangetext(
                        "Instagram",
                        e.target.value,
                        "socialMedia",
                        1
                      )
                    }
                    title={"Instagram"}
                  />
                  <CustomInput
                    className={"social"}
                    value = {socialMedia[1]['LinkedIn']}
                    prefix = {<FaLinkedin className="site-form-item-icon"  />}
                    onChange={(e) =>
                      this.onchangetext(
                        "LinkedIn",
                        e.target.value,
                        "socialMedia",
                        1
                      )
                    }
                    title={"Linked In "}
                  />
                </div>
              </div>
            ) : null}

            {countNumber === 2 ? (
              <div className={"counter"}>
                <p>Address پتہ</p>
                <div id={"address"}>
                  <div className="header inputrow accounts">
                    <div className="inputrowchild">
                      <span className={"inputHeading"}>سرکاری صوبہ </span>{" "}
                      <br />
                      <Select
                        className="input dropdown"
                        defaultValue="سندھ"
                        onChange={(value) =>
                          this.onchangetext("سرکاری صوبہ", value, "address", 1)
                        }
                      >
                        <Option value="سندھ">سندھ</Option>
                        <Option value="پنجاب">پنجاب</Option>
                        <Option value="بلوچستان">بلوچستان</Option>
                        <Option value="خیبر پختون خواہ">خیبر پختون خواہ</Option>
                      </Select>
                    </div>
                    <CustomInput
                      width={true}
                      onChange={(e) =>
                        this.onchangetext("شہر", e.target.value, "address", 0)
                      }
                      title={"شہر "}
                    />
                    <CustomInput
                      width={true}
                      onChange={(e) =>
                        this.onchangetext(
                          "علاقہ-محلہ",
                          e.target.value,
                          "address",
                          0
                        )
                      }
                      title={"علاقہ/محلہ"}
                    />
                    <CustomInput
                      width={true}
                      onChange={(e) =>
                        this.onchangetext(
                          "گلی نمبر",
                          e.target.value,
                          "address",
                          0
                        )
                      }
                      title={"گلی نمبر"}
                    />
                    <CustomInput
                      width={true}
                      onChange={(e) =>
                        this.onchangetext(
                          "مکان نمبر",
                          e.target.value,
                          "address",
                          0
                        )
                      }
                      title={"مکان نمبر"}
                    />
                  </div>
                </div>
                <div className="header inputrow accounts">
                  <br />
                  <div className="inputrowchild">
                    <span className={"inputHeading"}>مکان کی حیثیت </span>{" "}
                    <br />
                    <Select
                      className="input dropdown"
                      defaultValue="ذاتی"
                      onChange={(value) =>
                        this.onchangetext("مکان کی حیثیت", value, "address", 1)
                      }
                    >
                      <Option value="ذاتی">ذاتی</Option>
                      <Option value="کرائے پر">کرائے پر</Option>
                      <Option value="مسجد کی طرف سے">مسجد کی طرف سے</Option>
                      <Option value="مدنی مرکز کی طرف سے">
                        مدنی مرکز کی طرف سے
                      </Option>
                      <Option value="ابو کا">
                        ابو کا
                      </Option>
                    </Select>
                  </div>
                </div>
              </div>
            ) : null}
            {countNumber === 3 ? (
              <div className={"counter"}>
                <p>تعلیمی پسِ منظر</p>
                <div className={"table-div"}>
                  <table>
                    <tr>
                      <td className={"tableHeading"} colSpan={"8"}>
                        دنیاوی تعلیم
                      </td>
                    </tr>
                    <tr>
                      <td>Passing Year</td>
                      <td>Grade/CGPA گریڈ</td>
                      <td>City شہر</td>
                      <td>Institution ادارہ</td>
                      <td>ریگولر/پرائیوٹ</td>
                      <td>گروپ (سائنس /آرٹس)</td>
                      <td></td>
                      <td>Degree سند</td>
                    </tr>
                    {worldlyEducation.map((data, index) => (
                      <tr key={index}>
                        <td>
                          <YearDropDown
                            disabled={!data.haveDone}
                            onChange={(value) =>
                              this.handleArrayChange(
                                value,
                                index,
                                "passingYear",
                                "worldlyEducation"
                              )
                            }
                          />
                        </td>
                        <td>
                          <GradeDropDown
                            disabled={!data.haveDone}
                            onChange={(value) =>
                              this.handleArrayChange(
                                value,
                                index,
                                "grade",
                                "worldlyEducation"
                              )
                            }
                          />
                        </td>
                        <td>
                          <Input
                            disabled={!data.haveDone}
                            onChange={(e) =>
                              this.handleArrayChange(
                                e.target.value,
                                index,
                                "city",
                                "worldlyEducation"
                              )
                            }
                            className={"tableInput"}
                            placeholder={"شہر"}
                          />
                        </td>
                        <td>
                          <Input
                            disabled={!data.haveDone}
                            onChange={(e) =>
                              this.handleArrayChange(
                                e.target.value,
                                index,
                                "institution",
                                "worldlyEducation"
                              )
                            }
                            className={"tableInput"}
                            placeholder={"ادارہ"}
                          />{" "}
                        </td>
                        <td style={{ width: 100 }}>
                          <Select
                            disabled={!data.haveDone}
                            onChange={(value) =>
                              this.handleArrayChange(
                                value,
                                index,
                                "status",
                                "worldlyEducation"
                              )
                            }
                            className={"tdSelect"}
                            name="گروپ"
                            defaultValue={"ریگولر"}
                          >
                            <Option value="ریگولر">ریگولر</Option>
                            <Option value="پرائیوٹ">پرائیوٹ</Option>
                          </Select>
                        </td>
                        <td style={{ width: 100 }}>
                          {data.showGroup ? (
                            <Select
                              className={"tdSelect"}
                              name="گروپ"
                              disabled={!data.haveDone}
                              onChange={(value) =>
                                this.handleArrayChange(
                                  value,
                                  index,
                                  "group",
                                  "worldlyEducation"
                                )
                              }
                              defaultValue={"سائنس"}
                            >
                              <Option value="سائنس">سائنس</Option>
                              <Option value="کامرس">کامرس</Option>
                              <Option value="آرٹس">آرٹس</Option>
                            </Select>
                          ) : (
                            <Input
                              disabled={!data.haveDone}
                              className={"tableInput"}
                              placeholder={"Subject"}
                            />
                          )}
                        </td>
                        <td style={{ fontWeight: "bold" }}>
                          <Checkbox
                            defaultChecked={false}
                            onChange={(value) =>
                              this.handleArrayChange(
                                !data.haveDone,
                                index,
                                "haveDone",
                                "worldlyEducation"
                              )
                            }
                          />
                        </td>
                        <td style={{ fontWeight: "bold" }}>{data.degree}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            ) : null}
            {countNumber == 4 ? (
              <div className={"table-div"}>
                <table>
                  <tr>
                    <td className={"tableHeading"} colSpan={"6"}>
                      اسلامی تعلیم
                    </td>
                  </tr>
                  <tr>
                    <td>Passing Year</td>
                    <td>Grade/CGPA گریڈ</td>
                    <td>City شہر</td>
                    <td>Institution ادارہ</td>
                    <td> </td>
                    <td>Degree سند</td>
                  </tr>
                  {islamicEducationArr.map((data, index) =>
                    index !== 0 ? (
                      <tr>
                        <td>
                          <YearDropDown
                            disabled={!data.haveDone}
                            onChange={(value) =>
                              this.handleArrayChange(
                                value,
                                index + 1,
                                "passingYear",
                                "islamicEducationArr"
                              )
                            }
                          />
                        </td>
                        <td>
                          <GradeDropDown
                            disabled={!data.haveDone}
                            onChange={(value) =>
                              this.handleArrayChange(
                                value,
                                index,
                                "grade",
                                "islamicEducationArr"
                              )
                            }
                          />
                        </td>
                        <td>
                          <Input
                            disabled={!data.haveDone}
                            onChange={(e) =>
                              this.handleArrayChange(
                                e.target.value,
                                index,
                                "city",
                                "islamicEducationArr"
                              )
                            }
                            className={"tableInput"}
                            placeholder={"شہر"}
                          />
                        </td>
                        <td>
                          {data.showDropDown ? (
                            <Select
                              className={"tdSelect"}
                              name="گروپ"
                              disabled={!data.haveDone}
                              onChange={(value) =>
                                this.handleArrayChange(
                                  value,
                                  index,
                                  "institution",
                                  "islamicEducationArr"
                                )
                              }
                              defaultValue={"عمدہ"}
                            >
                              <Option value="نارمل">نارمل</Option>
                              <Option value="عمدہ">عمدہ</Option>
                              <Option value="بہت عمدہ">بہت عمدہ</Option>
                              <Option value="اصلا نہیں">اصلا نہیں</Option>
                            </Select>
                          ) : (
                            <Input
                              disabled={!data.haveDone}
                              onChange={(e) =>
                                this.handleArrayChange(
                                  e.target.value,
                                  index,
                                  "institution",
                                  "islamicEducationArr"
                                )
                              }
                              className={"tableInput"}
                              placeholder={"ادارہ"}
                            />
                          )}
                        </td>
                        <td style={{ fontWeight: "bold" }}>
                          <Checkbox
                            defaultChecked={false}
                            onChange={(value) =>
                              this.handleArrayChange(
                                !data.haveDone,
                                index,
                                "haveDone",
                                "islamicEducationArr"
                              )
                            }
                          />
                        </td>
                        <td style={{ fontWeight: "bold" }}>{data.degree}</td>
                      </tr>
                    ) : null
                  )}
                </table>
              </div>
            ) : null}
            {countNumber == 5 ? (
              <div className={"table-div"}>
                <table>
                  <tr>
                    <td className={"tableHeading"} colSpan={"6"}>
                      دیگر پیشہ ورانہ صلاحیت
                    </td>
                  </tr>
                  <tr>
                    <td>Duration/Year-دورانیہ/سال</td>
                    <td>Grade/CGPA گریڈ</td>
                    <td>City شہر</td>
                    <td>Institution ادارہ</td>
                    <td>Major Subjects-مضامین</td>
                    <td>Course Diploma کورس ڈپلومہ</td>
                  </tr>
                  {skillsArr.map((data, index) => (
                    <tr>
                      <td>
                        <Duration
                          onChange={(value) =>
                            this.handleArrayChange(
                              value,
                              index,
                              "years",
                              "skillsArr"
                            )
                          }
                        />
                      </td>
                      <td>
                        <GradeDropDown
                          onChange={(value) =>
                            this.handleArrayChange(
                              value,
                              index,
                              "grade",
                              "skillsArr"
                            )
                          }
                        />
                      </td>
                      <td>
                        <Input
                          onChange={(e) =>
                            this.handleArrayChange(
                              e.target.value,
                              index,
                              "city",
                              "skillsArr"
                            )
                          }
                          className={"tableInput"}
                          placeholder={"شہر"}
                        />
                      </td>
                      <td>
                        <Input
                          onChange={(e) =>
                            this.handleArrayChange(
                              e.target.value,
                              index,
                              "institution",
                              "skillsArr"
                            )
                          }
                          className={"tableInput"}
                          placeholder={"ادارہ"}
                        />
                      </td>
                      <td style={{ fontWeight: "bold" }}>
                        <Input
                          onChange={(e) =>
                            this.handleArrayChange(
                              e.target.value,
                              index,
                              "subjects",
                              "skillsArr"
                            )
                          }
                          className={"tableInput"}
                          placeholder={"مضامین"}
                        />
                      </td>
                      <td style={{ fontWeight: "bold" }}>
                        <Input
                          onChange={(e) =>
                            this.handleArrayChange(
                              e.target.value,
                              index,
                              "course",
                              "skillsArr"
                            )
                          }
                          className={"tableInput"}
                          placeholder={"کورس /ڈپلومہ"}
                        />
                      </td>
                    </tr>
                  ))}
                  <td colSpan={"6"}>
                    <Button
                      type="dashed"
                      block
                      onClick={() => {
                        let arr = this.state.skillsArr;
                        arr.push({
                          course: "",
                          subjects: "",
                          institution: "",
                          city: "",
                          grade: "",
                          years: "",
                        });
                        this.setState({ skillsArr: arr });
                      }}
                    >
                      Add More{" "}
                    </Button>
                  </td>
                </table>
              </div>
            ) : null}

            {countNumber == 6 ? (
              <div>
                <p>دارالافتاء کے علاوہ مصروفیات </p>
                <div style={{ width: "90%" }}>
                  <table className={"skills"}>
                    <tr>
                      <td>عرصہ</td>
                      <td>جگہ</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <Input
                          disabled={!outOfDarulifta[0]["امامت"]}
                          onChange={(e) =>
                            this.onchangetext(
                              "عرصہ",
                              e.target.value,
                              "outOfDarulifta",
                              0
                            )
                          }
                          className={"tableInput"}
                        />
                      </td>
                      <td>
                        <Input
                          disabled={!outOfDarulifta[0]["امامت"]}
                          onChange={(e) =>
                            this.onchangetext(
                              "جگہ",
                              e.target.value,
                              "outOfDarulifta",
                              0
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />
                      </td>
                      <td>
                        <YesnoDropDown
                          onChange={(value) =>
                            this.onchangetext(
                              "امامت",
                              value,
                              "outOfDarulifta",
                              0
                            )
                          }
                        />
                      </td>
                      <th
                        style={{
                          padding: 4,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}
                      >
                        امامت
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <Input
                          disabled={!outOfDarulifta[1]["مؤذنی"]}
                          onChange={(e) =>
                            this.onchangetext(
                              "عرصہ",
                              e.target.value,
                              "outOfDarulifta",
                              1
                            )
                          }
                          className={"tableInput"}
                        />
                      </td>
                      <td>
                        <Input
                          disabled={!outOfDarulifta[1]["مؤذنی"]}
                          onChange={(e) =>
                            this.onchangetext(
                              "جگہ",
                              e.target.value,
                              "outOfDarulifta",
                              1
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />
                      </td>
                      <td>
                        <YesnoDropDown
                          onChange={(value) =>
                            this.onchangetext(
                              "مؤذنی",
                              value,
                              "outOfDarulifta",
                              1
                            )
                          }
                        />
                      </td>
                      <th
                        style={{
                          padding: 4,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}
                      >
                        مؤذنی
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <Input
                          disabled={
                            !outOfDarulifta[2]["جامعۃ المدینہ میں تدریس"]
                          }
                          onChange={(e) =>
                            this.onchangetext(
                              "عرصہ",
                              e.target.value,
                              "outOfDarulifta",
                              2
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />
                      </td>
                      <td>
                        <Input
                          disabled={
                            !outOfDarulifta[2]["جامعۃ المدینہ میں تدریس"]
                          }
                          onChange={(e) =>
                            this.onchangetext(
                              "جگہ",
                              e.target.value,
                              "outOfDarulifta",
                              2
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />
                      </td>
                      <td>
                        <YesnoDropDown
                          onChange={(value) =>
                            this.onchangetext(
                              "جامعۃ المدینہ میں تدریس",
                              value,
                              "outOfDarulifta",
                              2
                            )
                          }
                        />
                      </td>
                      <th
                        style={{
                          padding: 4,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}
                      >
                        جامعۃ المدینہ میں تدریس
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <Input
                          disabled={!outOfDarulifta[3]["خطابت"]}
                          onChange={(e) =>
                            this.onchangetext(
                              "عرصہ",
                              e.target.value,
                              "outOfDarulifta",
                              3
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />
                      </td>
                      <td>
                        <Input
                          disabled={!outOfDarulifta[3]["خطابت"]}
                          onChange={(e) =>
                            this.onchangetext(
                              "جگہ",
                              e.target.value,
                              "outOfDarulifta",
                              3
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />
                      </td>
                      <td>
                        {" "}
                        <YesnoDropDown
                          onChange={(value) =>
                            this.onchangetext(
                              "خطابت",
                              value,
                              "outOfDarulifta",
                              3
                            )
                          }
                        />
                      </td>
                      <th
                        style={{
                          padding: 4,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}
                      >
                        خطابت
                      </th>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <TextArea
                          style={{ textAlign: "right" }}
                          onChange={(e) =>
                            this.onchangetext(
                              "دیگر(کاروباری یا علاوہ)",
                              e.target.value,
                              "outOfDarulifta",
                              4
                            )
                          }
                          rows={4}
                        />
                      </td>
                      <th
                        style={{
                          padding: 4,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}
                      >
                        دیگر(کاروباری یا علاوہ)
                      </th>
                    </tr>
                  </table>
                  <p>تحریری و تصنیفی خدمات</p>
                  <div className={"textArea"}>
                    <TextArea
                      onChange={(e) =>
                        this.setState({ writtenWork: e.target.value })
                      }
                      style={{ textAlign: "right" }}
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            ) : null}
            {countNumber == 7 ? (
              <div>
                {/* Mutalla */}
                <div className={"table-div"}>
                  <table className={"skills"}>
                    <tr>
                      <td className={"tableHeading"} colSpan={"6"}>
                        مطالعہ
                      </td>
                    </tr>
                    <tr>
                      <td>کس علم میں خصوصی مہارت ہے؟</td>
                      <td>کس علم میں خصوصی شغف ہے؟</td>
                      <td>کن کن علوم کا مطالعہ کرتے ہیں؟</td>
                      <td>ایک ہفتے میں کتنے صفحات اوسطا پڑھتے ہیں؟ </td>
                      <td>مطالعہ کی عادت ہے؟</td>
                    </tr>
                    <tr>
                      <td>
                        <Input
                          disabled={!reading[0]["مطالعہ کی عادت ہے؟"]}
                          onChange={(e) =>
                            this.onchangetext(
                              "کس علم میں خصوصی مہارت ہے؟",
                              e.target.value,
                              "reading",
                              1
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />
                      </td>
                      <td>
                        <Input
                          disabled={!reading[0]["مطالعہ کی عادت ہے؟"]}
                          onChange={(e) =>
                            this.onchangetext(
                              "کس علم میں خصوصی شغف ہے؟",
                              e.target.value,
                              "reading",
                              0
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />
                      </td>
                      <td>
                        <Input
                          disabled={!reading[0]["مطالعہ کی عادت ہے؟"]}
                          onChange={(e) =>
                            this.onchangetext(
                              "کن کن علوم کا مطالعہ کرتے ہیں؟",
                              e.target.value,
                              "reading",
                              0
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />
                      </td>
                      <td>
                        <Input
                          disabled={!reading[0]["مطالعہ کی عادت ہے؟"]}
                          onChange={(e) =>
                            this.onchangetext(
                              "ایک ہفتے میں کتنے صفحات اوسطا پڑھتے ہیں؟",
                              e.target.value,
                              "reading",
                              0
                            )
                          }
                          className={"tableInput"}
                          type={"number"}
                        />
                      </td>
                      <td>
                        {" "}
                        <YesnoDropDown
                          onChange={(value) => {
                            this.onchangetext(
                              "مطالعہ کی عادت ہے؟",
                              value,
                              "reading",
                              0
                            );
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={"3"}>
                        <Select
                          mode="tags"
                          disabled={!reading[0]["مطالعہ کی عادت ہے؟"]}
                          placeholder="Please select"
                          defaultValue={["Urdu"]}
                          onChange={(value) => {
                            this.onchangetext(
                              "کس کس زبان میں مطالعہ کرتے ہیں؟",
                              value,
                              "reading",
                              1
                            );
                            console.log(value);
                          }}
                          style={{ width: "100%" }}
                        >
                          {children}
                        </Select>
                      </td>
                      <td colSpan={"3"}>کس کس زبان میں مطالعہ کرتے ہیں؟</td>
                    </tr>
                  </table>
                </div>
              </div>
            ) : null}
            {countNumber == 8 ? (
              <div>
                <div className={"table-div"}>
                  <table>
                    <tr>
                      <td className={"tableHeading"} colSpan={"4"}>
                        بیاىا ت
                      </td>
                    </tr>
                    <tr>
                      <td>کس زبان میں</td>
                      <td>ہفتہ وار اجتماع میں بیان کرتے ہیں</td>
                      <td>کیا بیانات کرتے ہیں؟</td>
                      <td rowSpan={"3"}> مہینے میں اوسطاً کتنے </td>
                    </tr>
                    <tr>
                      <td rowSpan={"2"} style={{ width: 200 }}>
                        <Select
                          mode="tags"
                          disabled={
                            !speeches[0][
                              "ہفتہ وار اجتماع میں بیان کرتے ہیں؟"
                            ] && !speeches[0]["کیا بیانات کرتے ہیں؟"]
                          }
                          placeholder="Please select"
                          defaultValue={["Urdu"]}
                          onChange={(value) =>
                            this.onchangetext(
                              "کس زبان میں",
                              value,
                              "speeches",
                              0
                            )
                          }
                          style={{ width: 200 }}
                        >
                          {children}
                        </Select>
                      </td>
                      <td>
                        {" "}
                        <YesnoDropDown
                          onChange={(value) =>
                            this.onchangetext(
                              "ہفتہ وار اجتماع میں بیان کرتے ہیں؟",
                              value,
                              "speeches",
                              0
                            )
                          }
                        />
                      </td>
                      <td>
                        {" "}
                        <YesnoDropDown
                          onChange={(value) =>
                            this.onchangetext(
                              "کیا بیانات کرتے ہیں؟",
                              value,
                              "speeches",
                              0
                            )
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <Input
                          disabled={
                            !speeches[0]["ہفتہ وار اجتماع میں بیان کرتے ہیں؟"]
                          }
                          onChange={(e) =>
                            this.onchangetext(
                              "مہینے میں اوسطاً کتنے اجتماع",
                              e.target.value,
                              "speeches",
                              1
                            )
                          }
                          className={"tableInput"}
                          type={"number"}
                        />
                      </td>
                      <td>
                        {" "}
                        <Input
                          disabled={!speeches[0]["کیا بیانات کرتے ہیں؟"]}
                          onChange={(e) =>
                            this.onchangetext(
                              "مہینے میں اوسطاً کتنے بیان",
                              e.target.value,
                              "speeches",
                              1
                            )
                          }
                          className={"tableInput"}
                          type={"number"}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            ) : null}
            {countNumber == 9 ? (
              <div>
                <div className={"table-div"}>
                  <table>
                    <tr>
                      <td className={"tableHeading"} colSpan={"10"}>
                        زبان میں مہارت
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={"6"}>
                        {" "}
                        <Input
                          onChange={(e) =>
                            this.handleArrayChange(
                              e.target.value,
                              0,
                              "Mother Tongue - مادری زبان",
                              "languageArr"
                            )
                          }
                          className={"tableInput"}
                        />
                      </td>
                      <td colSpan={"4"}>Mother Tongue - مادری زبان</td>
                    </tr>
                    <tr>
                      <td> موجودہ کیفیت</td>
                      <td> کتنا عرصہ سیکھی</td>
                      <td>کہاں سے سیکھی</td>
                      <td>Understand سمجھنا</td>
                      <td>Speak بولنا</td>
                      <td>Write لکھنا</td>
                      <td>Read پڑھنا</td>
                      <td>Accent لب و لہجہ</td>
                      <td>Language زبان</td>
                      <td rowSpan={`${languageArr.length + 1}`}>
                        Language Proficiency آپ کِن کِن زبانوں پہ کتنی مہارت
                        رکھتے ہیں
                      </td>
                    </tr>
                    {languageArr.map((data, index) => {
                      return index !== 0 ? (
                        <tr key={index}>
                          <td style={{ width: 80 }}>
                            <Select
                              className={"tdSelect"}
                              onChange={(value) =>
                                this.handleArrayChange(
                                  value,
                                  index,
                                  "curr",
                                  "languageArr"
                                )
                              }
                              name="گروپ"
                              defaultValue={"بہتر"}
                            >
                              {data.current.map((data) => (
                                <Option value={data}>{data}</Option>
                              ))}
                            </Select>
                          </td>
                          <td>
                            <Input
                              onChange={(e) =>
                                this.handleArrayChange(
                                  e.target.value,
                                  index,
                                  "howMuch",
                                  "languageArr"
                                )
                              }
                              className={"tableInput"}
                              type={"text"}
                            />
                          </td>
                          <td>
                            <Input
                              onChange={(e) =>
                                this.handleArrayChange(
                                  e.target.value,
                                  index,
                                  "where",
                                  "languageArr"
                                )
                              }
                              className={"tableInput"}
                              type={"text"}
                            />
                          </td>
                          <td>
                            {" "}
                            <Checkbox
                              onChange={(value) =>
                                this.handleArrayChange(
                                  !data.understand,
                                  index,
                                  "understand",
                                  "languageArr"
                                )
                              }
                              value={data.understand}
                            />
                          </td>
                          <td>
                            {" "}
                            <Checkbox
                              onChange={(value) =>
                                this.handleArrayChange(
                                  !data.speak,
                                  index,
                                  "speak",
                                  "languageArr"
                                )
                              }
                              value={data.speak}
                            />
                          </td>
                          <td>
                            {" "}
                            <Checkbox
                              onChange={(value) =>
                                this.handleArrayChange(
                                  !data.write,
                                  index,
                                  "write",
                                  "languageArr"
                                )
                              }
                              value={data.write}
                            />
                          </td>
                          <td>
                            {" "}
                            <Checkbox
                              onChange={(value) =>
                                this.handleArrayChange(
                                  !data.read,
                                  index,
                                  "read",
                                  "languageArr"
                                )
                              }
                              value={data.read}
                            />
                          </td>
                          <td>
                            {" "}
                            <Checkbox
                              onChange={(value) =>
                                this.handleArrayChange(
                                  !data.accent,
                                  index,
                                  "accent",
                                  "languageArr"
                                )
                              }
                              value={data.accent}
                            />
                          </td>
                          <td>{data.name}</td>
                        </tr>
                      ) : null;
                    })}
                    <tr></tr>
                  </table>
                </div>
              </div>
            ) : null}
            {countNumber === 10 ? (
              <div className={"table-div"}>
                <table>
                  <tr>
                    <td className={"tableHeading"} colSpan={"6"}>
                      مدنی چینل و سوشل میڈیا سلسلے
                    </td>
                  </tr>
                  <tr>
                    <td>دیگر سلسلوں میں شرکت</td>
                    <td>سلسلہ دارالاافتاء اہلسنت</td>
                    <td>ذاتی سلسلہ</td>
                    <td> </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <Checkbox
                        disabled={
                          !socialMediaPrograms[1][
                            "کیا آپ سوشل میڈیا پر سلسلے کرتےہیں؟"
                          ]
                        }
                        onChange={(value) =>
                          this.onchangetext(
                            "دیگر سلسلوں میں شرکت",
                            !socialMediaPrograms[1]["دیگر سلسلوں میں شرکت"],
                            "socialMediaPrograms",
                            1
                          )
                        }
                      />
                    </td>
                    <td>
                      {" "}
                      <Checkbox
                        disabled={
                          !socialMediaPrograms[1][
                            "کیا آپ سوشل میڈیا پر سلسلے کرتےہیں؟"
                          ]
                        }
                        onChange={(value) =>
                          this.onchangetext(
                            "سلسلہ دارالاافتاء اہلسنت",
                            !socialMediaPrograms[1]["سلسلہ دارالاافتاء اہلسنت"],
                            "socialMediaPrograms",
                            1
                          )
                        }
                      />
                    </td>
                    <td>
                      {" "}
                      <Checkbox
                        disabled={
                          !socialMediaPrograms[1][
                            "کیا آپ سوشل میڈیا پر سلسلے کرتےہیں؟"
                          ]
                        }
                        onChange={(value) =>
                          this.onchangetext(
                            "ذاتی سلسلہ",
                            !socialMediaPrograms[1]["ذاتی سلسلہ"],
                            "socialMediaPrograms",
                            1
                          )
                        }
                      />
                    </td>
                    <td>
                      <YesnoDropDown
                        onChange={(value) =>
                          this.onchangetext(
                            "کیا آپ سوشل میڈیا پر سلسلے کرتےہیں؟",
                            value,
                            "socialMediaPrograms",
                            1
                          )
                        }
                      />
                    </td>
                    <td>کیا آپ سوشل میڈیا پر سلسلے کرتےہیں؟ </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <Checkbox
                        disabled={
                          !socialMediaPrograms[0][
                            "کیا آپ مدنی چینل پر سلسلے کرتےہیں؟"
                          ]
                        }
                        onChange={(value) =>
                          this.onchangetext(
                            "دیگر سلسلوں میں شرکت",
                            !socialMediaPrograms[0]["دیگر سلسلوں میں شرکت"],
                            "socialMediaPrograms",
                            0
                          )
                        }
                      />
                    </td>
                    <td>
                      {" "}
                      <Checkbox
                        disabled={
                          !socialMediaPrograms[0][
                            "کیا آپ مدنی چینل پر سلسلے کرتےہیں؟"
                          ]
                        }
                        onChange={(value) =>
                          this.onchangetext(
                            "سلسلہ دارالاافتاء اہلسنت",
                            !socialMediaPrograms[0]["سلسلہ دارالاافتاء اہلسنت"],
                            "socialMediaPrograms",
                            0
                          )
                        }
                      />
                    </td>
                    <td>
                      {" "}
                      <Checkbox
                        disabled={
                          !socialMediaPrograms[0][
                            "کیا آپ مدنی چینل پر سلسلے کرتےہیں؟"
                          ]
                        }
                        onChange={(value) =>
                          this.onchangetext(
                            "ذاتی سلسلہ",
                            !socialMediaPrograms[0]["ذاتی سلسلہ"],
                            "socialMediaPrograms",
                            0
                          )
                        }
                      />
                    </td>
                    <td>
                      <YesnoDropDown
                        onChange={(value) =>
                          this.onchangetext(
                            "کیا آپ مدنی چینل پر سلسلے کرتےہیں؟",
                            value,
                            "socialMediaPrograms",
                            0
                          )
                        }
                      />
                    </td>
                    <td>کیا آپ مدنی چینل پر سلسلے کرتےہیں؟ </td>
                  </tr>
                </table>
              </div>
            ) : null}
            {countNumber === 11 ? (
              <div>
                <div className={"table-div"}>
                  <table>
                    <tr>
                      <td className={"tableHeading"} colSpan={"4"}>
                        تنظیمی ذمہ داری
                      </td>
                    </tr>
                    <tr>
                      <td>مقام</td>
                      <td>عرصہ ذمہ داری</td>
                      <td>کس سطح پر؟</td>
                      <td rowSpan={"2"}>تنظیمی ذمہ داری</td>
                    </tr>
                    <tr>
                      <td>
                        <Input
                          onChange={(e) =>
                            this.onchangetext(
                              "مقام",
                              e.target.value,
                              "tanzeemWork",
                              0
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />{" "}
                      </td>
                      <td>
                        {" "}
                        <Input
                          onChange={(e) =>
                            this.onchangetext(
                              "عرصہ ذمہ داری",
                              e.target.value,
                              "tanzeemWork",
                              0
                            )
                          }
                          className={"tableInput"}
                          type={"number"}
                        />{" "}
                      </td>
                      <td>
                        <Select
                          onChange={(value) =>
                            this.onchangetext(
                              "کس سطح پر؟",
                              value,
                              "tanzeemWork",
                              0
                            )
                          }
                          className={"tdSelect"}
                          name="گروپ"
                          defaultValue={""}
                        >
                          <Option value="">کس سطح پر؟</Option>
                          <Option value="ذیلی">ذیلی</Option>
                          <Option value="حلقہ">حلقہ</Option>
                          <Option value="علاقہ">علاقہ</Option>
                          <Option value="ڈویژن">ڈویژن</Option>
                          <Option value="کابینہ">کابینہ</Option>
                          <Option value="زون">زون</Option>
                        </Select>
                      </td>
                    </tr>
                    <tr>
                      <td>مقام</td>
                      <td>عرصہ ذمہ داری</td>
                      <td>شعبہ</td>
                      <td rowSpan={"2"}> شعبہ سطح کی ذمہ داری</td>
                    </tr>
                    <tr>
                      <td>
                        <Input
                          onChange={(e) =>
                            this.onchangetext(
                              "مقام",
                              e.target.value,
                              "tanzeemWork",
                              1
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />{" "}
                      </td>
                      <td>
                        {" "}
                        <Input
                          onChange={(e) =>
                            this.onchangetext(
                              "عرصہ ذمہ داری",
                              e.target.value,
                              "tanzeemWork",
                              1
                            )
                          }
                          className={"tableInput"}
                        />{" "}
                      </td>
                      <td>
                        <Input
                          onChange={(e) =>
                            this.onchangetext(
                              "شعبہ",
                              e.target.value,
                              "tanzeemWork",
                              1
                            )
                          }
                          className={"tableInput"}
                          type={"text"}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <div className={"table-div"}>
                  <table>
                    <tr>
                      <td className={"tableHeading"} colSpan={"6"}>
                        بیرون ملک سفر
                      </td>
                    </tr>
                    <tr>
                      <th>سفر کا مقصد</th>
                      <th>سفر کا دورانیہ</th>
                      <th>سفر کا سال</th>
                      <th>شہر</th>
                      <th>ملک</th>
                      <th></th>
                    </tr>
                    {outOfCountry.map((data, index) => {
                      let keys = Object.keys(data);
                      return (
                        <tr>
                          <td style={{ width: 120 }}>
                            {" "}
                            <Select
                              className={"tdSelect"}
                              onChange={(value) =>
                                this.onchangetext(
                                  keys[4],
                                  value,
                                  "outOfCountry",
                                  index
                                )
                              }
                              name="گروپ"
                              defaultValue={""}
                            >
                              <Option value="">سفر کا مقصد</Option>
                              <Option value="ذاتی">ذاتی</Option>
                              <Option value="تنظیمی">تنظیمی</Option>
                              <Option value=" اپنی طرف سے ">
                                {" "}
                                اپنی طرف سے{" "}
                              </Option>
                              <Option value="دعوتِ اسلامی کی طرف سے ">
                                دعوتِ اسلامی کی طرف سے{" "}
                              </Option>
                              <Option value="کسی اور تنظیم کی طرف سے">
                                کسی اور تنظیم کی طرف سے
                              </Option>
                            </Select>{" "}
                          </td>
                          <td>
                            {" "}
                            <Input
                              onChange={(e) =>
                                this.onchangetext(
                                  keys[3],
                                  e.target.value,
                                  "outOfCountry",
                                  index
                                )
                              }
                              className={"tableInput"}
                              type={"text"}
                            />
                          </td>
                          <td>
                            {" "}
                            <Input
                              onChange={(e) =>
                                this.onchangetext(
                                  keys[2],
                                  e.target.value,
                                  "outOfCountry",
                                  index
                                )
                              }
                              className={"tableInput"}
                              type={"text"}
                            />
                          </td>
                          <td>
                            {" "}
                            <Input
                              onChange={(e) =>
                                this.onchangetext(
                                  keys[1],
                                  e.target.value,
                                  "outOfCountry",
                                  index
                                )
                              }
                              className={"tableInput"}
                              type={"text"}
                            />
                          </td>
                          <td>
                            {" "}
                            <Input
                              onChange={(e) =>
                                this.onchangetext(
                                  keys[0],
                                  e.target.value,
                                  "outOfCountry",
                                  index
                                )
                              }
                              className={"tableInput"}
                              type={"text"}
                            />
                          </td>
                          <td>1</td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </div>
            ) : null}
            {countNumber === 12 ? (
              <div className={"table-div"}>
                <table>
                  <tr>
                    <td className={"tableHeading"} colSpan={"6"}>
                      صرف د فتری استعمال کے لیے
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: 120 }}>
                      <Select
                        onChange={(value) =>
                          this.onchangetext("فریشنس", value, "officeDetail", 1)
                        }
                        className={"tdSelect"}
                        name="گروپ"
                        defaultValue={"ہشاش بشاش"}
                      >
                        <Option value="ہشاش بشاش">ہشاش بشاش</Option>
                        <Option value="درمیانہ">درمیانہ</Option>
                        <Option value="سست">سست</Option>
                      </Select>
                    </td>
                    <td>فریشنس</td>
                    <td style={{ width: 120 }}>
                      <Select
                        onChange={(value) =>
                          this.onchangetext(
                            "گھلنے ملنی کی کوالٹی",
                            value,
                            "officeDetail",
                            0
                          )
                        }
                        className={"tdSelect"}
                        name="گروپ"
                        defaultValue={"گھلنے ملنے والے"}
                      >
                        <Option value="گھلنے ملنے والے">گھلنے ملنے والے</Option>
                        <Option value="تنہائی پسند">تنہائی پسند</Option>
                      </Select>
                    </td>
                    <td>گھلنے ملنی کی کوالٹی</td>
                    <td style={{ width: 120 }}>
                      <Select
                        onChange={(value) =>
                          this.onchangetext(
                            "اسلامی بھائی کا مزاج و انداز",
                            value,
                            "officeDetail",
                            0
                          )
                        }
                        className={"tdSelect"}
                        name="گروپ"
                        defaultValue={"1"}
                      >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                      </Select>
                    </td>
                    <td>اسلامی بھائی کا مزاج و انداز</td>
                  </tr>
                  <tr>
                    <td style={{ width: 120 }}>
                      <Select
                        onChange={(value) =>
                          this.onchangetext("قد", value, "officeDetail", 1)
                        }
                        className={"tdSelect"}
                        name="گروپ"
                        defaultValue={"درمیانہ"}
                      >
                        <Option value="لمبا">لمبا</Option>
                        <Option value="درمیانہ">درمیانہ</Option>
                        <Option value="چہوٹا">چہوٹا</Option>
                      </Select>
                    </td>
                    <td>قد</td>
                    <td style={{ width: 120 }}>
                      <Select
                        onChange={(value) =>
                          this.onchangetext("شخصیت", value, "officeDetail", 2)
                        }
                        className={"tdSelect"}
                        name="گروپ"
                        defaultValue={"وجیہ"}
                      >
                        <Option value="غیر وجیہ">غیر وجیہ</Option>
                        <Option value="وجیہ">وجیہ</Option>
                      </Select>
                    </td>
                    <td>شخصیت</td>
                    <td style={{ width: 120 }}>
                      <Select
                        onChange={(value) =>
                          this.onchangetext(
                            "کھانا کھانے کا انداز",
                            value,
                            "officeDetail",
                            2
                          )
                        }
                        className={"tdSelect"}
                        name="گروپ"
                        defaultValue={"مہزب"}
                      >
                        <Option value="غیر مہزب"> غیر مہزب </Option>
                        <Option value="مہزب">مہزب</Option>
                      </Select>
                    </td>
                    <td>کھانا کھانے کا انداز</td>
                  </tr>
                  <tr>
                    <td style={{ width: 120 }}>
                      <YesnoDropDown
                        onChange={(value) =>
                          this.onchangetext(
                            "وقت کے پابند ہیں",
                            value,
                            "officeDetail",
                            4
                          )
                        }
                      />
                    </td>
                    <td>وقت کے پابند ہیں</td>
                    <td style={{ width: 120 }}>
                      <YesnoDropDown
                        onChange={(value) =>
                          this.onchangetext(
                            "کام آگے برھ چڑھ کے کرتے ہیں",
                            value,
                            "officeDetail",
                            3
                          )
                        }
                      />
                    </td>
                    <td>کام آگے برھ چڑھ کے کرتے ہیں</td>
                    <td style={{ width: 120 }}>
                      <Select
                        onChange={(value) =>
                          this.onchangetext("لباس", value, "officeDetail", 3)
                        }
                        className={"tdSelect"}
                        name="گروپ"
                        defaultValue={"سادہ لباس"}
                      >
                        <Option value="سادہ لباس"> سادہ لباس </Option>
                        <Option value="خوش لباس">خوش لباس</Option>
                      </Select>
                    </td>
                    <td>لباس</td>
                  </tr>
                  <tr>
                    <td style={{ width: 120 }}>
                      <Select
                        onChange={(value) =>
                          this.onchangetext(
                            "سوشل میڈیا بالخصوص فیس بک کے استعمال کا انداز",
                            value,
                            "officeDetail",
                            5
                          )
                        }
                        className={"tdSelect"}
                        name="گروپ"
                        defaultValue={"دینی ضرورت کے پیش نظر"}
                      >
                        <Option value="محض معلومات کے لئے">
                          محض معلومات کے لئے
                        </Option>
                        <Option value="غیر مناسب">غیر مناسب</Option>
                        <Option value="دینی ضرورت کے پیش نظر">
                          دینی ضرورت کے پیش نظر
                        </Option>
                      </Select>
                    </td>
                    <td>سوشل میڈیا بالخصوص فیس بک کے استعمال کا انداز</td>
                    <td style={{ width: 120 }}>
                      <Select
                        onChange={(value) =>
                          this.onchangetext(
                            "ان کے حوالے سے لوگوں سےشکایت وصول ہوتی ہے۔",
                            value,
                            "officeDetail",
                            5
                          )
                        }
                        className={"tdSelect"}
                        name="گروپ"
                        defaultValue={"بالکل بھی نہیں"}
                      >
                        <Option value="اخلاقی">اخلاقی</Option>
                        <Option value="علمی">علمی</Option>
                        <Option value="عملی">عملی</Option>
                        <Option value="بالکل بھی نہیں">بالکل بھی نہیں</Option>
                      </Select>
                    </td>
                    <td>ان کے حوالے سے لوگوں سےشکایت وصول ہوتی ہے۔</td>
                    <td style={{ width: 120 }}>
                      <YesnoDropDown
                        onChange={(value) =>
                          this.onchangetext(
                            "بر وقت رپلائے دیتے ہیں",
                            value,
                            "officeDetail",
                            4
                          )
                        }
                      />
                    </td>
                    <td>بر وقت رپلائے دیتے ہیں</td>
                  </tr>
                </table>
              </div>
            ) : null}
            <div className={"buttonDiv"}>
              {countNumber !== 0 ? (
                <Button
                  size={"large"}
                  type="primary"
                  onClick={() => {
                    if (countNumber < 12) {
                      this.setState({ countNumber: countNumber - 1 });
                    } else {
                      this.setState({ countNumber: 0 });
                    }
                  }}
                >
                  <Icon type="left" />
                  Back
                </Button>
              ) : null}
              <Button
                size={"large"}
                type="primary"
                onClick={() => {
                  if (countNumber < 13) {
                    if (countNumber === 0) {
                      allData["personalInfo"] = personalInfo;
                    }
                    if (countNumber === 1) {
                      allData["socialMedia"] = socialMedia;
                    }
                    if (countNumber === 2) {
                      allData["address"] = address;
                    }
                    if (countNumber === 3) {
                      allData["worldlyEducation"] = worldlyEducation;
                    }
                    if (countNumber === 4) {
                      allData["islamicEducationArr"] = islamicEducationArr;
                    }
                    if (countNumber === 5) {
                      allData["skillsArr"] = skillsArr;
                      allData["writtenwork"] = this.state.writtenWork;
                    }
                    if (countNumber === 6) {
                      allData["outOfDarulifta"] = outOfDarulifta;
                    }
                    if (countNumber === 7) {
                      allData["reading"] = reading;
                    }
                    if (countNumber === 8) {
                      allData["speeches"] = speeches;
                    }
                    if (countNumber === 9) {
                      allData["languageArr"] = languageArr;
                    }
                    if (countNumber === 10) {
                      allData["socialMediaPrograms"] = socialMediaPrograms;
                    }
                    if (countNumber === 11) {
                      allData["tanzeemWork"] = tanzeemWork;
                      allData["outOfCountry"] = outOfCountry;
                    }
                    if (countNumber === 12) {
                      allData["officeDetail"] = officeDetail;
                      addUser(allData , this.state.branch);
                      this.props.history.push("/");
                      this.setState({ countNumber: 0 });
                    }

                    this.setState({ countNumber: countNumber + 1 });
                  } else {
                    this.setState({ countNumber: 0 });
                  }
                }}
              >
                {countNumber === 12 ? "Submit" : "Next"}
                <Icon type="right" />
              </Button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
