import React from "react";
import "../css/Classes.css";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import SidebarNav from "./SidebarNav.js";

const dummyClasses = [{ "class_name": "CSPT1", "students": 11, "participation": 75, "rockets_sent": 8 }, { "class_name": "CSPT2", "students": 11, "participation": 75, "rockets_sent": 8 }]
const Classes = props => {

    return <Container className="container">
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
                <h1>Classes</h1>
                {dummyClasses.map((unit) => (
                <div className='classRoom'>
                    <div className="name">
                      {unit.class_name}
                    </div>
                    <div className="students">
                      Students: {unit.students}
                    </div>
                    <div className="name">
                      Participation: {unit.participation}%
                    </div>
                    <div className="name">
                        Rockets Sent: {unit.rockets_sent}
                    </div>
                  </div>))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>;
}
   


export default Classes;
