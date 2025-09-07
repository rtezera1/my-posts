import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setSort } from "./postsSlice";
import { sortPosts } from "./utils/sortPosts";
import SortControls from "./components/SortControls";
import DisplayItems from "./components/DisplayItems";
import { STATUS } from "./utils/constants";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { items, status, sort } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const sortedItems = useMemo(() => sortPosts(items, sort), [items, sort]);

  return (
    <div className="container">
      <h1>Posts</h1>

      <SortControls
        sort={sort}
        onChange={(value) => dispatch(setSort(value))}
      />

      {status === STATUS.LOADING && <p>Loading...</p>}
      {status === STATUS.FAILED && <p>Error fetching posts.</p>}

      {status === STATUS.SUCCEEDED && (
        <DisplayItems sortedItems={sortedItems} />
      )}
    </div>
  );
}

export default App;
