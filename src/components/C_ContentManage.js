import React from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { fetchPosts } from "../actions/postAction";
import { connect } from "react-redux";

class C_ContentManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    console.log(this.props.contents);
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
                <td><img src={content.image} alt="image" /></td>
                <td>
                  <Button size="sm" color="danger">
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
          <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" rows="5" name="description" />
              </FormGroup>
              <FormGroup>
                <Label for="imageUrl">Image Url</Label>
                <Input type="text" name="imageUrl" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Submit
            </Button>
          </ModalFooter>
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
  { fetchPosts }
)(C_ContentManage);
