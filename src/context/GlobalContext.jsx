import { useState } from "react";
import { FileContext } from "./fileContextUtils";

export const FileProvider = ({ children }) => {
  const [fileStats, setFileStats] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("js");

  return (
    <FileContext.Provider
      value={{ fileStats, setFileStats, selectedLanguage, setSelectedLanguage }}
    >
      {children}
    </FileContext.Provider>
  );
};
