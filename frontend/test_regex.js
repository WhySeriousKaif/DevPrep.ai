const code1 = `class Solution {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}`;

const code2 = `public class Solution {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}`;

const code3 = `class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}`;

function fixCode(c) {
    if (c.includes("class")) {
        return c.replace(/(public\s+)?class\s+(\w+)/, "public class Main");
    }
    return c;
}

console.log("--- Test 1 (class Solution) ---");
console.log(fixCode(code1));

console.log("\n--- Test 2 (public class Solution) ---");
console.log(fixCode(code2));

console.log("\n--- Test 3 (class Main) ---");
console.log(fixCode(code3));
