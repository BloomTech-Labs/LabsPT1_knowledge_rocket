import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu,
         DropdownItem } from 'reactstrap';
import "../css/CreateClass.css";

class SelectClass extends Component {
    state = {
        dropdownOpen: false,
        selectedClass: ""
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        const { classes, handleSelectClass, clsName } = this.props;
        console.log(clsName);

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                <div className="select-class-dd-txt">
                    { clsName === "" || clsName === undefined ? "" : clsName }
                </div>
                
              </DropdownToggle>
              <DropdownMenu>

              {classes.map((clss, id) => {
                const index = id;
                return (
                    <DropdownItem key={id} onClick={() => handleSelectClass(clss.class_name)}>
                        { clss.class_name }
                    </DropdownItem>
                )
                })}
              </DropdownMenu>
            </Dropdown>
          );
    }
}

export default SelectClass;