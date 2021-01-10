import React from "react";
import FlashTemplate from "../game_template";

// eslint-disable-next-line @typescript-eslint/naming-convention
const Astronomy: React.FC = () => {
  return (<FlashTemplate src={"flash/astronomy.swf"} title={"Тренажёр по карте звёздного неба"}/>);
}

export default Astronomy;
