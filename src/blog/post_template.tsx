import React, {PropsWithChildren} from "react";
import {Card, Container} from "react-bootstrap";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface PostProps {
  title: string,
  date: Date,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const PostTemplate: React.FC<PostProps> = (props: PropsWithChildren<PostProps>) => {
  return (
    <div className="album py-5 bg-light">
      <Container>
        <p className="display-4">{props.title}</p>
        <p className="lead"
           style={{fontSize: "1.5rem"}}>Опубликовано {props.date.toLocaleDateString()}</p>
        <Card className={"shadow-sm"}>
          <Card.Body>
            <p style={{fontSize: "1.2rem"}}>{props.children}</p>
          </Card.Body>
        </Card>
        <br/>
      </Container>
    </div>
  )
};

export default PostTemplate;
