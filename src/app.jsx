import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  //returnの中でJSを利用するには波括弧を利用できる
  //１つ目がステートの変数名、2つめがステートの関数名
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickChange = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  //cssスタイリングするためのオブジェクトを定義(ここでもできる)
  // const contentLadyStyle = {
  // //   color: "purple",
  // //   fontsize: "18px"
  // // };

  return (
    <>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <p>{num}</p>
      <button onClick={onClickChange}>on/off</button>
      {faceShowFlag && <p>(^^)</p>}
    </>
  );
};

export default App;
