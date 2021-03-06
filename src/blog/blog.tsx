import {Container} from "react-bootstrap";
import ShortPost from "./short_post";
import React from "react";

// eslint-disable-next-line @typescript-eslint/naming-convention
const Blog: React.FC = () => (
  <div className="album py-5 bg-light">
    <Container>
      <p className="lead" style={{fontSize: "2.5rem"}}>Блог</p>
      <ShortPost title={"Первые дни Self Upgrade: как это было"}
                 src={"/first_days_of_self_upgrade"}
                 date={new Date(Date.UTC(2017, 2, 23))}>
        Самое первое, с чего стоит начинать разработку - это всем торжественно сообщить, что ты
        уже основательно взялся за создание. Даже если ещё не взялся.
      </ShortPost>
      <ShortPost title={"Self Upgrade исполнился год"}
                 src={"/self_upgrade_one_year"}
                 date={new Date(Date.UTC(2017, 2, 21))}>
        Ровно год назад, 21 марта 2016 свет увидела моя игра "Self Upgrade". Как самая
        качественная на данный момент игра, что я когда-либо создавал, она безусловно сыграла
        большую роль в моём развитии как инди-разработчика.
      </ShortPost>
      <ShortPost title={"Переделана мини-игра"}
                 src={"/minigame_update"}
                 date={new Date(Date.UTC(2017, 0, 21))}>
        Сегодня была переписана с нуля мини-игра с попаданием в мишень невидимым курсором. На
        самом деле, суть игры осталась той же, лишь с тем изменением, что пейзаж стал более
        красочным, а пистолет заменён на арбалет.
      </ShortPost>
      <ShortPost title={"Self Upgrade"}
                 src={"/first_update"}
                 date={new Date(Date.UTC(2016, 2, 22))}>
        В первый же день выхода игры я сразу же получил несколько замечаний на одну тему:
        испытание с математическими расчётами слишком сложное. Поэтому было решено увеличить
        отведённое на решение время с шести секунд до четырнадцати. С одной стороны, это
        противоречит концепции игры, которая должна напрягать игрока, выжимая из него все соки.
        С другой стороны, игра прежде всего должна приносить удовольствие, поэтому я решил пойти
        к вам навстречу.
      </ShortPost>
      <ShortPost title={"Встречайте новую игру!"}
                 src={"/new_game"}
                 date={new Date(Date.UTC(2016, 2, 21))}>
        Друзья, сегодняшний день – ещё одна страница в истории Borowood Studio. Именно сегодня я
        дописал последние строки кода игры и готов выложить на ваш суд её beta-версию.
        SelfUpgrade - новая браузерная flash-игра от Borowood Studio, которая одновременно
        позволит вам расслабиться и снять стресс, проявить креативность, прокачать свои
        способности и многое другое. Условно игру можно поделить на две смысловые части.
      </ShortPost>
    </Container>
  </div>
);

export default Blog;
