import React, {PropsWithChildren} from "react";
import {Card, Container} from "react-bootstrap";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ShortPostProps {
  title: string,
  src: string,
  date: Date,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const ShortPost: React.FC<ShortPostProps> = (props: PropsWithChildren<ShortPostProps>) => {
  return (
    <>
      <Card className={"shadow-sm"}>
        <Card.Body>
          <p className="lead" style={{fontSize: "2rem"}}>{props.title}</p>
          <p style={{fontSize: "1.1rem"}}>{props.children}</p>
          <Card.Link href={props.src}>Читать далее...</Card.Link>
        </Card.Body>
        <Card.Footer style={{whiteSpace:"pre"}}>
          <FontAwesomeIcon color={"#535353"} icon={faCalendarAlt}/>{"   " + props.date.toLocaleDateString()}
        </Card.Footer>
      </Card>
      <br/>
    </>
  )
};

export default ShortPost;
