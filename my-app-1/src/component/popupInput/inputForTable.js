import React, { Component } from "react";
import { Input, Row, Col, Form } from "antd";
import DatePicker from 'react-date-picker';
//https://codesandbox.io/s/1zvnkm69jq  //date picker
class InputForTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newShop: "",
      setUp: "",
      areaManager: "",
      date: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(type, e) {
    const value = e.target.value;
    switch (type) {
      case "newShop":
        this.setState({ newShop: value });
        break;
      case "setUp":
        this.setState({ setUp: value });
        break;
      case "areaManager":
        console.log(value);
        this.setState({ areaManager: value });
        break;
    }
  }
  handleClick() {
    var edit = {
      newShop: this.state.newShop,
      setUp: this.state.setUp,
      areaManager: this.state.areaManager
    };
    console.log(edit);
  }

  onChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <Form>
        
          <Row>
            <Col md={6}>
              <label>ร้านใหม่ :</label>
            </Col>
            <Col md={10}>
              <Input
                type="text"
                name="newShop"
                id="example-newShop"
                required
                onChange={e => this.handleChange("newShop", e)}
              />
            </Col>
          </Row>
          <br />

          <Row>
            <Col md={6}>
              <label>วันที่ Set up :</label>
            </Col>
            <Col md={10}>
              {/*เหลือทำ Datapicker ให้แสดง log*/}
              <DatePicker onChange={this.onChange} value={this.state.date} />
              {/*<Input
                type="text"
                name="setUp"
                id="example-setUp"
                required
                onChange={e => this.handleChange("setUp", e)}
              /> */}
            </Col>
          </Row>
          <br />

          <Row>
            <Col md={6}>
              <label>Area Manager :</label>
            </Col>
            <Col md={10}>
              <Input
                type="text"
                name="areaManager"
                id="example-areaManager"
                required
                onChange={e => this.handleChange("areaManager", e)}
              />
            </Col>
          </Row>
          <br />

          
        </Form>
      </div>
    );
  }
}
export default InputForTable;
