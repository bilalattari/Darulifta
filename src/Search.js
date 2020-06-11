import React from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { getUsers } from "./firebase";
import ReactToPrint from "react-to-print";
import PrintSearchTable from "./PrintTable";
import { Select, Card, Modal, Button, Input } from "antd";
const { Option } = Select;
const { Meta } = Card;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
      world: false,
      allBrothers: [],
      filterdVal: 0,
      filteredArr: [],
      filteredArrPrint: [],
      speech: false,
      tanzeem: false,
      outOfIfta: false,
    };
    this.allUsers = [];
  }
  componentDidMount = async () => {
    this.getUsers();
  };
  getUsers = () => {
    firebase
      .database()
      .ref()
      .child("Brother")
      .once("value", (snapshot) => {
        let val = snapshot.val();
        this.setState({ allUsers: val }, () => this.getAllDaruliftaBrothers());
      });
  };
  getAllDaruliftaBrothers = async () => {
    let { allUsers, allBrothers } = this.state;
    let AllDaruliftaBrothers = [];
    await Object.keys(allUsers).map((branchName, index) => {
      let allBros = Object.values(allUsers[branchName]);
      let allBrosKeys = Object.keys(allUsers[branchName]);
      allBros.map((data, index) => {
        data.branch = branchName;
        data.id = allBrosKeys[index];
        console.log(data, "data");
        AllDaruliftaBrothers.push(data);
      });
    });
    this.setState({ allBrothers: AllDaruliftaBrothers });
    this.allUsers = AllDaruliftaBrothers;
  };
  handleChange = async (array, value) => {
    let { allBrothers } = this.state;
    if (value !== "") {
      this.setState({ allBrothers: this.allUsers }, async () => {
        let filteredNumber = 0;
        let arrVal = 0;
        let userVal = "";
        let filteredArr = [];
        let filteredArrPrint = [];
        let outOfIfta = ["امامت", "مؤذنی", "جامعۃ المدینہ میں تدریس", "خطابت"];
        let usersArr = Object.values(this.allUsers);
        await usersArr.map(async (info) => {
          let arrValue = ++arrVal;
          await info[array].map((data) => {
            if (data[outOfIfta[value]]) {
              let userInfo = data;
              userInfo.name = info["personalInfo"][1]["Name-نام"];
              userInfo.branch = info.branch;
              filteredArrPrint.push(userInfo);
              filteredArr.push(info);
              let updatedVal = ++filteredNumber;
            }
            console.log(filteredArrPrint, "filteredArrPrint");
          });
          if (arrVal === usersArr.length) {
            this.setState({
              filteredArr,
              filteredNumber: filteredNumber,
              filteredArrPrint,
              outOfIfta: true,
              tanzeem : false,
              outOfIftaVal: outOfIfta[value],
            });
          }
        });
      });
    } else {
      this.setState({ allBrothers: this.allUsers });
    }
  };
  handleChangeTanzeem = async (array, value) => {
    let { allBrothers } = this.state;
    if (value !== "") {
      this.setState({ allBrothers: this.allUsers }, async () => {
        let filteredNumber = 0;
        let arrVal = 0;
        let filteredArr = [];
        let filteredArrPrint = [];
        let usersArr = Object.values(this.allUsers);
        await usersArr.map(async (info) => {
          let arrValue = ++arrVal;
          if (info[array][0]["کس سطح پر؟"] === value) {
            let val = ++filteredNumber;
            let userInfo = info[array][0];
            userInfo.name = info["personalInfo"][1]["Name-نام"];
            userInfo.branch = info.branch;
            console.log(filteredNumber, "filter number");
            filteredArr.push(info);
            filteredArrPrint.push(userInfo);
          }
          console.log(filteredArrPrint, "filteredArrPrintfilteredArrPrint");
          if (arrVal === usersArr.length) {
            this.setState({
              filteredArr,
              filteredNumber: filteredNumber,
              filteredArrPrint,
              tanzeem: true,
              world: false,
              speech: false,
              outOfIfta: false,
            });
          }
        });
      });
    } else {
      this.setState({ allUsers: this.allUsers });
    }
  };
  handleChangeSpeech = async (array, value) => {
    let { allBrothers } = this.state;
    let outOfIfta = [
      "ہفتہ وار اجتماع میں بیان کرتے ہیں؟",
      "کیا بیانات کرتے ہیں؟",
    ];
    if (value !== "") {
      this.setState({ allBrothers: this.allUsers }, async () => {
        let filteredNumber = 0;
        let arrVal = 0;
        let filteredArr = [];
        let filteredArrPrint = [];
        let usersArr = Object.values(this.allUsers);
        await usersArr.map(async (info) => {
          let arrValue = ++arrVal;
          await info[array].map((data) => {
            if (data[outOfIfta[value]]) {
              let userInfo = data;
              userInfo.name = info["personalInfo"][1]["Name-نام"];
              userInfo.branch = info.branch;
              filteredArr.push(info);
              filteredArrPrint.push(userInfo);
            }
          });
          console.log(filteredArrPrint);
          if (arrVal === usersArr.length) {
            this.setState({
              filteredArr,
              filteredNumber: filteredNumber,
              filteredArrPrint,
              speech: true,
              tanzeem: false,
              world: false,
              outOfIfta: false,
            });
          }
        });
      });
    } else {
      this.setState({ allBrothers: this.allUsers });
    }
  };
  handleChangeWorld = async (array, value) => {
    let { allBrothers } = this.state;
    if (value !== "") {
      this.setState({ allBrothers: this.allUsers }, async () => {
        let filteredNumber = 0;
        let arrVal = 0;
        let filteredArr = [];
        let filteredArrPrint = [];
        let usersArr = this.allUsers;
        await usersArr.map(async (info) => {
          let arrValue = ++arrVal;
          await info[array].map((data, index) => {
            if (data.degree === value && data.haveDone) {
              let userInfo = info[array][index];
              userInfo.name = info["personalInfo"][1]["Name-نام"];
              userInfo.branch = info.branch;
              filteredArrPrint.push(userInfo);
              filteredArr.push(info);
              let updatedVal = ++filteredNumber;
              console.log(filteredArrPrint, "filteredArrPrint");
            }
          });
          if (arrVal === usersArr.length) {
            this.setState({
              filteredArr,
              filteredNumber: filteredNumber,
              filteredArrPrint,
              world: true,
              speech: false,
              tanzeem: false,
              outOfIfta: false,
            });
          }
        });
      });
    } else {
      this.setState({ allBrothers: this.allUsers });
    }
  };
  signInUser = async () => {
    let { password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword("Darulifta@gmail.com", password)
      .then(() => {
        this.setState({ showModal: false, userSignedIn: true }, () =>
          this.getUsers()
        );
      })
      .catch((e) => this.setState({ showModal: false, userSignedIn: false }));
  };
  render() {
    let {
      allUsers,
      showModal,
      userSignedIn,
      allBrothers,
      filteredArr,
      world,
      speech,
      tanzeem,
      outOfIftaVal,
      outOfIfta,
    } = this.state;
    return (
      <div>
        {allBrothers.length > 0 && (
          <div className={"selectorDiv"}>
            <div className={"selector"}>
              <Select
                defaultValue=""
                style={{ width: "80%" }}
                onChange={(value) =>
                  this.handleChangeTanzeem("tanzeemWork", value)
                }
              >
                <Option value="">تنظیمی ذمہ داری</Option>
                <Option value="ذیلی">ذیلی</Option>
                <Option value="حلقہ">حلقہ</Option>
                <Option value="علاقہ">علاقہ</Option>
                <Option value="ڈویژن">ڈویژن</Option>
                <Option value="کابینہ">کابینہ</Option>
                <Option value="زون">زون</Option>
              </Select>
            </div>
            <div className={"selector special"}>
              <Select
                defaultValue=""
                style={{ width: "90%" }}
                onChange={(value) => this.handleChange("outOfDarulifta", value)}
              >
                <Option value="">دار الافتاء کے علاوہ مصروفیات</Option>
                <Option value="0">امامت</Option>
                <Option value="1">مؤذنی</Option>
                <Option value="2">جامعۃ المدینہ میں تدریس</Option>
                <Option value="3">خطابت</Option>
              </Select>
            </div>
            <div className={"selector"}>
              <Select
                defaultValue=""
                style={{ width: "80%" }}
                onChange={(value) => this.handleChangeSpeech("speeches", value)}
              >
                <Option value="">بیاىا ت</Option>
                <Option value="0">ہفتہ وار اجتماع میں بیان</Option>
                <Option value="1">بیانات کرتے ہیں</Option>
              </Select>
            </div>
            <div className={"selector"}>
              <Select
                defaultValue=""
                style={{ width: "80%" }}
                onChange={this.handleChange}
              >
                <Option value="">سلسلہ</Option>
                <Option value="کیا آپ مدنی چینل پر سلسلے کرتےہیں؟">
                  {" "}
                  مدنی چینل
                </Option>
                <Option value="کیا آپ سوشل میڈیا پر سلسلے کرتےہیں؟">
                  {" "}
                  سوشل میڈیا
                </Option>
              </Select>
            </div>
            <div className={"selector"}>
              <Select
                defaultValue=""
                style={{ width: "80%" }}
                onChange={(value) =>
                  this.handleChangeWorld("worldlyEducation", value)
                }
              >
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
            <div className={"selector"}>
              <Select
                defaultValue=""
                style={{ width: "80%" }}
                onChange={(value) =>
                  this.handleChangeWorld("islamicEducationArr", value)
                }
              >
                <Option value="">اسلامی تعلیم</Option>
                <Option value="ناظرہ قرآن">ناظرہ قرآن</Option>
                <Option value="حفظِ قرآن">حفظِ قرآن</Option>
                <Option value="درسِ نظامی">درسِ نظامی</Option>
                <Option value="حسنِ قرأت">حسنِ قرأت</Option>
                <Option value="نعت شریف">نعت شریف</Option>
              </Select>
            </div>
          </div>
        )}

        {this.state.filteredArrPrint.length > 0 && (
          <div>
            <ReactToPrint
              trigger={() => (
                <Button
                  style={{
                    width: 120,
                  }}
                  type="primary"
                >
                  Print
                </Button>
              )}
              content={() => this.componentRef}
              pageStyle={{ padStart: 12, padEnd: 25 }}
              onBeforePrint={() => this.props.history.push("/")}
            />
            <PrintSearchTable
              world={world}
              speech={speech}
              tanzeem={tanzeem}
              outOfIfta={outOfIfta}
              outOfIftaVal={outOfIftaVal}
              data={this.state.filteredArrPrint}
              ref={(el) => (this.componentRef = el)}
            />
          </div>
        )}
        <div className={"containerCards"}>
          {filteredArr.map((data, index) => {
            let item = data["personalInfo"];
            return (
              <div
                className={"containerCards"}
                onClick={() => {
                  this.props.history.push({
                    pathname: "/detail",
                    state: {
                      data: data,
                      key: data.id,
                      branch: data.branch,
                    },
                  });
                }}
              >
                <div>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        height={200}
                        src={
                          item[9] && item[9]["image"]
                            ? item[9]["image"]
                            : require("./download (7).jpg")
                        }
                      />
                    }
                  >
                    <Meta
                      title={item[1]["Name-نام"]}
                      description={item[0]["موجودہ منصب"]}
                    />
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
