import React from "react";
import PostTemplate from "../post_template";
import "./same_ratio.css"
import {Image} from "react-bootstrap";

// eslint-disable-next-line @typescript-eslint/naming-convention
const FirstUpdatePost: React.FC = () => (
  <PostTemplate title={"Self Upgrade"}
                date={new Date(Date.UTC(2016, 2, 22))}>
    <p>
      В первый же день выхода игры я сразу же получил несколько замечаний на одну тему: испытание с
      математическими расчётами слишком сложное. Поэтому было решено увеличить отведённое на решение
      время с шести секунд до четырнадцати. С одной стороны, это противоречит концепции игры,
      которая должна напрягать игрока, выжимая из него все соки. С другой стороны, игра прежде всего
      должна приносить удовольствие, поэтому я решил пойти к вам навстречу.
    </p>
  </PostTemplate>
);

export default FirstUpdatePost;
