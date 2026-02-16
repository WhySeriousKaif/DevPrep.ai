import axios from 'axios';

const CANDIDATES = [
    { name: 'Official Piston', url: 'https://emkc.org/api/v2/piston/runtimes' },
    { name: 'Judge0 Demo', url: 'https://ce.judge0.com/languages' },
    { name: 'Piston (Codes)', url: 'https://piston.codes/api/v2/runtimes' },
];

async function checkCandidates() {
    console.log("Checking code execution services...\n");

    for (const cand of CANDIDATES) {
        try {
            console.log(`Testing ${cand.name} (${cand.url})...`);
            const start = Date.now();
            const res = await axios.get(cand.url, { timeout: 5000 });
            console.log(`✅ ${cand.name}: Success (${Date.now() - start}ms) - Status: ${res.status}`);

            // Try to deduce if it's usable
            if (cand.name.includes("Judge0")) {
                console.log(`   Languages found: ${res.data.length}`);
            } else {
                console.log(`   Runtimes found: ${res.data.length}`);
            }

        } catch (error) {
            console.log(`❌ ${cand.name}: Failed - ${error.message}`);
            if (error.response) {
                console.log(`   Status: ${error.response.status}`);
            }
        }
        console.log("---");
    }
}

checkCandidates();
