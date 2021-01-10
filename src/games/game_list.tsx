import {CardColumns, CardDeck, Col, Container, Row} from "react-bootstrap";
import React from "react";
import GameDescription from "./game_description";

// eslint-disable-next-line @typescript-eslint/naming-convention
const GameList: React.FC = () => (
  <div className="album py-5 bg-light">
    <Container>
      <p className="lead" style={{fontSize: "2.5rem"}}>Flash-приложения и игры</p>
      <Row>
        <Col>
          <CardDeck>
            <GameDescription title={"Self Upgrade"}
                             src={"/self_upgrade"}
                             img={"img/self-upgrade.jpeg"}>
              Self Upgrade - браузерная flash-игра от BorowoodStudio, которая одновременно позволит
              вам
              расслабиться и снять стресс, проявить креативность, прокачать свои способности и
              многое
              другое.
            </GameDescription>
            <GameDescription title={"Всемирное тяготение и шаурма"}
                             src={"/gravity_shawarma"}
                             img={"img/Sheva.jpeg"}>
              «Всемирное тяготение и шаурма» - это совершенно новая космическая игра, где тебе
              предстоит
              бороздить просторы Вселенной в поисках шаурмы - альтернативного топлива и валюты
              будущего!
              Каждая планета в игре имеет силу притяжения, воздействующую на траекторию твоего
              полёта...
            </GameDescription>
            <GameDescription title={"Твой виртуальный заяц"}
                             src={"/your_virtual_bunny"}
                             img={"img/bunny.png"}>
              Как только ты установишь игру, ты станешь хозяином своего виртуального зайца. Тебе
              надо
              будет ухаживать за ним, кормить и одевать, менять имидж и играть в разные мини-игры.
            </GameDescription>
          </CardDeck>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col xs={8}>
          <CardDeck>
            <GameDescription title={"Тренажёр по астрономии"}
                             src={"/astronomy"}
                             img={"img/Astro.jpeg"}>
              Новая программа, созданная для быстрого изучения карты звёздного неба, после недели
              разработки доступна для скачивания по ссылке ниже. Принцип работы немногим отличается
              от
              тренажёра по географии: необходимо нажимать на карте те созвездия, которые указаны на
              табло.
            </GameDescription>
            <GameDescription title={"Программа для эффективного изучения географии Беларуси"}
                             src={"/geography"}
                             img={"img/Geo.jpeg"}>
              Новый проект, представляющий собой тренажёр, позволяющий полностью выучить
              географическую
              карту Беларуси без особого труда. Первоначально он был нацелен на студентов Лицея БГУ,
              но
              готовиться по ней, естественно, может любой желающий.
            </GameDescription>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  </div>
);

export default GameList;
