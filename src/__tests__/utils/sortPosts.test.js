import { sortPosts } from "../../utils/sortPosts";
import { SORT_ORDERS } from "../../utils/constants";

const mockPosts = [
  { id: 1, title: "banana", body: "" },
  { id: 2, title: "apple", body: "" },
  { id: 3, title: "cherry", body: "" },
];

describe("sortPosts utility", () => {
  it("returns posts sorted ascending (A → Z)", () => {
    const sorted = sortPosts(mockPosts, SORT_ORDERS.ASC);
    expect(sorted.map((p) => p.title)).toEqual(["apple", "banana", "cherry"]);
  });

  it("returns posts sorted descending (Z → A)", () => {
    const sorted = sortPosts(mockPosts, SORT_ORDERS.DESC);
    expect(sorted.map((p) => p.title)).toEqual(["cherry", "banana", "apple"]);
  });

  it("returns empty array if input is not an array", () => {
    expect(sortPosts(null, "asc")).toEqual([]);
  });
});
