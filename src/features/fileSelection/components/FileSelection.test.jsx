import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FileSelection from "./FileSelection";
import { FileContext } from "../../../context/fileContextUtils";

const mockSetFileStats = vi.fn();
const mockSetSelectedLanguage = vi.fn();

function renderWithContext(selectedLanguage = "js") {
  return render(
    <FileContext.Provider
      value={{
        setFileStats: mockSetFileStats,
        selectedLanguage,
        setSelectedLanguage: mockSetSelectedLanguage,
      }}
    >
      <FileSelection />
    </FileContext.Provider>
  );
}

describe("FileSelection", () => {
  beforeEach(() => {
    mockSetFileStats.mockClear();
    mockSetSelectedLanguage.mockClear();
  });

  it("renders file and language inputs", () => {
    renderWithContext();
    expect(screen.getByLabelText(/select a file/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select language/i)).toBeInTheDocument();
  });

  it("calls setSelectedLanguage on language change", () => {
    renderWithContext();
    fireEvent.change(screen.getByLabelText(/select language/i), {
      target: { value: "python" },
    });
    expect(mockSetSelectedLanguage).toHaveBeenCalledWith("python");
  });

  it("calls setFileStats(null) if no file is selected", async () => {
    renderWithContext();
    fireEvent.change(screen.getByLabelText(/select a file/i), {
      target: { files: [] },
    });
    expect(mockSetFileStats).toHaveBeenCalledWith(null);
  });
});
