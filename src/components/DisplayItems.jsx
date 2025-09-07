import React from "react";

function DisplayItems({ sortedItems }) {
  return (
    <ul>
      {sortedItems?.slice(0, 10).map((post) => (
        <li key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default DisplayItems;
