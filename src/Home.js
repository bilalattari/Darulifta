import React from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { getUsers } from "./firebase";
import { Select, Card, Modal, Button, Input } from "antd";
const { Option } = Select;
const { Meta } = Card;
const { Search } = Input;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
      allBrothers: [],
      filterdVal: 0,
      filteredArr: [],
      password: "",
      userSignedIn: false,
      showModal: false,
    };
    this.allUsers = [];
  }
  componentDidMount = async () => {
    if (firebase.auth().currentUser) {
      this.setState({ showModal: false, userSignedIn: true }, () =>
        this.getUsers()
      );
    } else {
      this.setState({ showModal: true, userSignedIn: false });
    }
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
      allBros.map((data, index) => {
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
        let filteredArr = [];
        let outOfIfta = ["امامت", "مؤذنی", "جامعۃ المدینہ میں تدریس", "خطابت"];
        let usersArr = Object.values(this.allUsers);
        await usersArr.map(async (info) => {
          let arrValue = ++arrVal;
          await info[array].map((data) => {
            if (data[outOfIfta[value]]) {
              filteredArr.push(info);
              let updatedVal = ++filteredNumber;
            }
          });
          console.log(arrVal, "arrVal");
          if (arrVal === usersArr.length) {
            this.setState({
              allBrothers: filteredArr,
              filteredNumber: filteredNumber,
            });
          }
        });
      });
    } else {
      this.setState({ allUsers: this.allUsers });
    }
  };
  handleChangeTanzeem = async (array, value) => {
    let { allBrothers } = this.state;
    if (value !== "") {
      this.setState({ allBrothers: this.allUsers }, async () => {
        let filteredNumber = 0;
        let arrVal = 0;
        let filteredArr = [];
        let usersArr = Object.values(this.allUsers);
        await usersArr.map(async (info) => {
          let arrValue = ++arrVal;
          console.log(value, "+++++++++++++++++++++++");
          if (info[array][0]["کس سطح پر؟"] === value) {
            let val = ++filteredNumber;
            console.log(filteredNumber, "filter number");
            filteredArr.push(info);
          }
          if (arrVal === usersArr.length) {
            this.setState({
              allUsers: filteredArr,
              filteredNumber: filteredNumber,
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
      this.setState({ allUsers: this.allUsers }, async () => {
        let filteredNumber = 0;
        let arrVal = 0;
        let filteredArr = [];
        let usersArr = Object.values(this.allUsers);
        await usersArr.map(async (info) => {
          let arrValue = ++arrVal;
          await info[array].map((data) => {
            if (data[outOfIfta[value]]) {
              filteredArr.push(info);
              let updatedVal = ++filteredNumber;
              console.log(filteredArr, filteredNumber, "filteredNumber");
            }
          });
          if (arrVal === usersArr.length) {
            this.setState({
              allUsers: filteredArr,
              filteredNumber: filteredNumber,
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
        let usersArr = this.allUsers;
        await usersArr.map(async (info) => {
          let arrValue = ++arrVal;
          await info[array].map((data, index) => {
            if (data.degree === value && data.haveDone) {
              filteredArr.push(info["worldlyEducation"][0]);
              let updatedVal = ++filteredNumber;
              console.log(filteredArr, updatedVal, "filteredNumber");
            }
          });
          if (arrVal === usersArr.length) {
            this.setState({
              allBrothers: filteredArr,
              filteredNumber: filteredNumber,
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
    let { allUsers, showModal, userSignedIn } = this.state;
    return (
      <div>
        <Modal
          title="Sign in to continue"
          visible={showModal}
          onOk={this.signInUser}
          onCancel={() => this.setState({ showModal: false })}
        >
          <Input
            placeholder="Basic usage"
            value={"Darulifta@gmail.com"}
            style={{ margin: 12 }}
          />
          <Input
            placeholder="Password"
            type={"password"}
            style={{ margin: 12 }}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </Modal>
        {userSignedIn ? (
          <div className="App">
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: 25,
              }}
            >
              <div style={{ width: "90%" }}>
                <Search
                  placeholder="نام کے ساتھ سرچ کریں"
                  enterButton="Search"
                  size="large"
                  style = {{textAlign : "end"}}
                  onSearch={(value) => console.log(value)}
                />
              </div>
            </div> */}
            <div className={"containerHome"}>
              {allUsers !== null &&
                Object.keys(allUsers).map((branchName, index) => {
                  let allBros = Object.values(allUsers[branchName]);
                  let allBrosKeys = Object.keys(allUsers[branchName]);
                  return (
                    <div>
                      <div className={"branchheader"}>
                        <span className={"branchTotal"}>{allBros.length}</span>
                        <span className={"branchName"}>{branchName}</span>
                      </div>
                      <div className={"containerCards"}>
                        {allBros.map((data, index) => {
                          let key = allBrosKeys[index];
                          let item = data["personalInfo"];
                          return (
                            <div className={"containerCards"}>
                              <div
                                onClick={() => {
                                  this.props.history.push({
                                    pathname: "/detail",
                                    state: {
                                      data: data,
                                      key: key,
                                      branch: branchName,
                                    },
                                  });
                                }}
                              >
                                <Card
                                  hoverable
                                  style={{ width: 240 }}
                                  cover={
                                    <img
                                      alt="example"
                                      height={200}
                                      src={
                                        item[9]["image"]
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
                })}
            </div>
          </div>
        ) : (
          <p>Please enter correct password to continue</p>
        )}
      </div>
    );
  }
}

export default Home;
