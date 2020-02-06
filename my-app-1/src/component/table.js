import React, { Component } from "react";
import { Table, Row, Col, Button, Input } from "antd";
import { Modal } from "react-bootstrap";
import InputForTable from "./popupInput/inputForTable";
import InputForQuestion from "./popupInput/inputForQuestion";

const columns = [
  {
    title: "แจ้งเรื่องร้านใหม่",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>, //show color blue
    width: 200
  },
  {
    title: "จำนวนคนที่ตอบ",
    dataIndex: "total",
    key: "total",
    width: 80
  },
  {
    title: "วันที่ Set up",
    dataIndex: "setup",
    key: "setup",
    ellipsis: true
  },
  {
    title: "Area Manager",
    dataIndex: "areaManager",
    key: "areaManager",
    ellipsis: true
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "areaManager",
    ellipsis: true
  }
];

//รับค่าจาก json
const data = [
  {
    key: "1",
    name: "ID1312: KKP-Lotus Korat 1",
    total: 32,
    setup: "1/01/63",
    areaManager: "ภูมิวัฒน์",
    status: "สีไฟแจ้ง",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "ID796: E-Quip-Central Westgate",
    total: 7,
    setup: "2/01/63",
    areaManager: "อริสรา",
    status: "สีไฟแจ้ง",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "ID794: BKK-Central Suratthani",
    total: 32,
    setup: "3/01/63",
    areaManager: "ยุทธพล",
    status: "สีไฟแจ้ง",
    tags: ["cool", "teacher"]
  }
];

class Table1 extends Component {
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
          <Col span={20}>
            <Table columns={columns} dataSource={data} />
 
            <Col md={12}> 
              <Input
                type="button"
                value="เพิ่มรายการ (pop up)"
                onClick={() => {
                  this.handleModal();
                }}
              />
              <Modal show={this.state.show} onHide={() => this.handleModal()}>
                <Modal.Header closeButton>
                  <h3>เพิ่มรายการ</h3>
                </Modal.Header>
                <Modal.Body>
                  <InputForTable />
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

            <Col md={12}>
              <Input
                type="button"
                value="ตั้งคำถาม (pop up)"
                onClick={() => {
                  this.handleModal();
                }}
              />
              <Modal show={this.state.show} onHide={() => this.handleModal()}>
                <Modal.Header closeButton>
                  <h3>ตั้งคำถาม</h3>
                </Modal.Header>
                <Modal.Body>
                  <InputForQuestion />
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
          </Col>
        </Row>
      </div>
    );
  }
}
export default Table1;
