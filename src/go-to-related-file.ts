import * as vscode from 'vscode';

import * as fs from "fs";

export class GoToRelatedFile {
  /**
   *
   */
  constructor(
    private fileLocator: FileLocator = new FileLocator()
  ) {}

  execute() {
    // get file path
    let file = this.fileLocator.getCurrentFileName();

    // get directory
    let directory = this.fileLocator.getCurrentFolder();

    // get related files
    let relatedFiles = this.fileLocator.searchFiles(directory, file);

    if(relatedFiles.length === 1){
      this.fileLocator.openFile(directory, relatedFiles[0])
    } else {
      vscode.window.showQuickPick(relatedFiles).then(file => {
        this.fileLocator.openFile(directory, file);
      })
    }
    
    // Display a message box to the user
    //vscode.window.showInformationMessage(file.name);
  }

  deactivate() {

  }
}

export class FileLocator {

  getCurrentPath(): string {
    return vscode.window.activeTextEditor.document.uri.fsPath;
  }

  getCurrentFolder(): string {
    return this.getCurrentPath().replace(/\/[^/]+\.\w+$/, "");
  }

  getCurrentFileName(): FileInfo {
    let match = /\/([^/]+)\.(\w+)$/.exec(this.getCurrentPath());
    return { 
      name: match[1], 
      ext: match[2]
    };
  }

  searchFiles(directory: string, fileInfo: FileInfo): string[] {
    return fs.readdirSync(directory)
             .filter(file => file.startsWith(fileInfo.name) && !file.endsWith(`.${fileInfo.ext}`));
  }

  openFile(directory: string, file: string) {
    let filePath = `${directory}/${file}`;
    vscode.workspace.openTextDocument(filePath).then(document => {
      vscode.window.showTextDocument(document);
    });
  }

}

export interface FileInfo {
  name: string;
  ext: string;
}