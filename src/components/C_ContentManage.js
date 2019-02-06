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
  Input,
  FormText
} from "reactstrap";

class C_ContentManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Button size="sm" color="danger">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <Button size="sm" color="danger">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <Button size="sm" color="danger">
                  Delete
                </Button>
              </td>
            </tr>
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

export default C_ContentManage;
