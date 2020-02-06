import React, { Component } from "react";
import { Input, Row, Col, Form, Button } from "antd";
//https://codesandbox.io/s/1zvnkm69jq  //date picker
import { Cascader } from "antd";

const options = [
  {
    value: "Expantion",
    label: "Expantion"
  },
  {
    value: "Finance",
    label: "Finance"
  },
  {
    value: "ItFacilities",
    label: "IT Facilities"
  },
  {
    value: "Service",
    label: "Service"
  },
  {
    value: "OperationAdmin",
    label: "Operation_Admin"
  },
  {
    value: "GA",
    label: "GA_Stationeries & Supplies & Ga_Asset"
  },
  {
    value: "Marketing",
    label: "Marketing"
  },
  {
    value: "Stock",
    label: "Merchandise (Stock)"
  },
  {
    value: "Demo",
    label: "Merchandise (Demo)"
  }
];

function onChange(value) {
  console.log(value);
}

class InputForQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newShop: "",
      description: "",
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
      case "description":
        this.setState({ description: value });
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
      description: this.state.description,
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
              <label>ค้นหาร้าน :</label>
            </Col>
            <Col md={10}>
              <Input
                type="search"
                name="search"
                id="example-newShop"
                required
                placeholder="search"
                onChange={e => this.handleChange("newShop", e)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={6}>
              <label>อธิบาย :</label>
            </Col>
            <Col md={10}>
              <Input
                type="text"
                name="newShop"
                id="example-description"
                required
                placeholder="url google drive"
                onChange={e => this.handleChange("description", e)}
              />
            </Col>
          </Row>
          <br />

          <Row>
              {/*comment log แสดงแผนก */}
            <Col md={6}>
              <label>แผนก :</label>
            </Col>
            <Col md={10}>
              <Cascader
                options={options}
                onChange={onChange}
                placeholder="เลือกแผนก"
              />
            </Col>
          </Row>
          <br />

        <Row>
        <h5><b>คำถาม</b></h5>
        </Row>
          <Row>
            <Col md={6}>
              <label>ตั้งคำถาม</label>
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

          <Row>
            <Col>
              <Button
                color="primary"
                size="lg"
                block
                onClick={() => this.handleClick()}
              >
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default InputForQuestion;
