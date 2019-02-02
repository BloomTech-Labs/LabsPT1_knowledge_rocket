import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu,
         DropdownItem } from 'reactstrap';
import "../css/CreateClass.css";

class RemoveStudent extends Component {
    state = {
        dropdownOpen: false
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        const { name, id, handleRemoveStudent } = this.props;

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                <div className="remove-student-name">{name}</div>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={ ()=>handleRemoveStudent(id) }>
                    Remove Student
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          );
    }
}

export default RemoveStudent;