import { createContext, useContext } from "react";

export const FileContext = createContext();
export const useFileContext = () => useContext(FileContext);
