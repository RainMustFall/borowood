import React, {PropsWithChildren} from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

interface GameDescriptionProps {
  title: string,
  src: string,
  img: string
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const GameDescription: React.FC<GameDescriptionProps> =
  (props: PropsWithChildren<GameDescriptionProps>) => {
    return (
      <>
        <Card>
          <Card.Img variant="top" src={props.img} width={"30%"}/>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.children}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button href={props.src}>Играть!</Button>
          </Card.Footer>
        </Card>
        <br/>
      </>
    )
  };

export default GameDescription;
