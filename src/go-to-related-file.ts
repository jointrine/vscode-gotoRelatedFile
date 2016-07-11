import * as vscode from 'vscode';

export class GoToRelatedFile {
  /**
   *
   */
  constructor(
    private fileLocator: FileLocator = new FileLocator()
  ) {}

  execute() {
    // get file path
    let fileName = this.fileLocator.getCurrentFileName();

    // get directory
    let directory = this.fileLocator.getCurrentFolder();

    // get related files
    let relatedFiles = this.fileLocator.searchFiles(directory, this.getFilePattern(fileName));

    // if(relatedFiles.length === 1){
    //   // navigate to file
    // } else {
    //   // select file
    // }
    
    // Display a message box to the user
    vscode.window.showInformationMessage(fileName);
  }

  deactivate() {

  }

  private getFilePattern(fileName: string): string {
    return undefined;
  }
}

export class FileLocator {

  getCurrentPath(): string {
    return vscode.window.activeTextEditor.document.uri.fsPath;
  }

  getCurrentFolder(): string {
    return this.getCurrentPath().replace(/\/[^/]+\.\w+$/, "");
  }

  getCurrentFileName(): string {
    return vscode.window.activeTextEditor.document.fileName;
  }

  searchFiles(directory: string, fileName: string): string[] {
    return undefined;
  }

}