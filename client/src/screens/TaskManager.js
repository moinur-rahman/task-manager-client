import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";

import Header from "../components/tasks/Header";
import CreateArea from "../components/tasks/CreateArea";
import Pagination from "../components/tasks/PaginationBar";
import TaskContainer from "../components/tasks/TaskContainer";

//reducers
import { fetchTasks } from "../actions";

import "../css/TaskManager.css";

const TaskManager = ({ loading, fetchTasks, currentPage }) => {
  useEffect(() => {
    fetchTasks(currentPage);
  }, [fetchTasks, currentPage]);

  return (
    <div className="task-body">
      <Helmet>
        <title>Task Manager</title>
      </Helmet>
      <Header />

      {!loading && <CreateArea />}
      {loading ? (
        <div className="loading-spinner-container">
          <Spinner
            className="loading-spinner"
            animation="border"
            variant="secondary"
          />

          <h1>Loading...</h1>
        </div>
      ) : (
        <TaskContainer />
      )}
      {!loading && <Pagination />}
    </div>
  );
};

const mapStateToProps = ({ loading, currentPage }) => {
  return { loading, currentPage };
};

export default connect(mapStateToProps, { fetchTasks })(TaskManager);
