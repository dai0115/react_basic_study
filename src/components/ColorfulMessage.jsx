import React from "react";

const ColorfulMessage = (props) => {
  //分割代入をすることで以降で毎回「props」と入力しなくて良くなる
  const { color, children } = props;
  const contentStyle = {
    //JSはキーと値が同じの場合はコロン以降を省略することができる
    color,
    fontSize: "30px"
  };
  return <h1 style={contentStyle}>{children}</h1>;
};

export default ColorfulMessage;
