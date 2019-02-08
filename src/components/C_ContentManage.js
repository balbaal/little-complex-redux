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

class C_ContentManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      description: "",
      imageUrl: ""
    };
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  onChangeContent = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  onSubmitContent = ev => {
    ev.preventDefault();
    let data = {
      id: Math.floor(Math.random() * 50) + 1,
      title: this.state.title,
      description: this.state.description,
      imageUrl: this.state.imageUrl
    };

    this.props.newPost(data);
  };

  onDeleteContent = id => {
    this.props.deletePost(this.props.contents, id);
  };

  componentWillReceiveProps(newProps) {
    this.props.contents.unshift(newProps.newContent);
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>
          Manage Content Page{" "}
          <Button
            style={{ fontWeight: "bold" }}
            color="primary"
            onClick={this.toggle}
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
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* MODAL
        ADD ITEM */}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <form onSubmit={this.onSubmitContent}>
            <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  onChange={this.onChangeContent}
                  name="title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  rows="5"
                  name="description"
                  onChange={this.onChangeContent}
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageUrl">Image Url</Label>
                <Input
                  type="text"
                  name="imageUrl"
                  onChange={this.onChangeContent}
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
  contents: state.posts.items,
  newContent: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts, newPost, deletePost }
)(C_ContentManage);
