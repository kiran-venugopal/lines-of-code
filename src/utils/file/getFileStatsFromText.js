import { LANGUAGES } from "../../constant";

const getCommentBlockState = ({
  isCommentBlockActive,
  lineText,
  startSyntax,
  endSyntax,
}) => {
  const isCommentStart =
    !isCommentBlockActive && lineText.startsWith(startSyntax);

  const isCommentEnd =
    isCommentBlockActive &&
    (lineText.startsWith(endSyntax) || lineText.endsWith(endSyntax));

  return { isCommentStart, isCommentEnd };
};

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
    const { isCommentBlockActive } = stats;

    const { start, end } = language.multilineComment;

    const { isCommentEnd, isCommentStart } = getCommentBlockState({
      isCommentBlockActive,
      lineText: trimmed,
      startSyntax: start,
      endSyntax: end,
    });

    if (!trimmed) {
      stats.blank++;
    } else if (trimmed.startsWith(language.singleLineComment)) {
      stats.comments++;
    } else if (isCommentStart) {
      stats.comments++;
      stats.isCommentBlockActive = true;
    } else if (isCommentBlockActive) {
      if (isCommentEnd) {
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
