import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  let setOfPages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    setOfPages.push(i);
  }
  return (
    <div>
      <ul className="pagination-set">
        {setOfPages.map(item => (
          <li key={item.id} className="pagination-list">
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
