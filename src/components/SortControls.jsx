import React from "react";
import { SORT_ORDERS } from "../utils/constants";

function SortControls({ sort, onChange }) {
  return (
    <div className="sort-controls">
      <label>
        Sort by title:
        <select value={sort} onChange={(e) => onChange(e.target.value)}>
          <option value={SORT_ORDERS.ASC}>A → Z</option>
          <option value={SORT_ORDERS.DESC}>Z → A</option>
        </select>
      </label>
    </div>
  );
}

export default SortControls;
