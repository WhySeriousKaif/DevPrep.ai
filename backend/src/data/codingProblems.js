// Curated coding-interview question bank for the live interview platform.
// Each problem's testCases are the EXACT stdout lines a correct submission
// produces for that language (ground-truth captured by actually running
// reference solutions locally, not hand-computed) — the executor compares
// the candidate's program's stdout, line by line, against these.

export const CODING_PROBLEMS = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    topic: "Array",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      notes: ["Each input has exactly one solution, and you may not use the same element twice."],
    },
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] == 9" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    ],
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i], target <= 10^9", "Only one valid answer exists"],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here

}

console.log(\`[\${twoSum([2,7,11,15], 9).join(",")}]\`);
console.log(\`[\${twoSum([3,2,4], 6).join(",")}]\`);
console.log(\`[\${twoSum([3,3], 6).join(",")}]\`);`,
      python: `def two_sum(nums, target):
    # Write your solution here
    pass

print(f"[{','.join(map(str, two_sum([2,7,11,15], 9) or []))}]")
print(f"[{','.join(map(str, two_sum([3,2,4], 6) or []))}]")
print(f"[{','.join(map(str, two_sum([3,3], 6) or []))}]")`,
      java: `import java.util.*;

class Main {
    static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[]{};
    }
    static String arrToStr(int[] a) {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < a.length; i++) { if (i > 0) sb.append(","); sb.append(a[i]); }
        return sb.append("]").toString();
    }
    public static void main(String[] args) {
        System.out.println(arrToStr(twoSum(new int[]{2,7,11,15}, 9)));
        System.out.println(arrToStr(twoSum(new int[]{3,2,4}, 6)));
        System.out.println(arrToStr(twoSum(new int[]{3,3}, 6)));
    }
}`,
    },
    testCases: {
      javascript: ["[0,1]", "[1,2]", "[0,1]"],
      python: ["[0,1]", "[1,2]", "[0,1]"],
      java: ["[0,1]", "[1,2]", "[0,1]"],
    },
  },

  {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    topic: "Hashing",
    description: { text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.", notes: [] },
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "cat"', output: "false" },
    ],
    constraints: ["1 <= s.length, t.length <= 5*10^4", "lowercase English letters only"],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here

}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));`,
      python: `def is_anagram(s, t):
    # Write your solution here
    pass

print(is_anagram("anagram", "nagaram"))
print(is_anagram("rat", "cat"))`,
      java: `class Main {
    static boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram"));
        System.out.println(isAnagram("rat", "cat"));
    }
}`,
    },
    testCases: {
      javascript: ["true", "false"],
      python: ["True", "False"],
      java: ["true", "false"],
    },
  },

  {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    topic: "Hashing",
    description: { text: "Given an array of strings strs, group the anagrams together (in any order). Print groups in first-appearance order, preserving each group's internal insertion order.", notes: [] },
    examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: "[[eat,tea,ate],[tan,nat],[bat]]" }],
    constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
  return [];
}

const ga = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(\`[\${ga.map(g => \`[\${g.join(",")}]\`).join(",")}]\`);`,
      python: `def group_anagrams(strs):
    # Write your solution here
    return []

ga = group_anagrams(["eat","tea","tan","ate","nat","bat"])
print(f"[{','.join('[' + ','.join(g) + ']' for g in ga)}]")`,
      java: `import java.util.*;

class Main {
    static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }
    public static void main(String[] args) {
        List<List<String>> ga = groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"});
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < ga.size(); i++) {
            if (i > 0) sb.append(",");
            sb.append("[").append(String.join(",", ga.get(i))).append("]");
        }
        System.out.println(sb.append("]"));
    }
}`,
    },
    testCases: {
      javascript: ["[[eat,tea,ate],[tan,nat],[bat]]"],
      python: ["[[eat,tea,ate],[tan,nat],[bat]]"],
      java: ["[[eat,tea,ate],[tan,nat],[bat]]"],
    },
  },

  {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topic: "Sliding Window",
    description: { text: "Given a string s, find the length of the longest substring without repeating characters.", notes: [] },
    examples: [
      { input: 's = "abcabcbb"', output: "3", explanation: '"abc"' },
      { input: 's = "bbbbb"', output: "1" },
      { input: 's = "pwwkew"', output: "3" },
    ],
    constraints: ["0 <= s.length <= 5*10^4"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  return 0;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));`,
      python: `def length_of_longest_substring(s):
    # Write your solution here
    return 0

