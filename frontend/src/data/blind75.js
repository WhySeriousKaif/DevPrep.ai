// The classic "Blind 75" curated DSA problem list, grouped by category.
// `id` is the real LeetCode slug — used both as the stable problem id for
// solved/revision tracking and to build the outbound LeetCode link.
export const BLIND75_CATEGORIES = [
  {
    name: "Array",
    problems: [
      { id: "two-sum", name: "Two Sum", difficulty: "Easy" },
      { id: "best-time-to-buy-and-sell-stock", name: "Best Time to Buy and Sell Stock", difficulty: "Medium" },
      { id: "contains-duplicate", name: "Contains Duplicate", difficulty: "Easy" },
      { id: "product-of-array-except-self", name: "Product of Array Except Self", difficulty: "Easy" },
      { id: "maximum-subarray", name: "Kadane's Algorithm, Maximum Subarray Sum", difficulty: "Medium" },
      { id: "maximum-product-subarray", name: "Maximum Product Subarray in an Array", difficulty: "Hard" },
      { id: "find-minimum-in-rotated-sorted-array", name: "Find Minimum in Rotated Sorted Array", difficulty: "Easy" },
      { id: "search-in-rotated-sorted-array", name: "Search in Rotated Sorted Array", difficulty: "Medium" },
      { id: "3sum", name: "3 Sum", difficulty: "Medium" },
      { id: "container-with-most-water", name: "Container With Most Water", difficulty: "Easy" },
    ],
  },
  {
    name: "Binary",
    problems: [
      { id: "sum-of-two-integers", name: "Sum of Two Integers", difficulty: "Easy" },
      { id: "number-of-1-bits", name: "Number of 1 Bits", difficulty: "Easy" },
      { id: "counting-bits", name: "Counting Bits", difficulty: "Easy" },
      { id: "missing-number", name: "Find Missing Number", difficulty: "Easy" },
      { id: "reverse-bits", name: "Reverse Bits", difficulty: "Easy" },
    ],
  },
  {
    name: "Dynamic Programming",
    problems: [
      { id: "climbing-stairs", name: "Climbing Stairs", difficulty: "Easy" },
      { id: "coin-change", name: "Coin Change", difficulty: "Medium" },
      { id: "longest-increasing-subsequence", name: "Longest Increasing Subsequence", difficulty: "Medium" },
      { id: "longest-common-subsequence", name: "Longest Common Subsequence", difficulty: "Medium" },
      { id: "word-break", name: "Word Break", difficulty: "Medium" },
      { id: "combination-sum-iv", name: "Combination Sum IV", difficulty: "Medium" },
      { id: "house-robber", name: "House Robber", difficulty: "Medium" },
      { id: "house-robber-ii", name: "House Robber II", difficulty: "Medium" },
      { id: "decode-ways", name: "Decode Ways", difficulty: "Medium" },
      { id: "unique-paths", name: "Unique Paths", difficulty: "Medium" },
      { id: "jump-game", name: "Jump Game", difficulty: "Medium" },
    ],
  },
  {
    name: "Graph",
    problems: [
      { id: "clone-graph", name: "Clone Graph", difficulty: "Medium" },
      { id: "course-schedule", name: "Course Schedule", difficulty: "Medium" },
      { id: "pacific-atlantic-water-flow", name: "Pacific Atlantic Water Flow", difficulty: "Medium" },
      { id: "number-of-islands", name: "Number of Islands", difficulty: "Medium" },
      { id: "longest-consecutive-sequence", name: "Longest Consecutive Sequence", difficulty: "Medium" },
      { id: "alien-dictionary", name: "Alien Dictionary", difficulty: "Hard" },
      { id: "graph-valid-tree", name: "Graph Valid Tree", difficulty: "Medium" },
      { id: "number-of-connected-components-in-an-undirected-graph", name: "Number of Connected Components in an Undirected Graph", difficulty: "Medium" },
    ],
  },
  {
    name: "Interval",
    problems: [
      { id: "insert-interval", name: "Insert Interval", difficulty: "Medium" },
      { id: "merge-intervals", name: "Merge Intervals", difficulty: "Medium" },
      { id: "non-overlapping-intervals", name: "Non-overlapping Intervals", difficulty: "Medium" },
      { id: "meeting-rooms", name: "Meeting Rooms", difficulty: "Easy" },
      { id: "meeting-rooms-ii", name: "Meeting Rooms II", difficulty: "Medium" },
      { id: "interval-list-intersections", name: "Interval List Intersections", difficulty: "Medium" },
    ],
  },
  {
    name: "Linked List",
    problems: [
      { id: "reverse-linked-list", name: "Reverse a Linked List", difficulty: "Easy" },
      { id: "linked-list-cycle", name: "Detect Cycle in a Linked List", difficulty: "Easy" },
      { id: "merge-two-sorted-lists", name: "Merge Two Sorted Lists", difficulty: "Easy" },
      { id: "merge-k-sorted-lists", name: "Merge K Sorted Lists", difficulty: "Hard" },
      { id: "remove-nth-node-from-end-of-list", name: "Remove Nth Node From End of List", difficulty: "Medium" },
      { id: "reorder-list", name: "Reorder List", difficulty: "Medium" },
    ],
  },
  {
    name: "Matrix",
    problems: [
      { id: "set-matrix-zeroes", name: "Set Matrix Zeroes", difficulty: "Medium" },
      { id: "spiral-matrix", name: "Spiral Matrix", difficulty: "Medium" },
      { id: "rotate-image", name: "Rotate Image", difficulty: "Medium" },
      { id: "word-search", name: "Word Search", difficulty: "Medium" },
    ],
  },
  {
    name: "String",
    problems: [
      { id: "longest-substring-without-repeating-characters", name: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
      { id: "longest-repeating-character-replacement", name: "Longest Repeating Character Replacement", difficulty: "Medium" },
      { id: "minimum-window-substring", name: "Minimum Window Substring", difficulty: "Hard" },
      { id: "valid-anagram", name: "Valid Anagram", difficulty: "Easy" },
      { id: "group-anagrams", name: "Group Anagrams", difficulty: "Medium" },
      { id: "valid-parentheses", name: "Valid Parentheses", difficulty: "Easy" },
      { id: "valid-palindrome", name: "Valid Palindrome", difficulty: "Easy" },
      { id: "longest-palindromic-substring", name: "Longest Palindromic Substring", difficulty: "Medium" },
      { id: "palindromic-substrings", name: "Palindromic Substrings", difficulty: "Medium" },
      { id: "encode-and-decode-strings", name: "Encode and Decode Strings", difficulty: "Medium" },
    ],
  },
  {
    name: "Tree",
    problems: [
      { id: "maximum-depth-of-binary-tree", name: "Maximum Depth of Binary Tree", difficulty: "Easy" },
      { id: "same-tree", name: "Same Tree", difficulty: "Easy" },
      { id: "invert-binary-tree", name: "Invert/Flip Binary Tree", difficulty: "Easy" },
      { id: "binary-tree-maximum-path-sum", name: "Binary Tree Maximum Path Sum", difficulty: "Hard" },
      { id: "binary-tree-level-order-traversal", name: "Binary Tree Level Order Traversal", difficulty: "Medium" },
      { id: "serialize-and-deserialize-binary-tree", name: "Serialize and Deserialize Binary Tree", difficulty: "Hard" },
      { id: "subtree-of-another-tree", name: "Subtree of Another Tree", difficulty: "Easy" },
      { id: "construct-binary-tree-from-preorder-and-inorder-traversal", name: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium" },
      { id: "validate-binary-search-tree", name: "Validate Binary Search Tree", difficulty: "Medium" },
      { id: "kth-smallest-element-in-a-bst", name: "Kth Smallest Element in a BST", difficulty: "Medium" },
      { id: "lowest-common-ancestor-of-a-binary-search-tree", name: "Lowest Common Ancestor of BST", difficulty: "Easy" },
      { id: "implement-trie-prefix-tree", name: "Implement Trie (Prefix Tree)", difficulty: "Medium" },
      { id: "design-add-and-search-words-data-structure", name: "Add and Search Word", difficulty: "Medium" },
    ],
  },
  {
    name: "Heap",
    problems: [
      { id: "find-median-from-data-stream", name: "Find Median from Data Stream", difficulty: "Hard" },
      { id: "top-k-frequent-elements", name: "Top K Frequent Elements", difficulty: "Medium" },
    ],
  },
];

export const BLIND75_ALL = BLIND75_CATEGORIES.flatMap((cat) =>
  cat.problems.map((p) => ({ ...p, category: cat.name }))
);

export const leetcodeUrl = (id) => `https://leetcode.com/problems/${id}/`;
export const youtubeSearchUrl = (name) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${name} leetcode solution`)}`;
