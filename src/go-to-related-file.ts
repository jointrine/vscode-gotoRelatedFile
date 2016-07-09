import * as vscode from 'vscode';

export class GoToRelatedFile {
  /**
   *
   */
  constructor() {
    
  }

  execute() {
    // Display a message box to the user
    vscode.window.showInformationMessage("Hello world");
  }

  deactivate() {

  }
}

export class CurrentFileParser {
  /**
   *
   */
  constructor() {
    vscode.Uri.name
  }
}