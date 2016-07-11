import * as vscode from "vscode";
import {FileLocator} from "../src/go-to-related-file";
import expect = require("expect.js");

describe("FileLocator", () => {
  let locator: FileLocator = undefined;
  beforeEach(() => {
    locator = new FileLocator();

    locator.getCurrentPath = () => {
      return "/path/to/file.ts";
    }
  });

  it("parses the current folder", () => {
    expect(locator.getCurrentFolder()).to.equal("/path/to");
  });
})