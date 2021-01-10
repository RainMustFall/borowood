import React from "react";
import {Button, Card, CardDeck, Carousel, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import Blog from "./blog/blog";

interface GamePromoProps {
  img: string,
  src: string,
  title: string
}

const GamePromo: React.FC<GamePromoProps> = (props) => (
  <Card bg={"light"} className="text-center shadow-sm card-item" as={Link} to={props.src}
        style={{color: "black"}}>
    <Card.Img variant="top" src={props.img}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
    </Card.Body>
  </Card>
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const Cards: React.FC = () => (
  <CardDeck>
    <GamePromo img={"img/Sheva.jpeg"} src={"/gravity_shawarma"}
               title={"Всемирное тяготение и шаурма"}/>
    <GamePromo img={"img/Geo.jpeg"} src={"/geography"} title={"Тренажёр по географии"}/>
    <GamePromo img={"img/Astro.jpeg"} src={"/astronomy"} title={"Тренажёр по астрономии"}/>
  </CardDeck>
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const Home: React.FC = () => {
  return (
    <>
      <img width={"100%"} src="img/Cover.png"/>
      <div className="album py-5 bg-light">
        <Container>
          <p className="lead" style={{fontSize: "2.5rem"}}>Flash-приложения и игры</p>
          <br/>
          <Cards/>
          <p className="text-center">
            <br/>
            <Button variant="outline-dark" size="lg" href={"/games"}>Просмотреть все</Button>
          </p>
        </Container>
      </div>
      <div className="album py-5 bg-dark text-white">
        <Container>
          <p className="lead" style={{fontSize: "2.5rem"}}>О сайте</p>
          <br/>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
        </Container>
      </div>
      <Blog/>
    </>
  )
};

export default Home;