print(length_of_longest_substring("abcabcbb"))
print(length_of_longest_substring("bbbbb"))
print(length_of_longest_substring("pwwkew"))`,
      java: `class Main {
    static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb"));
        System.out.println(lengthOfLongestSubstring("bbbbb"));
        System.out.println(lengthOfLongestSubstring("pwwkew"));
    }
}`,
    },
    testCases: {
      javascript: ["3", "1", "3"],
      python: ["3", "1", "3"],
      java: ["3", "1", "3"],
    },
  },

  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    topic: "Stacks & Queues",
    description: { text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid (every bracket is closed by the same type, in the correct order).", notes: [] },
    examples: [
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
      { input: 's = "([)]"', output: "false" },
    ],
    constraints: ["1 <= s.length <= 10^4"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  return false;
}

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));`,
      python: `def is_valid(s):
    # Write your solution here
    return False

print(is_valid("()[]{}"))
print(is_valid("(]"))
print(is_valid("([)]"))`,
      java: `import java.util.*;

class Main {
    static boolean isValid(String s) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(isValid("()[]{}"));
        System.out.println(isValid("(]"));
        System.out.println(isValid("([)]"));
    }
}`,
    },
    testCases: {
      javascript: ["true", "false", "false"],
      python: ["True", "False", "False"],
      java: ["true", "false", "false"],
    },
  },

  {
    id: "evaluate-reverse-polish-notation",
    title: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    topic: "Stacks & Queues",
    description: { text: "Evaluate the value of an arithmetic expression given in Reverse Polish Notation. Division between two integers truncates toward zero.", notes: [] },
    examples: [
      { input: 'tokens = ["2","1","+","3","*"]', output: "9" },
      { input: 'tokens = ["4","13","5","/","+"]', output: "6" },
    ],
    constraints: ["1 <= tokens.length <= 10^4"],
    starterCode: {
      javascript: `function evalRPN(tokens) {
  // Write your solution here
  return 0;
}

console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]));`,
      python: `def eval_rpn(tokens):
    # Write your solution here
    return 0

print(eval_rpn(["2","1","+","3","*"]))
print(eval_rpn(["4","13","5","/","+"]))`,
      java: `import java.util.*;

class Main {
    static int evalRPN(String[] tokens) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(evalRPN(new String[]{"2","1","+","3","*"}));
        System.out.println(evalRPN(new String[]{"4","13","5","/","+"}));
    }
}`,
    },
    testCases: {
      javascript: ["9", "6"],
      python: ["9", "6"],
      java: ["9", "6"],
    },
  },

  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    topic: "Linked List",
    description: { text: "Given the array-form of a singly linked list's values, return the values reversed. (Represented as an array here to keep the harness simple — treat the array as the list, head first.)", notes: [] },
    examples: [{ input: "list = [1,2,3,4,5]", output: "[5,4,3,2,1]" }],
    constraints: ["0 <= list.length <= 5000"],
    starterCode: {
      javascript: `function reverseList(arr) {
  // Write your solution here
  return [];
}

console.log(\`[\${reverseList([1,2,3,4,5]).join(",")}]\`);
console.log(\`[\${reverseList([]).join(",")}]\`);`,
      python: `def reverse_list(arr):
    # Write your solution here
    return []

print(f"[{','.join(map(str, reverse_list([1,2,3,4,5])))}]")
print(f"[{','.join(map(str, reverse_list([])))}]")`,
      java: `class Main {
    static int[] reverseList(int[] arr) {
        // Write your solution here
        return new int[]{};
    }
    static String arrToStr(int[] a) {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < a.length; i++) { if (i > 0) sb.append(","); sb.append(a[i]); }
        return sb.append("]").toString();
    }
    public static void main(String[] args) {
        System.out.println(arrToStr(reverseList(new int[]{1,2,3,4,5})));
        System.out.println(arrToStr(reverseList(new int[]{})));
    }
}`,
    },
    testCases: {
      javascript: ["[5,4,3,2,1]", "[]"],
      python: ["[5,4,3,2,1]", "[]"],
      java: ["[5,4,3,2,1]", "[]"],
    },
  },

  {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    topic: "Linked List",
    description: { text: "Merge two sorted arrays (representing linked lists) into one sorted array.", notes: [] },
    examples: [{ input: "a = [1,2,4], b = [1,3,4]", output: "[1,1,2,3,4,4]" }],
    constraints: ["0 <= a.length, b.length <= 50"],
    starterCode: {
      javascript: `function mergeTwoLists(a, b) {
  // Write your solution here
  return [];
}

console.log(\`[\${mergeTwoLists([1,2,4],[1,3,4]).join(",")}]\`);
console.log(\`[\${mergeTwoLists([],[]).join(",")}]\`);`,
      python: `def merge_two_lists(a, b):
    # Write your solution here
    return []

print(f"[{','.join(map(str, merge_two_lists([1,2,4],[1,3,4])))}]")
print(f"[{','.join(map(str, merge_two_lists([],[])))}]")`,
      java: `class Main {
    static int[] mergeTwoLists(int[] a, int[] b) {
        // Write your solution here
        return new int[]{};
    }
    static String arrToStr(int[] a) {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < a.length; i++) { if (i > 0) sb.append(","); sb.append(a[i]); }
        return sb.append("]").toString();
    }
    public static void main(String[] args) {
        System.out.println(arrToStr(mergeTwoLists(new int[]{1,2,4}, new int[]{1,3,4})));
        System.out.println(arrToStr(mergeTwoLists(new int[]{}, new int[]{})));
    }
}`,
    },
    testCases: {
      javascript: ["[1,1,2,3,4,4]", "[]"],
      python: ["[1,1,2,3,4,4]", "[]"],
      java: ["[1,1,2,3,4,4]", "[]"],
    },
  },

  {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    topic: "Tree",
    description: { text: "Given the root of a binary tree (level-order array, null for missing nodes), return its maximum depth.", notes: [] },
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "3" }],
    constraints: ["0 <= number of nodes <= 10^4"],
    starterCode: {
      javascript: `function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const nodes = arr.map(v => v === null ? null : { val: v, left: null, right: null });
  let childIndex = 1;
  for (let i = 0; i < nodes.length && childIndex < nodes.length; i++) {
    if (!nodes[i]) continue;
    if (childIndex < nodes.length) { nodes[i].left = nodes[childIndex]; childIndex++; }
    if (childIndex < nodes.length) { nodes[i].right = nodes[childIndex]; childIndex++; }
  }
  return nodes[0];
}

function maxDepth(root) {
  // Write your solution here
  return 0;
}

console.log(maxDepth(buildTree([3,9,20,null,null,15,7])));
console.log(maxDepth(buildTree([1,null,2])));`,
      python: `class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def build_tree(arr):
    if not arr or arr[0] is None:
        return None
    nodes = [Node(v) if v is not None else None for v in arr]
    child_index = 1
    for i in range(len(nodes)):
        if child_index >= len(nodes):
            break
        if not nodes[i]:
            continue
        if child_index < len(nodes):
            nodes[i].left = nodes[child_index]
            child_index += 1
        if child_index < len(nodes):
            nodes[i].right = nodes[child_index]
            child_index += 1
    return nodes[0]

def max_depth(root):
    # Write your solution here
    return 0

print(max_depth(build_tree([3,9,20,None,None,15,7])))
print(max_depth(build_tree([1,None,2])))`,
      java: `class Main {
    static class Node {
        int val; Node left, right;
        Node(int v) { val = v; }
    }
    static Node buildTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        Node[] nodes = new Node[arr.length];
        for (int i = 0; i < arr.length; i++) nodes[i] = (arr[i] == null) ? null : new Node(arr[i]);
        int childIndex = 1;
        for (int i = 0; i < nodes.length && childIndex < nodes.length; i++) {
            if (nodes[i] == null) continue;
            if (childIndex < nodes.length) { nodes[i].left = nodes[childIndex]; childIndex++; }
            if (childIndex < nodes.length) { nodes[i].right = nodes[childIndex]; childIndex++; }
        }
        return nodes[0];
    }
    static int maxDepth(Node root) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(maxDepth(buildTree(new Integer[]{3,9,20,null,null,15,7})));
        System.out.println(maxDepth(buildTree(new Integer[]{1,null,2})));
    }
}`,
    },
    testCases: {
      javascript: ["3", "2"],
      python: ["3", "2"],
      java: ["3", "2"],
    },
  },

  {
    id: "validate-binary-search-tree",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    topic: "Tree",
    description: { text: "Given the root of a binary tree (level-order array), determine if it is a valid binary search tree.", notes: [] },
    examples: [
      { input: "root = [2,1,3]", output: "true" },
      { input: "root = [5,1,4,null,null,3,6]", output: "false" },
    ],
    constraints: ["1 <= number of nodes <= 10^4"],
    starterCode: {
      javascript: `function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const nodes = arr.map(v => v === null ? null : { val: v, left: null, right: null });
  let childIndex = 1;
  for (let i = 0; i < nodes.length && childIndex < nodes.length; i++) {
    if (!nodes[i]) continue;
    if (childIndex < nodes.length) { nodes[i].left = nodes[childIndex]; childIndex++; }
    if (childIndex < nodes.length) { nodes[i].right = nodes[childIndex]; childIndex++; }
  }
  return nodes[0];
}

function isValidBST(root, lo = -Infinity, hi = Infinity) {
  // Write your solution here
  return false;
}

console.log(isValidBST(buildTree([2,1,3])));
console.log(isValidBST(buildTree([5,1,4,null,null,3,6])));`,
      python: `class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def build_tree(arr):
    if not arr or arr[0] is None:
        return None
    nodes = [Node(v) if v is not None else None for v in arr]
    child_index = 1
    for i in range(len(nodes)):
        if child_index >= len(nodes):
            break
        if not nodes[i]:
            continue
        if child_index < len(nodes):
            nodes[i].left = nodes[child_index]
            child_index += 1
        if child_index < len(nodes):
            nodes[i].right = nodes[child_index]
            child_index += 1
    return nodes[0]

def is_valid_bst(root, lo=float("-inf"), hi=float("inf")):
    # Write your solution here
    return False

print(is_valid_bst(build_tree([2,1,3])))
print(is_valid_bst(build_tree([5,1,4,None,None,3,6])))`,
      java: `class Main {
    static class Node {
        int val; Node left, right;
        Node(int v) { val = v; }
    }
    static Node buildTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;
        Node[] nodes = new Node[arr.length];
        for (int i = 0; i < arr.length; i++) nodes[i] = (arr[i] == null) ? null : new Node(arr[i]);
        int childIndex = 1;
        for (int i = 0; i < nodes.length && childIndex < nodes.length; i++) {
            if (nodes[i] == null) continue;
            if (childIndex < nodes.length) { nodes[i].left = nodes[childIndex]; childIndex++; }
            if (childIndex < nodes.length) { nodes[i].right = nodes[childIndex]; childIndex++; }
        }
        return nodes[0];
    }
    static boolean isValidBST(Node root, long lo, long hi) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(isValidBST(buildTree(new Integer[]{2,1,3}), Long.MIN_VALUE, Long.MAX_VALUE));
        System.out.println(isValidBST(buildTree(new Integer[]{5,1,4,null,null,3,6}), Long.MIN_VALUE, Long.MAX_VALUE));
    }
}`,
    },
    testCases: {
      javascript: ["true", "false"],
      python: ["True", "False"],
      java: ["true", "false"],
    },
  },

  {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    topic: "Graph",
    description: { text: "Given an m x n 2D grid of '1's (land) and '0's (water), return the number of islands (connected horizontally/vertically).", notes: [] },
    examples: [{ input: 'grid = ["11110","11010","11000","00000"]', output: "1" }],
    constraints: ["1 <= m, n <= 300"],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here
  return 0;
}

