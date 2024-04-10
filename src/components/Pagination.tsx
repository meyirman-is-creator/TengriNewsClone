import React from "react";
interface paginationProps {
  totalPosts: any;
  postsPerPage: any;
  setCurrentPage: any;
  currentPage: any;
}
export default function Pagination(props: paginationProps) {
  console.log(props);
  let pages = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination-btns">
      {pages.map((number, index) => {
        return (
          <button
            key={index}
            onClick={() => props.setCurrentPage(number)}
            className={number==props.currentPage?'active':""}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
}
