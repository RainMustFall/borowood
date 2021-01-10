import React from "react";
import PostTemplate from "../post_template";
import "./same_ratio.css"
import {Image} from "react-bootstrap";

// eslint-disable-next-line @typescript-eslint/naming-convention
const MiniGamePost: React.FC = () => (
  <PostTemplate title={"Переделана мини-игра"}
                date={new Date(Date.UTC(2017, 0, 21))}>
    <p>
      Сегодня была переписана с нуля мини-игра с попаданием в мишень невидимым курсором. На самом
      деле, суть игры осталась той же, лишь с тем изменением, что пейзаж стал более красочным, а
      пистолет заменён на арбалет.
    </p>
    <div style={{textAlign: "center"}}>
      <Image src={"img/minigame.jpeg"} width={"80%"}/>
    </div>
  </PostTemplate>
);

export default MiniGamePost;
