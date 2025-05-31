/* eslint-env vitest */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

import StatsView from "./StatsView";
import { FileContext } from "../../../context/fileContextUtils";

describe("StatsView", () => {
  it("shows prompt when no fileStats", () => {
    render(
      <FileContext.Provider value={{ fileStats: null }}>
        <StatsView />
      </FileContext.Provider>
    );
    expect(screen.getByText(/select a file to view/i)).toBeInTheDocument();
  });

  it("shows stats when fileStats is present", () => {
    const fileStats = { code: 10, comments: 2, blank: 3 };
    render(
      <FileContext.Provider value={{ fileStats }}>
        <StatsView />
      </FileContext.Provider>
    );
    expect(screen.getByText("Code:")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Comments:")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("Blank:")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
