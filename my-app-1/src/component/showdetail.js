import React, { Component } from "react";
import { Button, Input, Row, Col } from "antd";
import { Modal } from "react-bootstrap";

class ShowDetail extends Component {
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
      <div>
        <h1> อาจจะแสดงแค่ร้านที่ยังไม่ได้ set up</h1>
        <Row type="flex" justify="center">
          <Col span={18}>
            <Button style={{ backgroundColor: "" }} block>
              รายการที่ 1
            </Button>
            <Button style={{ backgroundColor: "" }} type="dashed" block>
              รายการที่ 2
            </Button>
            <Input
              type="button"
              value="เพิ่มรายการ (pop up)"
              onClick={() => {
                this.handleModal();
              }}
            ></Input>
            <Modal show={this.state.show} onHide={() => this.handleModal()}>
              <Modal.Header closeButton>รับค่าที่กกรอกมาเป็นชื่อ</Modal.Header>
              <Modal.Body></Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => {
                    this.handleModal();
                  }}
                >
                  Closes{" "}
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>

          
        </Row>
      </div>
    );
  }
}
export default ShowDetail;
