import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  let setOfPages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    setOfPages.push(i);
  }
  return (
    <div>
      <ul className="pagination-set">
        {setOfPages.map(item => (
          <li
            key={item.id}
            className={
              currentPage === item
                ? "pagination-list active "
                : "pagination-list"
            }
          >
            <a
              onClick={e => {
                e.preventDefault();
                return paginate(item);
              }}
              href="#"
              className="pages"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
