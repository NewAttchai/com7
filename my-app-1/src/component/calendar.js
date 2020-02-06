import React, { Component } from "react";
import { Calendar, Badge } from "antd";
import { Button, DatePicker, Input, Row, Col } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import { Modal } from "react-bootstrap";

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." }
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." }
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." }
      ];
      break;
    default:
  }
  return listData || [];
}

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function onChange(date, dateString) {
  console.log(date, dateString);
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section> {num} </section> <span> Backlog number </span>
    </div>
  ) : null;
}

class Calendar1 extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div className="container">
        <Row type="flex" justify="center">
          <Col span={22}>
            <Calendar
              dateCellRender={dateCellRender}
              monthCellRender={monthCellRender}
            />
            <Input
              type="button"
              value="เพิ่มรายการ (pop up)"
              onClick={() => {
                this.handleModal();
              }}
            ></Input>
            <Modal show={this.state.show} onHide={() => this.handleModal()}>
              <Modal.Header closeButton>เพิ่มโน๊ต </Modal.Header>
              <Modal.Body>
                <Row>
                  <DatePicker
                    defaultValue={moment("", dateFormatList[0])}
                    format={dateFormatList}
                  />
                </Row>
                <Row style={{ marginTop: 4 }}>
                  <Input type="textarea" />
                </Row>
                <Button type="" style={{ marginLeft: 1 }}>
                  ยืนยัน
                </Button>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => {
                    this.handleModal();
                  }}
                >
                  Closes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Calendar1;
