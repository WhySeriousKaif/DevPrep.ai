import axios from 'axios';

const PISTON_API = "https://emkc.org/api/v2/piston";

async function testPiston() {
    try {
        console.log("Fetching runtimes...");
        const response = await axios.get(`${PISTON_API}/runtimes`);
        console.log("Runtimes fetch status:", response.status);
        console.log("Available runtimes count:", response.data.length);

        // Filter for our languages
        const js = response.data.find(r => r.language === "javascript");
        const python = response.data.find(r => r.language === "python");
        const java = response.data.find(r => r.language === "java");

        console.log("JS Version:", js ? js.version : "Not found");
        console.log("Python Version:", python ? python.version : "Not found");
        console.log("Java Version:", java ? java.version : "Not found");

        if (js) {
            console.log("\nTesting execution with JS...");
            const execResponse = await axios.post(`${PISTON_API}/execute`, {
                language: js.language,
                version: js.version,
                files: [{ content: "console.log('Hello Piston')" }]
            });
            console.log("Execution Status:", execResponse.status);
            console.log("Execution Output:", execResponse.data.run.output);
        }

    } catch (error) {
        console.error("Error:", error.message);
        if (error.response) {
            console.error("Response Status:", error.response.status);
            console.error("Response Data:", error.response.data);
        }
    }
}

testPiston();
