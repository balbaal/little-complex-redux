import React from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { fetchPosts, newPost, deletePost } from "../actions/postAction";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class C_ContentManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueNumber: 0,
      modalTitle: "Add Item",
      modal: false,
      title: "",
      description: "",
      image: ""
    };
  }

  componentWillMount() {
    if (localStorage.getItem("contents") == null) {
      this.props.fetchPosts();
      localStorage.setItem("contents", true);
    }
  }

  onChangeContent = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  onSubmitContent = ev => {
    ev.preventDefault();
    let data = {
      id: this.state.uniqueNumber === 0 ? 0 : this.state.uniqueNumber,
      title: this.state.title,
      description: this.state.description,
      image: this.state.image
    };

    this.props.newPost(this.props.contents, data);
  };

  onDeleteContent = id => {
    this.props.deletePost(this.props.contents, id);
  };

  toggle = uniqueNumber => {
    if (uniqueNumber > 0) {
      this.setState({
        uniqueNumber: uniqueNumber,
        modalTitle: "Edit Item"
      });

      let contentDetail = this.props.contents.filter(content => {
        return uniqueNumber === content.id;
      });

      let fox = "";
      fox = contentDetail[0].title;
      console.log(fox);

      this.setState({
        title: contentDetail[0].title,
        description: contentDetail[0].description,
        image: contentDetail[0].image
      });
    } else if (uniqueNumber === 0) {
      this.setState({
        uniqueNumber: uniqueNumber,
        modalTitle: "Add Item",
        title: "",
        description: "",
        image: ""
      });
    }
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    // clear contents when close browser
    window.onbeforeunload = function() {
      localStorage.removeItem("contents");
    };
    return (
      <div className="container">
        <Helmet>
          <title>Content Manage</title>
        </Helmet>
        <h1>
          Manage Content Page{" "}
          <Button
            style={{ fontWeight: "bold" }}
            color="primary"
            onClick={() => this.toggle(0)}
          >
            +
          </Button>
        </h1>
        <Table hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contents.map((content, index) => (
              <tr key={content.id}>
                <th scope="row">{index + 1}</th>
                <td>{content.title}</td>
                <td>{content.description}</td>
                <td>
                  <img
                    src={content.image}
                    alt={`${content.id}_${content.title}`}
                  />
                </td>
                <td>
                  <Button
                    onClick={() => this.onDeleteContent(content.id)}
                    size="sm"
                    color="danger"
                  >
                    Delete
                  </Button>
                  <Button
                    style={{
                      display: "block",
                      marginTop: "10px",
                      width: "100%"
                    }}
                    onClick={() => this.toggle(content.id)}
                    size="sm"
                    color="primary"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* MODAL
        ADD ITEM */}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <form onSubmit={this.onSubmitContent}>
            <ModalHeader toggle={this.toggle}>
              {this.state.modalTitle}
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  onChange={this.onChangeContent}
                  name="title"
                  defaultValue={this.state.title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  rows="5"
                  name="description"
                  onChange={this.onChangeContent}
                  defaultValue={this.state.description}
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image Url</Label>
                <Input
                  type="text"
                  name="image"
                  onChange={this.onChangeContent}
                  defaultValue={this.state.image}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" onClick={this.toggle} color="primary">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contents: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts, newPost, deletePost }
)(C_ContentManage);
