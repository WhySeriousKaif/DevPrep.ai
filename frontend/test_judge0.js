import axios from 'axios';

const JUDGE0_API = "https://ce.judge0.com";

async function testJudge0() {
    try {
        console.log("Testing execution on Judge0 Demo...");

        // Test JS (ID 63)
        const response = await axios.post(`${JUDGE0_API}/submissions?base64_encoded=false&wait=true`, {
            source_code: "console.log('Hello Judge0')",
            language_id: 63, // JavaScript (Node.js 12.14.0)
        });

        console.log("Status:", response.status);
        console.log("Output:", response.data.stdout);
        console.log("Error:", response.data.stderr);
        console.log("Compile Output:", response.data.compile_output);

    } catch (error) {
        console.error("Error:", error.message);
        if (error.response) {
            console.error("Response:", error.response.data);
        }
    }
}

testJudge0();
