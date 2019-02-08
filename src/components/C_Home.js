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
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

class C_Home extends React.Component {
  

  componentWillMount() {
    if (localStorage.getItem("contents") == null) {
      this.props.fetchPosts();
      localStorage.setItem("contents", true);
    }

  }

  render() {
    // clear contents when close browser
    window.onbeforeunload = function (){
      localStorage.removeItem("contents")
    }
    return (
      <div className="container">
        <Row>
          {this.props.contents.map(content => (
            <Col key={content.id} sm="4" style={{ marginBottom: "20px" }}>
              <Card>
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

const mapStateToProps = state => ({
  contents: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(C_Home);
