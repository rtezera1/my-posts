import { SORT_ORDERS } from "./constants.js";

export function sortPosts(posts, order = SORT_ORDERS.ASC) {
  if (!Array.isArray(posts)) {
    return [];
  }

  return [...posts].sort((a, b) => {
    if (order === SORT_ORDERS.ASC) {
      return a.title.localeCompare(b.title);
    }

    if (order === SORT_ORDERS.DESC) {
      return b.title.localeCompare(a.title);
    }

    return 0;
  });
}
