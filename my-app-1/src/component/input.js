import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Radio, Button, Icon, Menu, message, Dropdown, Input } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 15 }
  }
};

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      แผนก A
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      แผนก B
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      แผนก C
    </Menu.Item>
    <Menu.Item key="4">
      <Icon type="user" />
      แผนก D
    </Menu.Item>
    <Menu.Item key="5">
      <Icon type="user" />
      แผนก E
    </Menu.Item>
  </Menu>
);

class INPUT1 extends Component {
  state = {
    value: 1
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="">
        <Form {...formItemLayout}>
          <h1> เรื่อง:(รอรับข้อมูลชื่อ)ตอบคำถาม </h1>
          <lable> อธิบาย:(รอรับข้อมูลอธิบายน่าจะเป็นลิงค์) </lable>
          <Form.Item label="" overlay={menu}>
            <lable> 1.แผนก </lable>
            <br></br>
            <Dropdown overlay={menu}>
              <Button>
                แผนก(เมื่อเลือกแล้วเปลี่ยนคำถามเลยและให้เป็นแผนกที่เลือก)
                <Icon type="down" />
              </Button>
            </Dropdown>
          </Form.Item>

          <Form.Item label="" hasFeedback>
            <lable> 2.คำถามแต่ละแผนก </lable>
            <br></br>
            <Radio.Group onChange={this.onChange} value={this.state.valu}>
              <Radio value={1}> A </Radio> <Radio value={2}> B </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="" hasFeedback>
            <lable> 2.คำถามแต่ละแผนก </lable>
            <br></br>
            <Input type="input"  />
          </Form.Item>
          
          <Form.Item style={{ marginRight: "" }}>
            <Button> บันทึก </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default INPUT1;
