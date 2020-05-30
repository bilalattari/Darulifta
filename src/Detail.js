import React from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import "./detail.css";
import { Steps, Input, Button, Icon, Select, Radio, Checkbox } from "antd";
import ReactToPrint from "react-to-print";

let personalInfo = {
  heading: "ذاتی معلومات",
  array: [
    {
      "Name-نام": "",
      "Father-ولدیت": "",
    },
    {
      "Nationality -قومیت": "",
      "Date of Birth - تاریخ پیدائش": "",
    },
    {
      "Passport No. - پاسپورٹ نمبر": "",
      "NIC/ID -شناختی کارڈ نمبر/  آئی ڈی": "",
    },
    {
      "PTCL-پی ٹی سی ایل نمبر": "",
      "Mobile No. -موبائل نمبر": "",
    },
    {
      "Chronic Disease - دائمی مرض": "",
      "Blood Group - بلڈ گروپ": "",
    },
    {
      "Marital Status - ازدواجی حیثیت": "",
      "Emergency No. - ایمرجنسی نمبر": "",
    },
    {
      "ڈرائیونگ آتی ہے۔": "",
      "لائسنس بنا ہوا ہے": "",
    },
    {
      Email: "",
      "": "",
    },
  ],
};

let SocialMedia = {
  heading: "سوشل میڈیا اکاؤنٹ",
  array: [
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
};

let address = {
  heading: "پتہ",
  array: [
    {
      "مکان نمبر": "",
      "گلی نمبر": "",
      "علاقہ/محلہ": "",
    },
    {
      "سرکاری صوبہ ": "",
      "مکان کی حیثیت": "",
    },
  ],
};
let worldlyEducation = [
  {
    "Degree سند": "",
    "گروپ (سائنس /آرٹس(": "",
    "ریگولر/پرائیوٹ": "",
    "Institution ادارہ": "",
    "City شہر": "",
    "Grade/CGPA گریڈ": "",
    "Passing Year": "",
  },
  {
    degree: "میٹرک",
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
    grade: "",
    status: "",
    showGroup: false,
    group: "",
    institution: "",
    city: "",
    passingYear: "",
  },
];
let islamicEducationArr = [
  {
    "Degree سند": "ناظرہ قرآن",
    "Institution ادارہ": "",
    "City شہر": "",
    "Grade/CGPA گریڈ": "",
    "Passing Year": "",
  },
  {
    degree: "ناظرہ قرآن",
    grade: "",
    institution: "",
    city: "",
    passingYear: "",
  },
  {
    degree: "حفظِ قرآن",
    grade: "",
    institution: "",
    city: "",
    passingYear: "",
  },
  {
    degree: "درسِ نظامی",
    grade: "",
    institution: "",
    city: "",
    passingYear: "",
  },
  {
    degree: "حسنِ قرأت",
    grade: "",
    showDropDown: true,
    institution: "",
    city: "",
    passingYear: "",
  },
  {
    degree: "نعت شریف",
    grade: "",
    institution: "",
    showDropDown: true,
    city: "",
    passingYear: "",
  },
  {
    degree: "اس کے علاوہ وکوئی دوسرا کورس  ",
    grade: "",
    institution: "",
    city: "",
    passingYear: "",
  },
];
let skillsArr = [
  {
    "Course Diploma کورس ڈپلومہ": "",
    "Major Subjects-مضامین": "",
    "Institution ادارہ": "",
    "City شہر": "",
    "Grade/CGPA گریڈ": "",
    "Duration/Year-دورانیہ/سال": "",
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
  {
    course: "",
    subjects: "",
    institution: "",
    city: "",
    grade: "",
    years: "",
  },
];
let outOfDarulift = {
  heading: "دارالافتاء کے علاوہ مصروفیات ",
  array: [
    {
      امامت: "",
      عرصہ: "",
      جگہ: "",
    },
    {
      مؤذنی: "",
      عرصہ: "",
      جگہ: "",
    },
    {
      "جامعۃ المدینہ میں تدریس": "",
      عرصہ: "",
      جگہ: "",
    },
    {
      خطابت: "",
      عرصہ: "",
      جگہ: "",
    },
    {
      "(دیگر(کاروباری یا علاوہ": "",
      عرصہ: "",
      جگہ: "",
    },
  ],
};
let reading = {
  heading: "مطالعہ",
  array: [
    {
      "کس علم میں خصوصی شغف ہے؟": "",
      "کن کن علوم کا مطالعہ کرتے ہیں؟": "",
      "ایک ہفتے میں کتنے صفحات اوسطا پڑھتے ہیں؟": "",
      "مطالعہ کی عادت ہے؟": "",
    },
    {
      "کس علم میں خصوصی شغف ہے؟": "",
      "کن کن علوم کا مطالعہ کرتے ہیں؟": "",
      "ایک ہفتے میں کتنے صفحات اوسطا پڑھتے ہیں؟": "",
      "مطالعہ کی عادت ہے؟": "",
    },
    {
      "کس علم میں خصوصی مہارت ہے؟": "",
      "کس کس زبان میں مطالعہ کرتے ہیں؟": "",
    },
  ],
};

let speeches = {
  heading: "بیاىا ت",
  array: [
    {
      "مہینے میں اوسطاً کتنے": "",
      "کیا بیانات کرتے ہیں؟": "",
      "ہفتہ وار اجتماع میں بیان کرتے ہیں؟": "",
      "کس زبان میں": "",
    },
    {
      "": "",
      "": "",
    },
    {
      "": "",
      "": "",
    },
  ],
};

let langugaes = {
  heading: "زبان میں مہارت",
  array: [
    {
      "Mother Tongue - مادری زبان": "",
    },
    {
      "Language Proficiency آپ کِن کِن زبانوں پہ کتنی مہارت رکھتے ہیں": "",
      "Language  زبان": "",
      "Accent لب و لہجہ": "",
      "Read  پڑھنا": "",
      "Write لکھنا": "",
      "Speak بولنا": "",
      "Understand سمجھنا": "",
      "کہاں سے سیکھی": "",
      " کتنا عرصہ سیکھی": "",
      " موجودہ کیفیت": "",
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
      current: ["بیتر", "مناسب", "کمزور"],
    },
  ],
};

let socialMedia = {
  heading: "مدنی چینل و سوشل میڈیا سلسلے",
  array: [
    {
      "کیا آپ مدنی چینل پر سلسلے کرتےہیں؟": "",
      "ذاتی سلسلہ": "",
      "سلسلہ دارالاافتاء اہلسنت": "",
      "دیگر سلسلوں میں شرکت": "",
    },
    {
      "کیا آپ سوشل میڈیا پر سلسلے کرتےہیں؟": "",
      "ذاتی سلسلہ": "",
      "سلسلہ دارالاافتاء اہلسنت": "",
      "دیگر سلسلوں میں شرکت": "",
    },
  ],
};
let tanzeemiZimedari = {
  heading: "تنظیمی ذمہ داری",
  array: [
    {
      "تيظیمی ذمہ داری": "",
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
    {
      "": "",
      "": "",
      "": "",
    },
  ],
};

let outOfCountry = {
  heading: "بیرون ملک سفر",
  array: [
    {
      ملک: "",
      شہر: "",
      "سفر کا سال": "",
      "سفر کا دورانیہ": "",
      "سفر کا مقصد": "",
    },
    { "": "", "": "", "": "", "": "" },
    { "": "", "": "", "": "", "": "" },
    { "": "", "": "", "": "", "": "" },
  ],
};

let officeDetail = {
  heading: "صرف د فتری استعمال کے لیے",
  array: [
    {
      "گھلنے ملنی کی کوالٹی": "",
      "اسلامی بھائی کا مزاج و انداز": "",
    },
    {
      قد: "",
      فریشنس: "",
    },
    {
      "کھانا کھانے کا انداز": "",
      شخصیت: "",
    },
    {
      "کام آگے برھ چڑھ کے کرتے ہیں": "",
      لباس: "",
    },
    {
      "بر وقت رپلائے دیتے ہیں": "",
      "وقت کے پابند ہیں": "",
    },
    {
      "ان کے حوالے سے لوگوں سےشکایت وصول ہوتی ہے۔": "",
      "سوشل میڈیا بالخصوص فیس بک کے استعمال کا انداز": "",
    },
  ],
};
const TableChild = ({ val, rowSpan, colSpan, index }) => (
  <td rowSpan={rowSpan} key={index} colSpan={colSpan} className={"pdfTd"}>
    {val}
  </td>
);
const TableChildHeading = ({ val, rowSpan, colSpan, index }) => (
  <th
    rowSpan={rowSpan}
    key={index}
    colSpan={colSpan}
    className={"pdfTd pdfHeading"}
  >
    {val}
  </th>
);
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      personalInfo,
      socialMedia,
      address,
      SocialMedia,
      allVals,
      outOfCountry,
      outOfDarulift,
      reading,
      speeches,
      langugaes,
      tanzeemiZimedari,
      officeDetail,
      skillsArr,
      worldlyEducation,
      islamicEducationArr,
    } = this.props;
    return (
      <div className="App" style={{ padding: 26 }}>
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"4"}>
                {personalInfo.heading}
              </td>
            </tr>
            {allVals["personalInfo"].map((data, index) => {
              let objArr = Object.keys(data);
              return (
                <tr>
                  <TableChild
                    index={index}
                    val={
                      data[objArr[0]] === true
                        ? "جی بنا ہوا ہے"
                        : data[objArr[0]] === false
                        ? "نہیں بنا ہوا"
                        : data[objArr[0]]
                    }
                  />
                  <TableChildHeading index={index} val={objArr[0]} />
                  <TableChild
                    index={index}
                    val={
                      data[objArr[1]] === true
                        ? "جی بنا ہوا ہے"
                        : data[objArr[1]] === false
                        ? "نہیں بنا ہوا"
                        : data[objArr[1]]
                    }
                  />
                  <TableChildHeading index={index} val={objArr[1]} />
                </tr>
              );
            })}
            {/* social Media */}
            {allVals["socialMedia"].map((data, index) => {
              let objArr = Object.values(data);
              return (
                <tr>
                  <td className={"pdfTd"}>{objArr[2]}</td>
                  <td className={"pdfTd"}>{objArr[1]}</td>
                  <td className={"pdfTd"}>{objArr[0]}</td>
                  {index == 0 ? (
                    <TableChildHeading
                      className={"pdfTd pdfHeading"}
                      rowSpan={2}
                      val={SocialMedia.heading}
                    />
                  ) : null}
                </tr>
              );
            })}
          </table>
        </div>
        {/* Adress */}
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"6"}>
                {address.heading}
              </td>
            </tr>
            {allVals["address"].map((data, index) => {
              let objArr = Object.keys(data);
              return index === 0 ? (
                <tr>
                  <td className={"pdfTd"}>{data[objArr[2]]}</td>
                  <th className={"pdfTd"}>{objArr[2]}</th>
                  <td className={"pdfTd"}>{data[objArr[1]]}</td>
                  <th className={"pdfTd"}>{objArr[1]}</th>
                  <td className={"pdfTd"}>{data[objArr[0]]}</td>
                  <th className={"pdfTd"}>{objArr[0]}</th>
                </tr>
              ) : (
                <tr>
                  <td className={"pdfTd"} colSpan={"3"}>
                    {data[objArr[1]]}
                  </td>
                  <th className={"pdfTd"}>{objArr[1]}</th>
                  <td className={"pdfTd"}>{data[objArr[0]]}</td>
                  <th className={"pdfTd"}>{objArr[0]}</th>
                </tr>
              );
            })}
          </table>
        </div>
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"8"}>
                {"تعلیمی پس منظر"}
              </td>
            </tr>
            <tr>
              <td className={"pdfHeader"} colSpan={"8"}>
                {"دنیوی تعلیم"}
              </td>
            </tr>
            <tr>
              <td className={"pdfTd"}>{Object.keys(worldlyEducation[0])[6]}</td>
              <td className={"pdfTd"}>{Object.keys(worldlyEducation[0])[5]}</td>
              <td className={"pdfTd"}>{Object.keys(worldlyEducation[0])[4]}</td>
              <td className={"pdfTd"}>{Object.keys(worldlyEducation[0])[3]}</td>
              <td className={"pdfTd"}>{Object.keys(worldlyEducation[0])[2]}</td>
              <td className={"pdfTd"}>{Object.keys(worldlyEducation[0])[1]}</td>
              <td className={"pdfTd"}>{Object.keys(worldlyEducation[0])[0]}</td>
            </tr>
            {allVals["worldlyEducation"].map((data, index) => {
              return (
                <tr>
                  <td className={"pdfTd"}>{data.passingYear}</td>
                  <td className={"pdfTd"}>{data.grade}</td>
                  <td className={"pdfTd"}>{data.city}</td>
                  <td className={"pdfTd"}>{data.institution}</td>
                  <td className={"pdfTd"}>{data.status}</td>
                  <td className={"pdfTd"}>{data.group}</td>
                  <th className={"pdfTd"}>{data.degree}</th>
                </tr>
              );
            })}
          </table>
        </div>
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"5"}>
                {" اسلامی تعلیم"}
              </td>
            </tr>
            <tr>
              <th className={"pdfTd"}>
                {Object.keys(islamicEducationArr[0])[4]}
              </th>
              <th className={"pdfTd"}>
                {Object.keys(islamicEducationArr[0])[3]}
              </th>
              <th className={"pdfTd"}>
                {Object.keys(islamicEducationArr[0])[2]}
              </th>
              <th className={"pdfTd"}>
                {Object.keys(islamicEducationArr[0])[1]}
              </th>
              <th className={"pdfTd"}>
                {Object.keys(islamicEducationArr[0])[0]}
              </th>
            </tr>
            {allVals["islamicEducationArr"].map((data, index) => {
              return index !== 0 ? (
                <tr>
                  <td jutkclassName={"pdfTd"}>{data.passingYear}</td>
                  <td className={"pdfTd"}>{data.grade}</td>
                  <td className={"pdfTd"}>{data.city}</td>
                  <td className={"pdfTd"}>{data.institution}</td>
                  <th className={"pdfTd"}>{data.degree}</th>
                </tr>
              ) : null;
            })}
          </table>
        </div>
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"6"}>
                {" دیگر پیشہ ورانہ صلاحیت"}
              </td>
            </tr>
            <tr>
              <th className={"pdfTd"}>{Object.keys(skillsArr[0])[5]}</th>
              <th className={"pdfTd"}>{Object.keys(skillsArr[0])[4]}</th>
              <th className={"pdfTd"}>{Object.keys(skillsArr[0])[3]}</th>
              <th className={"pdfTd"}>{Object.keys(skillsArr[0])[2]}</th>
              <th className={"pdfTd"}>{Object.keys(skillsArr[0])[1]}</th>
              <th className={"pdfTd"}>{Object.keys(skillsArr[0])[0]}</th>
            </tr>
            {allVals["skillsArr"].map((data, index) => {
              return (
                <tr>
                  <td key={index} className={"pdfTd"}>
                    {data.years}
                  </td>
                  <td key={index} className={"pdfTd"}>
                    {data.grade}
                  </td>
                  <td key={index} className={"pdfTd"}>
                    {data.city}
                  </td>
                  <td key={index} className={"pdfTd"}>
                    {data.institution}
                  </td>
                  <td key={index} className={"pdfTd"}>
                    {data.subjects}
                  </td>
                  <th key={index} className={"pdfTd"}>
                    {data.course}
                  </th>
                </tr>
              );
            })}
          </table>
        </div>
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"6"}>
                {outOfDarulift.heading}
              </td>
            </tr>
            {allVals["outOfDarulifta"].map((data, index) => {
              let object = Object.keys(outOfDarulift.array[index]);
              console.log(data, object, "++++++++++++++++++++++++==");

              return index !== 4 ? (
                <tr>
                  <td key={index} className={"pdfTd"}>
                    {data[object[2]]}
                  </td>
                  <td key={index} className={"pdfTd"}>
                    {object[2]}
                  </td>
                  <td key={index} className={"pdfTd"}>
                    {data[object[1]]}
                  </td>
                  <td key={index} className={"pdfTd"}>
                    {object[1]}
                  </td>
                  <td key={index} className={"pdfTd"}>
                    {data[object[0]] === true ? "جی ہاں" : "نہیں"}
                  </td>
                  <th key={index} className={"pdfTd"}>
                    {object[0]}
                  </th>
                </tr>
              ) : (
                <tr>
                  <td className={"pdfTd"} colSpan={"5"} rowSpan={"2"}>
                    {data[object[0]]}
                  </td>
                  <th className={"pdfTd"} rowSpan={"2"}>
                    {object[0]}
                  </th>
                </tr>
              );
            })}
          </table>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"6"}>
                تحریری و تصنیفی خدمات
              </td>
            </tr>
            <tr>
              <td className={"pdfTd"} colSpan={"6"}>
                {allVals["writtenwork"]}
              </td>
            </tr>
          </table>
        </div>
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"4"}>
                {reading.heading}
              </td>
            </tr>
            {allVals["reading"].map((data, index) => {
              let object = Object.keys(data);
              return index === 0 ? (
                <>
                  <tr>
                    <th className={"pdfTd"}>{object[3]}</th>
                    <th className={"pdfTd"}>{object[2]}</th>
                    <th className={"pdfTd"}>{object[1]}</th>
                    <th className={"pdfTd"}>{object[0]}</th>
                  </tr>
                  <tr>
                    <td className={"pdfTd"}>{data[object[3]]}</td>
                    <td className={"pdfTd"}>{data[object[2]]}</td>
                    <td className={"pdfTd"}>
                      {data[object[1]] === true ? "جی ہاں" : "نہیں"}
                    </td>
                    <th className={"pdfTd"}>{data[object[0]]}</th>
                  </tr>
                </>
              ) : index === 1 ? (
                <tr>
                  <td className={"pdfTd"}>{data[object[1]]}</td>
                  <th className={"pdfTd"}>{object[1]}</th>
                  <td className={"pdfTd"}>{data[object[0]]}</td>
                  <th className={"pdfTd"}>{object[0]}</th>
                </tr>
              ) : null;
            })}
          </table>
        </div>
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"4"}>
                {speeches.heading}
              </td>
            </tr>
            {allVals["speeches"].map((data, index) => {
              let object = Object.keys(data);
              return index === 0 ? (
                <>
                  <tr>
                    <th className={"pdfTd"}> {object[1]}</th>
                    <th className={"pdfTd"}>{object[3]} </th>
                    <th className={"pdfTd"}> {object[2]}</th>
                    <th className={"pdfTd"} rowSpan={"3"}>
                      {object[0]}
                    </th>
                  </tr>
                  <tr>
                    <td className={"pdfTd"} rowSpan={"2"}>
                      {data[object[1]]}
                    </td>
                    <td className={"pdfTd"}>
                      {data[object[2]] === true ? "جی ہاں" : "نہیں"}
                    </td>
                    <td className={"pdfTd"}>
                      {data[object[3]] === true ? "جی ہاں" : "نہیں"}
                    </td>
                  </tr>
                </>
              ) : index === 1 ? (
                <tr>
                  <td className={"pdfTd"}>{data[object[1]]}</td>
                  <td className={"pdfTd"}>{data[object[0]]}</td>
                </tr>
              ) : null;
            })}
          </table>
        </div>
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"10"}>
                {langugaes.heading}
              </td>
            </tr>
            {allVals["languageArr"].map((data, index) => {
              let object = Object.keys(langugaes.array[index]);
              return index === 0 ? (
                <tr>
                  <TableChild colSpan={8} val={data[object[0]]} />
                  <TableChildHeading colSpan={2} val={object[0]} />
                </tr>
              ) : index === 1 ? (
                <tr>
                  <TableChildHeading val={object[9]} />
                  <TableChildHeading val={object[8]} />
                  <TableChildHeading val={object[7]} />
                  <TableChildHeading val={object[6]} />
                  <TableChildHeading val={object[5]} />
                  <TableChildHeading val={object[4]} />
                  <TableChildHeading val={object[3]} />
                  <TableChildHeading val={object[2]} />
                  <TableChildHeading val={object[1]} />
                  <TableChildHeading rowSpan={"8"} val={object[0]} />
                </tr>
              ) : (
                <tr>
                  <TableChild val={data.curr} />
                  <TableChild val={data.howMuch} />
                  <TableChild val={data.where} />
                  <TableChild val={data.understand ? "جی ہاں" : "جی نہیں"} />
                  <TableChild val={data.speak ? "جی ہاں" : "جی نہیں"} />
                  <TableChild val={data.write ? "جی ہاں" : "جی نہیں"} />
                  <TableChild val={data.read ? "جی ہاں" : "جی نہیں"} />
                  <TableChild val={data.accent ? "جی ہاں" : "جی نہیں"} />
                  <TableChild val={data.name} />
                </tr>
              );
            })}
          </table>
        </div>
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"4"}>
                {socialMedia.heading}
              </td>
            </tr>
            {allVals["socialMediaPrograms"].map((data, index) => {
              let object = Object.keys(data);
              return (
                <>
                  <tr>
                    <TableChildHeading val={object[0]} />
                    <TableChildHeading val={object[1]} />
                    <TableChildHeading val={object[2]} />
                    <TableChildHeading val={object[3]} />
                  </tr>
                  <tr>
                    <TableChild
                      val={data[object[0]] ? "جی کرتا ہوں" : "جی نہیں کرتا"}
                    />
                    <TableChild
                      val={data[object[1]] ? "جی کرتا ہوں" : "جی نہیں کرتا"}
                    />
                    <TableChild
                      val={data[object[2]] ? "جی کرتا ہوں" : "جی نہیں کرتا"}
                    />
                    <TableChild
                      val={data[object[3]] ? "جی کرتا ہوں" : "جی نہیں کرتا"}
                    />
                  </tr>
                </>
              );
            })}
          </table>
        </div>
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"4"}>
                {tanzeemiZimedari.heading}
              </td>
            </tr>
            {allVals["tanzeemWork"].map((data, index) => {
              let object = Object.keys(tanzeemiZimedari.array[index]);
              return (
                <>
                  <tr>
                    <TableChildHeading val={object[3]} />
                    <TableChildHeading val={object[2]} />
                    <TableChildHeading val={object[1]} />
                    <TableChildHeading rowSpan={2} val={object[0]} />
                  </tr>
                  <tr>
                    <TableChild val={data[object[3]]} />
                    <TableChild val={data[object[2]]} />
                    <TableChild val={data[object[1]]} />
                  </tr>
                </>
              );
            })}
          </table>
        </div>
        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"5"}>
                {outOfCountry.heading}
              </td>
            </tr>
            <tr>
              <TableChildHeading val={Object.keys(outOfCountry.array[0])[4]} />
              <TableChildHeading val={Object.keys(outOfCountry.array[0])[3]} />
              <TableChildHeading val={Object.keys(outOfCountry.array[0])[2]} />
              <TableChildHeading val={Object.keys(outOfCountry.array[0])[1]} />
              <TableChildHeading val={Object.keys(outOfCountry.array[0])[0]} />
            </tr>
            {allVals["outOfCountry"].map((data, index) => {
              let object = Object.keys(data);
              return (
                <tr>
                  <TableChild val={data[object[4]]} />
                  <TableChild val={data[object[3]]} />
                  <TableChild val={data[object[2]]} />
                  <TableChild val={data[object[1]]} />
                  <TableChild val={data[object[0]]} />
                </tr>
              );
            })}
          </table>
        </div>
        <div className={"table-div-pdf"} style={{ marginBottom: 63 }}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"4"}>
                {officeDetail.heading}
              </td>
            </tr>
            {allVals["officeDetail"].map((data, index) => {
              let object = Object.keys(data);
              return (
                <tr>
                  <TableChild
                    val={
                      data[object[1]] === true
                        ? "جی ہاں"
                        : data[object[1]] === false
                        ? "جی نہیں"
                        : data[object[1]]
                    }
                  />
                  <TableChildHeading val={object[1]} />
                  <TableChild
                    val={
                      data[object[0]] === true
                        ? "جی ہاں"
                        : data[object[0]] === false
                        ? "جی نہیں"
                        : data[object[0]]
                    }
                  />
                  <TableChildHeading val={object[0]} />
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}
class Example extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let allVals;
    let id;
    if (this.props.history) {
      allVals = this.props.history.location.state.data;
      id = this.props.history.location.state.key;
    }
    console.log(
      allVals,
      id,
      "-----------------------------------------------------------------"
    );
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "spae-between",
            margin: 25,
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{ marginRight: 5, width: 156 }}
              type={"secondary"}
              onClick={() => {
                this.props.history.push({
                  pathname: "/form",
                  state: {
                    data: allVals,
                    key: id,
                  },
                });
              }}
            >
              Edit
            </Button>
            <Button style={{ marginRight: 5, width: 156 }} type={"danger"}>
              Delete
            </Button>
          </div>
          <ReactToPrint
            trigger={() => (
              <Button className={"printOutButton"} type="primary">
                Print This Out
              </Button>
            )}
            content={() => this.componentRef}
            pageStyle={{ padStart: 12, padEnd: 25 }}
            onBeforePrint={() => this.props.history.push("/")}
          />
        </div>
        {allVals ? (
          <Home
            personalInfo={personalInfo}
            socialMedia={socialMedia}
            address={address}
            langugaes={langugaes}
            outOfDarulift={outOfDarulift}
            outOfCountry={outOfCountry}
            speeches={speeches}
            reading={reading}
            allVals={allVals}
            skillsArr={skillsArr}
            tanzeemiZimedari={tanzeemiZimedari}
            worldlyEducation={worldlyEducation}
            islamicEducationArr={islamicEducationArr}
            officeDetail={officeDetail}
            SocialMedia={SocialMedia}
            ref={(el) => (this.componentRef = el)}
          />
        ) : null}
      </div>
    );
  }
}
export default Example;
