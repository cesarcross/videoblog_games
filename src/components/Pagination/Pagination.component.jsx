import React from "react";
import { Link } from "react-router-dom";

import { PaginationContainer } from "./Pagination.style";

const Pagination = ({ videosPerPage, totalVideos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <Link key={number} onClick={() => paginate(number)} to="">
          {number}
        </Link>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
