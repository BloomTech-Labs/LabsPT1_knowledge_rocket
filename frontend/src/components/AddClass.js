import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody,
         ModalFooter, Button, Input } from 'reactstrap';
import "../css/CreateClass.css";

class AddClass extends Component {
    
    state = {
        modal: false,
        clsName: ""
    }
    
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value });
    }

    handleAddClass = (clsName) => {
        this.setState({clsName: ""});
        this.toggle();
        this.props.handleAddClass(clsName);
    }

    render() {
        // const { handleAddClass } = this.props;

        return (
            <div>
                <Button color="danger" onClick={this.toggle}>
                    <div className="add-class-btn-txt">Add Class</div>
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Add New Class</ModalHeader>
                <ModalBody>
                    <Input className="m-input" placeholder="Class Name" 
                        onChange={this.handleChange}
                        name="clsName"
                        value={this.state.clsName}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.handleAddClass(this.state.clsName)}>Add</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
          );
    }
}

export default AddClass;