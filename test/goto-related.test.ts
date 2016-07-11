import * as vscode from "vscode";
import {FileLocator} from "../src/go-to-related-file";
import expect = require("expect.js");

describe("FileLocator", () => {
  let locator: FileLocator = undefined;
  let currentFile: string = "/path/to/file.ts";
  beforeEach(() => {
    locator = new FileLocator();

    locator.getCurrentPath = () => {
      return currentFile;
    };
  });

  it("parses the current folder", () => {
    expect(locator.getCurrentFolder()).to.equal("/path/to");
  });

  it("parses the current file name", () => {
    expect(locator.getCurrentFileName()).to.equal("file.ts");
  })
})