console.log(numIslands(["11110","11010","11000","00000"]));
console.log(numIslands(["11000","11000","00100","00011"]));`,
      python: `def num_islands(grid):
    # Write your solution here
    return 0

print(num_islands(["11110","11010","11000","00000"]))
print(num_islands(["11000","11000","00100","00011"]))`,
      java: `class Main {
    static int numIslands(String[] grid) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(numIslands(new String[]{"11110","11010","11000","00000"}));
        System.out.println(numIslands(new String[]{"11000","11000","00100","00011"}));
    }
}`,
    },
    testCases: {
      javascript: ["1", "3"],
      python: ["1", "3"],
      java: ["1", "3"],
    },
  },

  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    topic: "Dynamic Programming",
    description: { text: "You're climbing a staircase of n steps, taking 1 or 2 steps at a time. In how many distinct ways can you climb to the top?", notes: [] },
    examples: [
      { input: "n = 2", output: "2" },
      { input: "n = 3", output: "3" },
    ],
    constraints: ["1 <= n <= 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  return 0;
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));`,
      python: `def climb_stairs(n):
    # Write your solution here
    return 0

print(climb_stairs(2))
print(climb_stairs(3))
print(climb_stairs(5))`,
      java: `class Main {
    static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(climbStairs(2));
        System.out.println(climbStairs(3));
        System.out.println(climbStairs(5));
    }
}`,
    },
    testCases: {
      javascript: ["2", "3", "8"],
      python: ["2", "3", "8"],
      java: ["2", "3", "8"],
    },
  },

  {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    description: { text: "Given coin denominations and a target amount, return the fewest number of coins needed to make that amount, or -1 if impossible.", notes: [] },
    examples: [
      { input: "coins = [1,2,5], amount = 11", output: "3" },
      { input: "coins = [2], amount = 3", output: "-1" },
    ],
    constraints: ["1 <= coins.length <= 12", "0 <= amount <= 10^4"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
  return -1;
}

console.log(coinChange([1,2,5], 11));
console.log(coinChange([2], 3));`,
      python: `def coin_change(coins, amount):
    # Write your solution here
    return -1

print(coin_change([1,2,5], 11))
print(coin_change([2], 3))`,
      java: `class Main {
    static int coinChange(int[] coins, int amount) {
        // Write your solution here
        return -1;
    }
    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11));
        System.out.println(coinChange(new int[]{2}, 3));
    }
}`,
    },
    testCases: {
      javascript: ["3", "-1"],
      python: ["3", "-1"],
      java: ["3", "-1"],
    },
  },

  {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    topic: "Greedy",
    description: { text: "Given an array where nums[i] is your maximum jump length from position i, return true if you can reach the last index.", notes: [] },
    examples: [
      { input: "nums = [2,3,1,1,4]", output: "true" },
      { input: "nums = [3,2,1,0,4]", output: "false" },
    ],
    constraints: ["1 <= nums.length <= 10^4"],
    starterCode: {
      javascript: `function canJump(nums) {
  // Write your solution here
  return false;
}

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));`,
      python: `def can_jump(nums):
    # Write your solution here
    return False

