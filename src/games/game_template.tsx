import React from "react";
import {Container} from "react-bootstrap";

interface FlashTemplateProps {
  src: string;
  title: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const FlashTemplate: React.FC<FlashTemplateProps> = (props) => {
  return (
    <Container>
      <p>&nbsp;</p>
      <p className="lead" style={{fontSize: "2.5rem"}}>{props.title}</p>
      <p>
        <div className={"imageContainer"}>
          <embed src={props.src} className={"embed_class"}/>
        </div>
      </p>
      <p>&nbsp;</p>
    </Container>
  )
};

export default FlashTemplate;
