import React, { useState, useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";

import { fetchTasks, setCurrentPage } from "../../actions";

import taskManagerApi from "../../apis/taskManagerApi";

const Task = ({
  id,
  task,
  fetchTasks,
  currentPage,
  setCurrentPage,
  taskLength,
}) => {
  const [editClick, setEditClick] = useState(false);
  const [editTask, setEditTask] = useState({
    description: task.description,
    completed: task.completed,
  });
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    setEditTask({
      description: task.description,
      completed: task.completed,
    });
  }, [task]);

  const handleDelete = async () => {
    try {
      await taskManagerApi().delete(`/tasks/${task._id}`);
    } catch (error) { }

    if (taskLength === 1) {
      if (currentPage === 1)
        fetchTasks(currentPage);
      else
        await setCurrentPage(currentPage - 1);
    } else {
      fetchTasks(currentPage);
    }
  };

  const handleEditButton = async () => {
    setEditClick(!editClick);
  };

  const handleEdit = (event) => {
    const { name, value } = event.target;

    setEditTask((prevTask) => {
      return { ...prevTask, [name]: value };
    });
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    setUpdating(true);
    try {
      await taskManagerApi().patch(`/tasks/${task._id}`, editTask);
      setUpdating(false);
    } catch (error) { }
    setEditClick(!editClick);

  };
  return (
    <Form onSubmit={handleEditSubmit}>
      <table className="task">
        {updating ? (
          <tbody>
            <tr>
              <td className="updating-spinner-container">
                <Spinner
                  className="updating-spinner"
                  animation="border"
                  variant="secondary"
                />

                <h5>Updating...</h5>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td className="task-complete-option">
                <Form.Label>
                  Completed:
                  {editClick ? null : (
                    <span> {editTask.completed ? "Yes" : "No"} </span>
                  )}
                </Form.Label>
                {editClick ? (
                  <Form.Select
                    name="completed"
                    aria-label="Default select example"
                    onChange={handleEdit}
                    value={editTask.completed}
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </Form.Select>
                ) : null}
              </td>
              <td>
                <button
                  className={editClick ? "task-close" : "task-edit"}
                  onClick={handleEditButton}
                  type="button"
                >
                  {editClick ? <CloseIcon /> : <EditIcon />}
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                {editClick ? (
                  <Form.Control
                    className="task-description"
                    name="description"
                    onChange={handleEdit}
                    value={editTask.description}
                    placeholder="Description"
                    as="textarea"
                  />
                ) : (
                  <p className="task-description">{editTask.description}</p>
                )}
              </td>
            </tr>
            {!editClick && (
              <tr>
                <td></td>
                <td>
                  <button
                    className="task-delete"
                    onClick={handleDelete}
                    type="button"
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            )}

            {editClick && (
              <tr>
                <td colSpan={2}>
                  <div>
                    <Button
                      className="task-edit-submit-button"
                      variant="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        )}
      </table>
    </Form>
  );
};

const mapStateToProps = ({ tasks: { tasks }, currentPage }, { id }) => {
  return { task: tasks[id], currentPage, taskLength: tasks.length };
};
// const mapStateToProps = ( state, { id }) => {
//   console.log(state);
//   return {task:state.tasks.tasks[id] };
// };

export default connect(mapStateToProps, {
  fetchTasks,
  setCurrentPage,
})(Task);
