import React, { useEffect, useState } from "react";
import { Form, Button, Modal, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { fetchTasks } from "../../actions";

import taskManagerApi from "../../apis/taskManagerApi";

const CreateArea = ({ fetchTasks }) => {
  const [task, setTask] = useState({
    description: "",
    completed: false,
  });

  useEffect(() => {}, []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => {
      return { ...prevTask, [name]: value };
    });
  };
  const onTaskSubmit = async (event) => {
    event.preventDefault();
    try {
      await taskManagerApi().post("/tasks", task);
    } catch (error) {}
    setShowModal(false);

    setTask({
      description: "",
      completed: false,
    });

    fetchTasks(1);
  };

  const [showModal, setShowModal] = useState(false);

  const onSelectCreateTask = () => {
    setShowModal(true);
  };

  const onHide = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={onSelectCreateTask} className="create-task-btn">
        Create Task
      </Button>

      <Modal
        show={showModal}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="task-modal"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={8} md={12} sm={12}>
              <Modal.Body>
                <Form className="task-create-form" onSubmit={onTaskSubmit}>
                  <div className="task-complete-option">
                    <Form.Label>Completed: </Form.Label>
                    <Form.Select
                      name="completed"
                      onChange={onChange}
                      value={task.completed}
                    >
                      <option value="false">No</option>
                      <option value="true">Yes</option>
                    </Form.Select>
                  </div>

                  <Form.Control
                    as="textarea"
                    className="description"
                    name="description"
                    onChange={onChange}
                    value={task.description}
                    placeholder="Add your task..."
                  />
                  <Button type="submit">Add Task</Button>
                </Form>
              </Modal.Body>
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>
  );
};

export default connect(null, {
  fetchTasks,
})(CreateArea);
