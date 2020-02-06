import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import "./App.css";
import { Cascader } from "antd";


const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      
    }
  ];

function onChange(value) {
    console.log(value);
  }

class inputForDetail extends Component {
  render() {
    return (
      <div>
        <Cascader
          options={options}
          onChange={onChange}
          placeholder="Please select"
        />
      </div>
    );
  }
}
export default inputForDetail;
