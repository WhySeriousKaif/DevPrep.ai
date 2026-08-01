import { PDFParse } from "pdf-parse";

// Extracts raw text from a PDF buffer (in-memory, never touches disk).
export const extractPdfText = async (buffer) => {
  const parser = new PDFParse({ data: buffer });
  try {
    const result = await parser.getText();
    return result.text;
  } finally {
    await parser.destroy();
  }
};
