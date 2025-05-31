import { describe, it, expect } from "vitest";
import getFileStatsFromText from "../getFileStatsFromText";

describe("getFileStatsFromText", () => {
  it("counts blank, comment, and code lines for JavaScript", () => {
    const js = [
      "",
      "// single line comment",
      "const a = 1;",
      "/*",
      "multi-line",
      "comment",
      "*/",
      "console.log(a);",
      "",
    ].join("\n");
    const stats = getFileStatsFromText(js, "js");
    expect(stats).toEqual({ blank: 2, comments: 5, code: 2 });
  });

  it("counts blank, comment, and code lines for Python", () => {
    const py = [
      "",
      "# single line comment",
      "a = 1",
      '"""',
      "multi-line",
      "comment",
      '"""',
      "print(a)",
      "",
    ].join("\n");
    const stats = getFileStatsFromText(py, "python");
    expect(stats).toEqual({ blank: 2, comments: 5, code: 2 });
  });

  it("handles code inside and outside of comments", () => {
    const js = [
      "const a = 1;",
      "/* comment start",
      "still comment",
      "comment end */",
      "const b = 2;",
    ].join("\n");
    const stats = getFileStatsFromText(js, "js");
    expect(stats).toEqual({ blank: 0, comments: 3, code: 2 });
  });

  it("handles files with only blank lines", () => {
    const blank = "\n\n\n";
    const stats = getFileStatsFromText(blank, "js");
    expect(stats).toEqual({ blank: 4, comments: 0, code: 0 });
  });

  it("handles files with only code", () => {
    const code = "let x = 1;\nlet y = 2;";
    const stats = getFileStatsFromText(code, "js");
    expect(stats).toEqual({ blank: 0, comments: 0, code: 2 });
  });
});
