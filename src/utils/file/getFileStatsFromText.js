import { LANGUAGES } from "../../constant";

/**
 * Calculates statistics about the lines in a given text based on the selected programming language.
 *
 * @param {string} text - The file content as a string.
 * @param {string} [selectedLanguage="js"] - The key representing the programming language in the LANGUAGES constant.
 * @returns {{ blank: number, comments: number, code: number }} An object containing the count of blank lines, comment lines, and code lines.
 */
const getFileStatsFromText = (text, selectedLanguage = "js") => {
  const lines = text.split(`\n`);
  let stats = {
    blank: 0,
    comments: 0,
    code: 0,
    isCommentBlockActive: 0,
  };
  const language = LANGUAGES[selectedLanguage];
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      stats.blank++;
    } else if (trimmed.startsWith(language.singleLineComment)) {
      stats.comments++;
    } else if (trimmed.startsWith(language.multilineComment.start)) {
      stats.comments++;
      stats.isCommentBlockActive = true;
    } else if (stats.isCommentBlockActive) {
      if (trimmed.startsWith(language.multilineComment.end)) {
        stats.isCommentBlockActive = false;
      }
      stats.comments++;
    } else {
      stats.code++;
    }
  });

  const { isCommentBlockActive: _, ...data } = stats;
  return data;
};

export default getFileStatsFromText;
