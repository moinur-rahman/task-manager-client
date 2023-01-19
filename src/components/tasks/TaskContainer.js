import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";

import Task from "./Task";

import "../../css/TaskManager.css";

const TaskContainer = ({ tasks }) => {
  return (
    <Container className="task-container">
      <Row>
        {tasks.map((task, index) => {
          return (
            <Col key={index} lg={4} md={6} sm={12}>
              <Card className="task-card">
                <Card.Body>
                  <Task id={index} />
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ tasks: { tasks } }) => {
  return { tasks };
};

export default connect(mapStateToProps)(TaskContainer);
