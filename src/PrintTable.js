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

class PrintSearchTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let dataToPrint = this.props.data;
    let worldlyEducation = this.props.world;
    return (
      <div>
        {dataToPrint &&
          worldlyEducation(
            <table style={{ marginLeft: 25 }}>
              <tr>
                <td className={"pdfHeader"}>City شہر </td>
                <td className={"pdfHeader"}>Passing Year </td>
                <td className={"pdfHeader"}> ریگولر/پرائیوٹ</td>
                <td className={"pdfHeader"}>Degree سند </td>
                <td className={"pdfHeader"}>Institution ادارہ</td>
                <td className={"pdfHeader"}>Branch-برانچ </td>
                <td className={"pdfHeader"}>Name-نام </td>
                <td className={"pdfHeader"}></td>
              </tr>
              {dataToPrint.map((data, index) => {
                return (
                  <tr>
                    <td className={"pdfTd"}>{data.city} </td>
                    <td className={"pdfTd"}>{data.passingYear} </td>
                    <td className={"pdfTd"}>{data.status} </td>
                    <td className={"pdfTd"}>{data.degree} </td>
                    <td className={"pdfTd"}>{data.institution} </td>
                    <td className={"pdfTd"}>{data.branch} </td>
                    <td className={"pdfTd"}>{data.name} </td>
                    <td>{index + 1} </td>
                  </tr>
                );
              })}
            </table>
          )}
      </div>
    );
  }
}

export default PrintSearchTable;
