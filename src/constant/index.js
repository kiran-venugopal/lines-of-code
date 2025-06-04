export const LANGUAGES = {
  js: {
    singleLineComment: "//",
    multilineComment: {
      start: "/*",
      end: "*/",
    },
    stringStart: "`",
    stringEnd: "`",
    variableDec: ["let ", "const ", "var "],
  },
  python: {
    singleLineComment: "#",
    multilineComment: {
      start: `"""`,
      end: `"""`,
    },
  },
};
