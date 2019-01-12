import React, { Component } from "react";
import "../css/Classes.css";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import SidebarNav from "./SidebarNav.js";

class Classes extends Component {
  render() {
    return (
        <Container className="container">
            <Row>
                <Col sm="md" lg="3">
                    <SidebarNav />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <div>
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <a href="/">Home</a>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem active>Settings</BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                           
                        </Col>
                    </Row>
                </Col>
                </Row>
        </Container>
    );
  }
}

export default Classes;
