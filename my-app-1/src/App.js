import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import "./App.css";
import Calendar1 from "./component/calendar.js";
import Table1 from "./component/table";
import { Layout, Row, Col } from "antd";
import ShowDetail from "./component/showdetail";
import Piechart from "./component/piechart";

const { Header } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Header className="App"> Com7 </Header>
        <div>
          <Row>
            <Col span={12}>
              <Piechart />
              <hr></hr>
            </Col>
            <Col span={12} style={{ marginTop: 7 }}>
              
              <Table1 />
              <hr></hr>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Calendar1 /> <hr></hr>
            </Col>
            <Col span={12}>
              <ShowDetail />
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <inputTotable />
              <hr></hr>
            </Col>
            <Col span={12}></Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default App;
