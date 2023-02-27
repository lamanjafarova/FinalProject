import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const LoadingComp = () => {
  return (
    <div  
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "900px"
    }}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default LoadingComp;