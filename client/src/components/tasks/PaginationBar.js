import React from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";

import { setCurrentPage } from "../../actions";

const PaginationBar = ({ setCurrentPage, totalPages, currentPage }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const onPressPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.target.name);
  };

  const onPressNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <Pagination className="task-pagination">
      <Pagination.First onClick={onPressPrevious} />
      {pages.map((value, index) => (
        <Pagination.Item key={index} onClick={handlePageClick} name={value}>
          {value}
        </Pagination.Item>
      ))}

      <Pagination.Last onClick={onPressNext} />
    </Pagination>
  );
};

const mapStateToProps = ({ totalPages, currentPage }) => {
  return { totalPages, currentPage };
};

export default connect(mapStateToProps, { setCurrentPage })(PaginationBar);
