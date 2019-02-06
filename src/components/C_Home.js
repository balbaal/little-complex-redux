import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";

import { Link } from "react-router-dom";

class C_Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [
        {
          id: 3837,
          title: "Restful API /w NodeJS",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: `https://picsum.photos/200/150?image=${Math.floor(Math.random() * 50) + 1}`
        },
        {
          id: 343,
          title: "JWT Authentication",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: `https://picsum.photos/200/150?image=${Math.floor(Math.random() * 50) + 1}`
        },
        {
          id: 12,
          title: "Management State /w Redux",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: `https://picsum.photos/200/150?image=${Math.floor(Math.random() * 50) + 1}`
        },
        {
          id: 33,
          title: "Authorization, User Role",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: `https://picsum.photos/200/150?image=${Math.floor(Math.random() * 50) + 1}`
        }
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <Row>
          {this.state.contents.map(content => (
            <Col sm="4" style={{ marginBottom: "20px" }}>
              <Card key={content.id}>
                <CardImg
                  top
                  width="100%"
                  src={content.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle style={{ fontWeight: "bold" }}>
                    {content.title}
                  </CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Link to={`/content_detail/${content.id}`}>
                    <Button>read more</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default C_Home;