print(can_jump([2,3,1,1,4]))
print(can_jump([3,2,1,0,4]))`,
      java: `class Main {
    static boolean canJump(int[] nums) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(canJump(new int[]{2,3,1,1,4}));
        System.out.println(canJump(new int[]{3,2,1,0,4}));
    }
}`,
    },
    testCases: {
      javascript: ["true", "false"],
      python: ["True", "False"],
      java: ["true", "false"],
    },
  },

  {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    topic: "Binary Search",
    description: { text: "Given a sorted array of unique integers and a target, return its index, or -1 if not found. Must run in O(log n).", notes: [] },
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: ["1 <= nums.length <= 10^4"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  return -1;
}

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));`,
      python: `def search(nums, target):
    # Write your solution here
    return -1

print(search([-1,0,3,5,9,12], 9))
print(search([-1,0,3,5,9,12], 2))`,
      java: `class Main {
    static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9));
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2));
    }
}`,
    },
    testCases: {
      javascript: ["4", "-1"],
      python: ["4", "-1"],
      java: ["4", "-1"],
    },
  },

  {
    id: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    topic: "Heap",
    description: { text: "Find the kth largest element in an unsorted array (kth largest in sorted order, not the kth distinct element).", notes: [] },
    examples: [
      { input: "nums = [3,2,1,5,6,4], k = 2", output: "5" },
      { input: "nums = [3,2,3,1,2,4,5,5,6], k = 4", output: "4" },
    ],
    constraints: ["1 <= k <= nums.length <= 10^4"],
    starterCode: {
      javascript: `function findKthLargest(nums, k) {
  // Write your solution here
  return 0;
}

console.log(findKthLargest([3,2,1,5,6,4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));`,
      python: `def find_kth_largest(nums, k):
    # Write your solution here
    return 0

print(find_kth_largest([3,2,1,5,6,4], 2))
print(find_kth_largest([3,2,3,1,2,4,5,5,6], 4))`,
      java: `class Main {
    static int findKthLargest(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{3,2,1,5,6,4}, 2));
        System.out.println(findKthLargest(new int[]{3,2,3,1,2,4,5,5,6}, 4));
    }
}`,
    },
    testCases: {
      javascript: ["5", "4"],
      python: ["5", "4"],
      java: ["5", "4"],
    },
  },

  {
    id: "permutations",
    title: "Permutations",
    difficulty: "Medium",
    topic: "Backtracking",
    description: { text: "Given an array of distinct integers, return all possible permutations, in the order produced by choosing the next element left-to-right at each step.", notes: [] },
    examples: [{ input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }],
    constraints: ["1 <= nums.length <= 6", "all integers distinct"],
    starterCode: {
      javascript: `function permute(nums) {
  // Write your solution here
  return [];
}

const p = permute([1,2,3]);
console.log(\`[\${p.map(x => \`[\${x.join(",")}]\`).join(",")}]\`);`,
      python: `def permute(nums):
    # Write your solution here
    return []

p = permute([1,2,3])
print(f"[{','.join('[' + ','.join(map(str, x)) + ']' for x in p)}]")`,
      java: `import java.util.*;

class Main {
    static List<List<Integer>> permute(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
    public static void main(String[] args) {
        List<List<Integer>> p = permute(new int[]{1,2,3});
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < p.size(); i++) {
            if (i > 0) sb.append(",");
            List<String> strs = new ArrayList<>();
            for (int v : p.get(i)) strs.add(String.valueOf(v));
            sb.append("[").append(String.join(",", strs)).append("]");
        }
        System.out.println(sb.append("]"));
    }
}`,
    },
    testCases: {
      javascript: ["[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"],
      python: ["[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"],
      java: ["[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"],
    },
  },

  {
    id: "fibonacci-number",
    title: "Fibonacci Number",
    difficulty: "Easy",
    topic: "Recursion",
    description: { text: "F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) for n > 1. Given n, calculate F(n).", notes: [] },
    examples: [
      { input: "n = 2", output: "1" },
      { input: "n = 3", output: "2" },
      { input: "n = 4", output: "3" },
    ],
    constraints: ["0 <= n <= 30"],
    starterCode: {
      javascript: `function fib(n) {
  // Write your solution here
  return 0;
}

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));`,
      python: `def fib(n):
    # Write your solution here
    return 0

print(fib(2))
print(fib(3))
print(fib(4))`,
      java: `class Main {
    static int fib(int n) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(fib(2));
        System.out.println(fib(3));
        System.out.println(fib(4));
    }
}`,
    },
    testCases: {
      javascript: ["1", "2", "3"],
      python: ["1", "2", "3"],
      java: ["1", "2", "3"],
    },
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    topic: "Array",
    description: { text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.", notes: [] },
    examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5" }],
    constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    starterCode: {
      javascript: `function maxProfit(prices) {\n  return 0;\n}\nconsole.log(maxProfit([7,1,5,3,6,4]));\nconsole.log(maxProfit([7,6,4,3,1]));`,
      python: `def max_profit(prices):\n    return 0\nprint(max_profit([7,1,5,3,6,4]))\nprint(max_profit([7,6,4,3,1]))`,
      java: `class Main {\n    static int maxProfit(int[] prices) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));\n        System.out.println(maxProfit(new int[]{7,6,4,3,1}));\n    }\n}`,
    },
    testCases: { javascript: ["5", "0"], python: ["5", "0"], java: ["5", "0"] },
  },
  {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    topic: "Array",
    description: { text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.", notes: [] },
    examples: [{ input: "nums = [1,2,3,1]", output: "true" }],
    constraints: ["1 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {\n  return false;\n}\nconsole.log(containsDuplicate([1,2,3,1]));\nconsole.log(containsDuplicate([1,2,3,4]));`,
      python: `def contains_duplicate(nums):\n    return False\nprint(contains_duplicate([1,2,3,1]))\nprint(contains_duplicate([1,2,3,4]))`,
      java: `class Main {\n    static boolean containsDuplicate(int[] nums) {\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(containsDuplicate(new int[]{1,2,3,1}));\n        System.out.println(containsDuplicate(new int[]{1,2,3,4}));\n    }\n}`,
    },
    testCases: { javascript: ["true", "false"], python: ["True", "False"], java: ["true", "false"] },
  },
  {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    topic: "Array",
    description: { text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.", notes: ["You must write an algorithm that runs in O(n) time and without using the division operation."] },
    examples: [{ input: "nums = [1,2,3,4]", output: "[24,12,8,6]" }],
    constraints: ["2 <= nums.length <= 10^5", "-30 <= nums[i] <= 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {\n  return [];\n}\nconsole.log(\`[\${productExceptSelf([1,2,3,4]).join(",")}]\`);\nconsole.log(\`[\${productExceptSelf([-1,1,0,-3,3]).join(",")}]\`);`,
      python: `def product_except_self(nums):\n    return []\nprint(f"[{','.join(map(str, product_except_self([1,2,3,4])))}]")\nprint(f"[{','.join(map(str, product_except_self([-1,1,0,-3,3])))}]")`,
      java: `class Main {\n    static int[] productExceptSelf(int[] nums) {\n        return new int[]{};\n    }\n    static String arrToStr(int[] a) {\n        StringBuilder sb = new StringBuilder("[");\n        for (int i = 0; i < a.length; i++) { if (i > 0) sb.append(","); sb.append(a[i]); }\n        return sb.append("]").toString();\n    }\n    public static void main(String[] args) {\n        System.out.println(arrToStr(productExceptSelf(new int[]{1,2,3,4})));\n        System.out.println(arrToStr(productExceptSelf(new int[]{-1,1,0,-3,3})));\n    }\n}`,
    },
    testCases: { javascript: ["[24,12,8,6]", "[0,0,9,0,0]"], python: ["[24,12,8,6]", "[0,0,9,0,0]"], java: ["[24,12,8,6]", "[0,0,9,0,0]"] },
  },
  {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    topic: "Array",
    description: { text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.", notes: [] },
    examples: [{ input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" }],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  return 0;\n}\nconsole.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));\nconsole.log(maxSubArray([1]));`,
      python: `def max_sub_array(nums):\n    return 0\nprint(max_sub_array([-2,1,-3,4,-1,2,1,-5,4]))\nprint(max_sub_array([1]))`,
      java: `class Main {\n    static int maxSubArray(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));\n        System.out.println(maxSubArray(new int[]{1}));\n    }\n}`,
    },
    testCases: { javascript: ["6", "1"], python: ["6", "1"], java: ["6", "1"] },
  },
  {
    id: "find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    topic: "Binary Search",
    description: { text: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become: [4,5,6,7,0,1,2] if it was rotated 4 times. Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.", notes: [] },
    examples: [{ input: "nums = [3,4,5,1,2]", output: "1" }],
    constraints: ["n == nums.length", "1 <= n <= 5000", "-5000 <= nums[i] <= 5000", "All the integers of nums are unique.", "nums is sorted and rotated between 1 and n times."],
    starterCode: {
      javascript: `function findMin(nums) {\n  return 0;\n}\nconsole.log(findMin([3,4,5,1,2]));\nconsole.log(findMin([4,5,6,7,0,1,2]));`,
      python: `def find_min(nums):\n    return 0\nprint(find_min([3,4,5,1,2]))\nprint(find_min([4,5,6,7,0,1,2]))`,
      java: `class Main {\n    static int findMin(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(findMin(new int[]{3,4,5,1,2}));\n        System.out.println(findMin(new int[]{4,5,6,7,0,1,2}));\n    }\n}`,
    },
    testCases: { javascript: ["1", "0"], python: ["1", "0"], java: ["1", "0"] },
  },
  {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    topic: "Binary Search",
    description: { text: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.", notes: [] },
    examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" }],
    constraints: ["1 <= nums.length <= 5000", "-10^4 <= nums[i] <= 10^4", "All values of nums are unique.", "nums is an ascending array that is possibly rotated.", "-10^4 <= target <= 10^4"],
    starterCode: {
      javascript: `function search(nums, target) {\n  return -1;\n}\nconsole.log(search([4,5,6,7,0,1,2], 0));\nconsole.log(search([4,5,6,7,0,1,2], 3));`,
      python: `def search(nums, target):\n    return -1\nprint(search([4,5,6,7,0,1,2], 0))\nprint(search([4,5,6,7,0,1,2], 3))`,
      java: `class Main {\n    static int search(int[] nums, int target) {\n        return -1;\n    }\n    public static void main(String[] args) {\n        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0));\n        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3));\n    }\n}`,
    },
    testCases: { javascript: ["4", "-1"], python: ["4", "-1"], java: ["4", "-1"] },
  },
  {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    topic: "Array",
    description: { text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.", notes: [] },
    examples: [{ input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }],
    constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    starterCode: {
      javascript: `function threeSum(nums) {\n  return [];\n}\nconsole.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4])));\nconsole.log(JSON.stringify(threeSum([0,1,1])));`,
      python: `import json\ndef three_sum(nums):\n    return []\nprint(json.dumps(three_sum([-1,0,1,2,-1,-4]).replace(" ", "")))\nprint(json.dumps(three_sum([0,1,1]).replace(" ", "")))`,
      java: `import java.util.*;\nclass Main {\n    static List<List<Integer>> threeSum(int[] nums) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}).toString().replaceAll(" ", ""));\n        System.out.println(threeSum(new int[]{0,1,1}).toString().replaceAll(" ", ""));\n    }\n}`,
    },
    testCases: { javascript: ["[[-1,-1,2],[-1,0,1]]", "[]"], python: ["[[-1,-1,2],[-1,0,1]]", "[]"], java: ["[[-1,-1,2],[-1,0,1]]", "[]"] },
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    topic: "Greedy",
    description: { text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.", notes: ["Notice that you may not slant the container."] },
    examples: [{ input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }],
    constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"],
    starterCode: {
      javascript: `function maxArea(height) {\n  return 0;\n}\nconsole.log(maxArea([1,8,6,2,5,4,8,3,7]));\nconsole.log(maxArea([1,1]));`,
      python: `def max_area(height):\n    return 0\nprint(max_area([1,8,6,2,5,4,8,3,7]))\nprint(max_area([1,1]))`,
      java: `class Main {\n    static int maxArea(int[] height) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7}));\n        System.out.println(maxArea(new int[]{1,1}));\n    }\n}`,
    },
    testCases: { javascript: ["49", "1"], python: ["49", "1"], java: ["49", "1"] },
  },
  {
    id: "missing-number",
    title: "Missing Number",
    difficulty: "Easy",
    topic: "Array",
    description: { text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.", notes: [] },
    examples: [{ input: "nums = [3,0,1]", output: "2" }],
    constraints: ["n == nums.length", "1 <= n <= 10^4", "0 <= nums[i] <= n", "All the numbers of nums are unique."],
    starterCode: {
      javascript: `function missingNumber(nums) {\n  return 0;\n}\nconsole.log(missingNumber([3,0,1]));\nconsole.log(missingNumber([0,1]));`,
      python: `def missing_number(nums):\n    return 0\nprint(missing_number([3,0,1]))\nprint(missing_number([0,1]))`,
      java: `class Main {\n    static int missingNumber(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(missingNumber(new int[]{3,0,1}));\n        System.out.println(missingNumber(new int[]{0,1}));\n    }\n}`,
    },
    testCases: { javascript: ["2", "2"], python: ["2", "2"], java: ["2", "2"] },
  },
  {
    id: "reverse-bits",
    title: "Reverse Bits",
    difficulty: "Easy",
    topic: "Bit Manipulation",
    description: { text: "Reverse bits of a given 32 bits unsigned integer.", notes: [] },
    examples: [{ input: "n = 00000010100101000001111010011100 (43261596)", output: "964176192 (00111001011110000010100101000000)" }],
    constraints: ["The input must be a binary string of length 32"],
    starterCode: {
      javascript: `function reverseBits(n) {\n  return 0;\n}\nconsole.log(reverseBits(43261596));\nconsole.log(reverseBits(-3));`,
      python: `def reverse_bits(n):\n    return 0\nprint(reverse_bits(43261596))\nprint(reverse_bits(4294967293))`,
      java: `class Main {\n    static int reverseBits(int n) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        System.out.println(reverseBits(43261596));\n        System.out.println(reverseBits(-3));\n    }\n}`,
    },
    testCases: { javascript: ["964176192", "3221225471"], python: ["964176192", "3221225471"], java: ["964176192", "-1073741825"] },
  }
];

export const LANGUAGE_JUDGE0_MAP = {
  javascript: { id: 63, name: "JavaScript (Node.js 12.14.0)" },
  python: { id: 71, name: "Python (3.8.1)" },
  java: { id: 62, name: "Java (OpenJDK 13.0.1)" },
};
