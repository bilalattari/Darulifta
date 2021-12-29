import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import "./detail.css";
import { Button, Popconfirm, message } from "antd";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaSkype,
  FaFacebook,
  FaTwitter,
  FaCheck,
} from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import ReactToPrint from "react-to-print";
import { deleteUser } from "./firebase";
const text = "Are you sure to delete this user?";

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
  ],
};

let relationShip = {
  heading: "رشتہ دار",
  array: [
    {
      "رشتےد اروں میں کوئی اہم پوسٹ پر ہے": true,
      "پرائیویٹ ادارہ": "",
      "سرکاری ادارہ": "",
      "کس پوسٹ پر ہیں؟": "",
      "کس شہر میں ہیں؟": "",
      "کتنے عرصے سے سروس کررہے ہیں؟": "",
    },
    {
      "رشتےد اروں میں سے کوئی بڑا بزنس مین ہے": true,
      "کیا کاروبار کرتےہیں؟": "",
      "کس شہر میں کرتےہیں؟": "",
    },
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

  checkAnyActivityExist = (arr) => {
    let isExist = false;
    arr.map((data) => {
      if (data.course !== "") {
        isExist = true;
      }
    });
    return isExist;
  };

  updatePersonalInfoObject = (arr) => {
    let array = arr;
    let dateOfBirth = array[2];
    let obj = {};
    Object.keys(dateOfBirth).map((key) => {
      if (dateOfBirth[key]) {
        obj[key] = dateOfBirth[key];
      }
    });
    array[2] = obj;

    return array;
  };

  getIcon = (icon) => {
    return icon === "Facebook" ? (
      <FaFacebook className="site-form-item-icon social_icons" />
    ) : icon === "Skype" ? (
      <FaSkype className="site-form-item-icon social_icons" />
    ) : icon === "Whatsapp" ? (
      <FaWhatsapp className="site-form-item-icon social_icons" />
    ) : icon === "Instagram" ? (
      <FaInstagram className="site-form-item-icon social_icons" />
    ) : icon === "LinkedIn" ? (
      <FaLinkedin className="site-form-item-icon social_icons" />
    ) : (
      <FaTwitter className="site-form-item-icon social_icons" />
    );
  };

  checkIfUserTraveled = (arr) => {
    let isTravled = false;
    arr.map((data) => {
      if (data["ملک"]) {
        isTravled = true;
      }
    });
    return isTravled;
  };

  isUserKnowThisLanguage = (lng) => {
    let userKnow = false;
    if (lng.accent || lng.write || lng.understand || lng.speak || lng.read) {
      userKnow = true;
    }
    return userKnow;
  };

  checkIfAnyActivityOutsideIfta = (arr) => {
    let ifAnyActivity = false;

    if (
      arr[0]["امامت"] ||
      arr[1]["مؤذنی"] ||
      arr[2]["جامعۃ المدینہ میں تدریس"] ||
      arr[3]["خطابت"] ||
      arr[4]["(دیگر(کاروباری یا علاوہ"]
    ) {
      ifAnyActivity = true;
    }
    return ifAnyActivity;
  };

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
      relationShip,
    } = this.props;

    console.log('allVals["personalInfo"]=>', allVals["personalInfo"]);
    let image = allVals["personalInfo"][9];
    return (
      <div className="App" style={{ padding: 26 }}>
        <div className={"table-div-pdf"} style = {{position : 'relative' , marginTop : 63}}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"4"}>
                {personalInfo.heading}
              </td>
            </tr>
            {image && (
              <img
                alt={"User image"}
                src={image.image}
                className={"user_img"}
              />
            )}
            {this.updatePersonalInfoObject(allVals["personalInfo"]).map(
              (data, index) => {
                let objArr = Object.keys(data);
                return (
                  <tr>
                    {objArr[0] !== "image" ? (
                      <TableChild
                        colSpan={!objArr[1] && 3}
                        val={
                          data[objArr[0]] === true ? (
                            <FaCheck className={"check_icon"} />
                          ) : data[objArr[0]] === false ? (
                            <IoIosCloseCircle />
                          ) : data[objArr[0]] ? (
                            data[objArr[0]]
                          ) : (
                            "-"
                          )
                        }
                      />
                    ) : null}
                    {objArr[0] !== "image" && (
                      <TableChildHeading index={index} val={objArr[0]} />
                    )}

                    {objArr[1] && (
                      <TableChild
                        index={index}
                        val={
                          data[objArr[1]] === true ? (
                            <FaCheck className={"check_icon"} />
                          ) : data[objArr[1]] === false ? (
                            <IoIosCloseCircle />
                          ) : data[objArr[1]] ? (
                            data[objArr[1]]
                          ) : (
                            "-"
                          )
                        }
                      />
                    )}
                    {objArr[1] && (
                      <TableChildHeading index={index} val={objArr[1]} />
                    )}
                  </tr>
                );
              }
            )}

            {/* social Media */}
            {allVals["socialMedia"].map((data, index) => {
              let objArr = Object.values(data);
              let ObjKeys = Object.keys(data);
              return (
                <tr>
                  <td className={"pdfTd"}>
                    {this.getIcon(ObjKeys[2])} {objArr[2] ? objArr[2] : "-"}
                  </td>
                  <td className={"pdfTd"}>
                    {" "}
                    {this.getIcon(ObjKeys[1])} {objArr[1] ? objArr[1] : "-"}
                  </td>
                  <td className={"pdfTd"}>
                    {this.getIcon(ObjKeys[0])} {objArr[0] ? objArr[0] : "-"}
                  </td>
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
            <thead>
              <tr>
                <td className={"pdfHeader"} colSpan={"6"}>
                  {address.heading}
                </td>
              </tr>
            </thead>
            <tbody>
              {allVals["address"].map((data, index) => {
                let objArr = Object.keys(data);
                return index === 0 ? (
                  <tr>
                    <td className={"pdfTd"}>
                      {data[objArr[0]] ? data[objArr[0]] : "-"}
                    </td>
                    <th className={"pdfTd pdfHeading"}>{objArr[0]}</th>
                    <td className={"pdfTd"}>
                      {data[objArr[1]] ? data[objArr[1]] : "-"}
                    </td>
                    <th className={"pdfTd pdfHeading"}>{objArr[1]}</th>
                    <td className={"pdfTd"}>
                      {data[objArr[2]] ? data[objArr[2]] : "-"}
                    </td>
                    <th className={"pdfTd pdfHeading"}>{objArr[2]}</th>
                  </tr>
                ) : (
                  <tr>
                    <td className={"pdfTd"} colSpan={"3"}>
                      {data[objArr[1]] ? data[objArr[1]] : "-"}
                    </td>
                    <th className={"pdfHeading pdfTd"}>{objArr[1]}</th>
                    <td className={"pdfTd"}>
                      {data[objArr[0]] ? data[objArr[0]] : "-"}
                    </td>
                    <th className={"pdfHeading pdfTd"}>{objArr[0]}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={"table-div-pdf"}>
          <table>
            <thead>
              <tr style={{ marginBottom: "12px" }}>
                <td
                  className={"pdfHeader"}
                  style={{ backgroundColor: "#172849" }}
                  colSpan={"8"}
                >
                  {"تعلیمی پس منظر"}
                </td>
              </tr>

              <tr>
                <td className={"pdfHeader"} colSpan={"8"}>
                  {"دنیوی تعلیم"}
                </td>
              </tr>
              <tr>
                <td className={"pdfHeading pdfTd"}>
                  {Object.keys(worldlyEducation[0])[6]}
                </td>
                <td className={"pdfHeading pdfTd"}>
                  {Object.keys(worldlyEducation[0])[5]}
                </td>
                <td className={"pdfHeading pdfTd"}>
                  {Object.keys(worldlyEducation[0])[4]}
                </td>
                <td className={"pdfHeading pdfTd"}>
                  {Object.keys(worldlyEducation[0])[3]}
                </td>
                <td className={"pdfHeading pdfTd"}>
                  {Object.keys(worldlyEducation[0])[2]}
                </td>
                <td className={"pdfHeading pdfTd"}>
                  {Object.keys(worldlyEducation[0])[1]}
                </td>
                <td className={"pdfHeading pdfTd"}>
                  {Object.keys(worldlyEducation[0])[0]}
                </td>
              </tr>
            </thead>
            <tbody>
              {allVals["worldlyEducation"].map((data, index) => {
                return data.haveDone ? (
                  <tr>
                    <td className={" pdfTd"}>
                      {data.passingYear ? data.passingYear : "-"}
                    </td>
                    <td className={" pdfTd"}>
                      {data.grade ? data.grade : "-"}
                    </td>
                    <td className={" pdfTd"}>{data.city ? data.city : "-"}</td>
                    <td className={" pdfTd"}>
                      {data.institution ? data.institution : "-"}
                    </td>
                    <td className={" pdfTd"}>
                      {data.status ? data.status : "-"}
                    </td>
                    <td className={" pdfTd"}>
                      {data.group ? data.group : "-"}
                    </td>
                    <th className={"pdfHeading pdfTd"}>
                      {data.degree ? data.degree : "-"}
                    </th>
                  </tr>
                ) : null;
              })}
            </tbody>
          </table>
        </div>

        <div className={"table-div-pdf"}>
          <table>
            <thead>
              <tr>
                <td className={"pdfHeader"} colSpan={"5"}>
                  {" اسلامی تعلیم"}
                </td>
              </tr>
              <tr>
                <th className={"pdfHeading pdfTd"}>
                  {Object.keys(islamicEducationArr[0])[4]}
                </th>
                <th className={"pdfHeading pdfTd"}>
                  {Object.keys(islamicEducationArr[0])[3]}
                </th>
                <th className={"pdfHeading pdfTd"}>
                  {Object.keys(islamicEducationArr[0])[2]}
                </th>
                <th className={"pdfHeading pdfTd"}>
                  {Object.keys(islamicEducationArr[0])[1]}
                </th>
                <th className={"pdfHeading pdfTd"}>
                  {Object.keys(islamicEducationArr[0])[0]}
                </th>
              </tr>
            </thead>
            <tbody>
              {allVals["islamicEducationArr"].map((data, index) => {
                return index !== 0 && data.haveDone ? (
                  <tr>
                    <td className={"pdfTd"}>
                      {data.passingYear ? data.passingYear : "-"}
                    </td>
                    <td className={"pdfTd"}>{data.grade ? data.grade : "-"}</td>
                    <td className={"pdfTd"}>{data.city ? data.city : "-"}</td>
                    <td className={"pdfTd"}>
                      {data.institution ? data.institution : "-"}
                    </td>
                    <th className={"pdfHeading pdfTd"}>
                      {data.degree ? data.degree : "-"}
                    </th>
                  </tr>
                ) : null;
              })}
            </tbody>
          </table>
        </div>

        {this.checkAnyActivityExist(allVals["skillsArr"]) && (
          <div className={"table-div-pdf"}>
            <table>
              <thead>
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
              </thead>
              <tbody>
                {allVals["skillsArr"].map((data, index) => {
                  return data.course ? (
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
                  ) : null;
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className={"table-div-pdf"}>
          {this.checkIfAnyActivityOutsideIfta(allVals["outOfDarulifta"]) && (
            <table>
              <thead>
                <tr>
                  <td className={"pdfHeader"} colSpan={"6"}>
                    {outOfDarulift.heading}
                  </td>
                </tr>
              </thead>
              <tbody>
                {allVals["outOfDarulifta"].map((data, index) => {
                  let object = Object.keys(outOfDarulift.array[index]);

                  return index === 4 && data[object[0]] ? (
                    <tr>
                      <td className={"pdfTd"} colSpan={"5"} rowSpan={"2"}>
                        {data[object[0]] ? data[object[0]] : "-"}
                      </td>
                      <th className={"pdfTd"} rowSpan={"2"}>
                        {object[0]}
                      </th>
                    </tr>
                  ) : data[object[0]] === true ? (
                    <tr>
                      <td key={index} className={"pdfTd"}>
                        {data[object[2]] ? data[object[2]] : "-"}
                      </td>
                      <td key={index} className={"pdfHeading pdfTd"}>
                        {object[2]}
                      </td>
                      <td key={index} className={"pdfTd"}>
                        {data[object[1]] ? data[object[1]] : "-"}
                      </td>
                      <td key={index} className={"pdfHeading pdfTd"}>
                        {object[1]}
                      </td>
                      <td key={index} className={"pdfTd"}>
                        <FaCheck className={"check_icon"} />
                      </td>
                      <th key={index} className={"pdfHeading pdfTd"}>
                        {object[0]}
                      </th>
                    </tr>
                  ) : null;
                })}
              </tbody>
            </table>
          )}

          {allVals["writtenwork"] && (
            <table>
              <thead>
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
              </thead>
            </table>
          )}
        </div>

        <div className={"table-div-pdf"}>
          <table>
            <thead>
              <tr>
                <td className={"pdfHeader"} colSpan={"4"}>
                  {reading.heading}
                </td>
              </tr>
            </thead>
            <tbody>
              {allVals["reading"].map((data, index) => {
                let object = Object.keys(data);
                return index === 0 ? (
                  <>
                    <tr>
                      <th className={"pdfHeading pdfTd"}>{object[3]}</th>
                      <th className={"pdfHeading pdfTd"}>{object[2]}</th>
                      <th className={"pdfHeading pdfTd"}>{object[1]}</th>
                      <th className={"pdfHeading pdfTd"}>{object[0]}</th>
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
                  <>
                    <tr>
                      <th colSpan={2} className={"pdfHeading pdfTd"}>
                        {object[1]}
                      </th>
                      <th colSpan={2} className={"pdfHeading pdfTd"}>
                        {object[0]}
                      </th>
                    </tr>
                    <tr>
                      <td colSpan={2} className={"pdfTd"}>
                        {data[object[1]].join(", ")}
                      </td>
                      <td colSpan={2} className={"pdfTd"}>
                        {data[object[0]]}
                      </td>
                    </tr>
                  </>
                ) : null;
              })}
            </tbody>
          </table>
        </div>

        <div className={"table-div-pdf"}>
          <table>
            <thead>
              <tr>
                <td className={"pdfHeader"} colSpan={"4"}>
                  {speeches.heading}
                </td>
              </tr>
            </thead>
            <tbody>
              {allVals["speeches"].map((data, index) => {
                let object = Object.keys(data);

                return index === 0 ? (
                  <>
                    <tr>
                      <th className={"pdfHeading pdfTd"}> {object[1]}</th>
                      <th className={"pdfHeading pdfTd"}>{object[3]} </th>
                      <th className={"pdfHeading pdfTd"}> {object[2]}</th>
                      <th className={"pdfHeading pdfTd"} rowSpan={"2"}></th>
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
                    <th className={"pdfHeading pdfTd"} rowSpan={"1"}>
                      مہینے میں اوسطاً کتنے
                    </th>
                  </tr>
                ) : null;
              })}
            </tbody>
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
              let isUserKnowThisLanguage = this.isUserKnowThisLanguage(data);
              return index === 0 ? (
                <tr>
                  <TableChild colSpan={8} val={data[object[0]]} />
                  <TableChildHeading colSpan={2} val={object[0]} />
                </tr>
              ) : index === 1 ? (
                <>
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
                    <TableChildHeading
                      rowSpan={allVals["languageArr"].length}
                      val={object[0]}
                    />
                  </tr>
                  <tr>
                    <TableChild val={data.curr ? data.curr : "-"} />
                    <TableChild val={data.howMuch ? data.howMuch : "-"} />
                    <TableChild val={data.where ? data.where : "-"} />
                    <TableChild
                      val={
                        data.understand ? (
                          <FaCheck className="check_icon" />
                        ) : null
                      }
                    />
                    <TableChild
                      val={
                        data.speak ? <FaCheck className="check_icon" /> : null
                      }
                    />
                    <TableChild
                      val={
                        data.write ? <FaCheck className="check_icon" /> : null
                      }
                    />
                    <TableChild
                      val={
                        data.read ? <FaCheck className="check_icon" /> : null
                      }
                    />
                    <TableChild
                      val={
                        data.accent ? <FaCheck className="check_icon" /> : null
                      }
                    />
                    <TableChild val={data.name} />
                  </tr>
                </>
              ) : isUserKnowThisLanguage ? (
                <tr>
                  <TableChild val={data.curr ? data.curr : "-"} />
                  <TableChild val={data.howMuch ? data.howMuch : "-"} />
                  <TableChild val={data.where ? data.where : "-"} />
                  <TableChild
                    val={
                      data.understand ? (
                        <FaCheck className="check_icon" />
                      ) : null
                    }
                  />
                  <TableChild
                    val={data.speak ? <FaCheck className="check_icon" /> : null}
                  />
                  <TableChild
                    val={data.write ? <FaCheck className="check_icon" /> : null}
                  />
                  <TableChild
                    val={data.read ? <FaCheck className="check_icon" /> : null}
                  />
                  <TableChild
                    val={
                      data.accent ? <FaCheck className="check_icon" /> : null
                    }
                  />
                  <TableChild val={data.name} />
                </tr>
              ) : null;
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
                      val={
                        data[object[0]] ? (
                          <FaCheck className={"check_icon"} />
                        ) : (
                          <IoIosCloseCircle />
                        )
                      }
                    />
                    <TableChild
                      val={
                        data[object[1]] ? (
                          <FaCheck className={"check_icon"} />
                        ) : (
                          <IoIosCloseCircle />
                        )
                      }
                    />
                    <TableChild
                      val={
                        data[object[2]] ? (
                          <FaCheck className={"check_icon"} />
                        ) : (
                          <IoIosCloseCircle />
                        )
                      }
                    />
                    <TableChild
                      val={
                        data[object[3]] ? (
                          <FaCheck className={"check_icon"} />
                        ) : (
                          <IoIosCloseCircle />
                        )
                      }
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

        {this.checkIfUserTraveled(allVals["outOfCountry"]) && (
          <div className={"table-div-pdf"}>
            <table>
              <tr>
                <td className={"pdfHeader"} colSpan={"5"}>
                  {outOfCountry.heading}
                </td>
              </tr>
              <tr>
                <TableChildHeading
                  val={Object.keys(outOfCountry.array[0])[4]}
                />
                <TableChildHeading
                  val={Object.keys(outOfCountry.array[0])[3]}
                />
                <TableChildHeading
                  val={Object.keys(outOfCountry.array[0])[2]}
                />
                <TableChildHeading
                  val={Object.keys(outOfCountry.array[0])[1]}
                />
                <TableChildHeading
                  val={Object.keys(outOfCountry.array[0])[0]}
                />
              </tr>

              {allVals["outOfCountry"].map((data, index) => {
                console.log(
                  'allVals["outOfCountry"]=>',
                  allVals["outOfCountry"]
                );
                return data["ملک"] ? (
                  <tr>
                    <TableChild val={data["سفر کا مقصد"]} />
                    <TableChild val={data["سفر کا دورانیہ"]} />
                    <TableChild val={data["سفر کا سال"]} />
                    <TableChild val={data["شہر"]} />
                    <TableChild val={data["ملک"]} />
                  </tr>
                ) : null;
              })}
            </table>
          </div>
        )}

        <div className={"table-div-pdf"}>
          <table>
            <tr>
              <td className={"pdfHeader"} colSpan={"6"}>
                {relationShip.heading}
              </td>
            </tr>
            {allVals["relationShip"] &&
              allVals["relationShip"].map((data, index) => {
                let objArr = Object.keys(data);
                return index === 0 ? (
                  <>
                    <tr>
                      <TableChildHeading val={objArr[5]} />
                      <TableChildHeading val={objArr[4]} />
                      <TableChildHeading val={objArr[3]} />
                      <TableChildHeading val={objArr[2]} />
                      <TableChildHeading val={objArr[1]} />
                      <TableChildHeading val={objArr[0]} rowSpan={2} />
                    </tr>
                    <tr>
                      <TableChild val={data[objArr[5]]} />
                      <TableChild val={data[objArr[4]]} />
                      <TableChild val={data[objArr[3]]} />
                      <TableChild val={data[objArr[2]]} />
                      <TableChild val={data[objArr[1]]} />
                    </tr>
                  </>
                ) : (
                  <>
                    <tr>
                      <TableChildHeading val={objArr[2]} colSpan={2} />
                      <TableChildHeading val={objArr[1]} colSpan={3} />
                      <TableChildHeading val={objArr[0]} rowSpan={2} />
                    </tr>
                    <tr>
                      <TableChild val={data[objArr[2]]} colSpan={2} />
                      <TableChild val={data[objArr[1]]} colSpan={3} />
                    </tr>
                  </>
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
  confirm = () => {
    let allVals = this.props.history.location.state.data;
    let id = this.props.history.location.state.key;
    let branchName = this.props.history.location.state.branch;
    deleteUser(allVals, branchName, id);
    message.info("This user is deleted");
    this.props.history.push("/");
  };

  render() {
    let allVals;
    let id;
    let branchName;
    if (this.props.history) {
      allVals = this.props.history.location.state.data;
      id = this.props.history.location.state.key;
      branchName = this.props.history.location.state.branch;
    }

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
                  pathname: `/edit/${id}`,
                  state: {
                    data: allVals,
                    key: id,
                    branch: branchName,
                  },
                });
              }}
            >
              Edit
            </Button>
            <Popconfirm
              placement="topLeft"
              title={text}
              onConfirm={this.confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button style={{ marginRight: 5, width: 156 }} type={"danger"}>
                Delete
              </Button>
            </Popconfirm>
          </div>

          <ReactToPrint
            trigger={() => (
              <Button className={"printOutButton"} type="primary">
                Print This Out
              </Button>
            )}
            content={() => this.componentRef}
            pageStyle="@page { size: auto; margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; padding: 40px !important; marginBottom: 20px !important; } }"
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
            relationShip={relationShip}
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
