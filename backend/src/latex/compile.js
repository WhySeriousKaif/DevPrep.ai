import { execFile } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { PDFDocument } from "pdf-lib";

const execFileAsync = promisify(execFile);

// Compiles a LaTeX source string into a PDF using Tectonic, and reports the
// resulting page count (used by the page-budget fit loop).
export async function compileLatex(texSource) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "resume-"));
  const texPath = path.join(dir, "main.tex");
  const pdfPath = path.join(dir, "main.pdf");

  try {
    await fs.writeFile(texPath, texSource, "utf8");
    await execFileAsync("tectonic", [texPath, "--outdir", dir], { timeout: 20000 });

    const pdfBuffer = await fs.readFile(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);

    return { pdfBuffer, pageCount: pdfDoc.getPageCount() };
  } catch (error) {
    const output = error.stderr || error.stdout;
    if (output) {
      throw new Error(`LaTeX compilation failed: ${String(output).slice(0, 2000)}`);
    }
    throw error;
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
}
