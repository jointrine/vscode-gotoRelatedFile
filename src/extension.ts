// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {
    ExtensionContext,
    commands,
    window
} from 'vscode';
import {settings} from "../config/settings";
import {GoToRelatedFile} from "./go-to-related-file";

let extension: GoToRelatedFile = undefined;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "navigate-to-related-file" is now active!');

    extension = new GoToRelatedFile();

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = commands.registerCommand(`${settings.rootCommand}.goToRelated`, () => {
        // The code you place here will be executed every time your command is executed

        extension.execute();
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
    extension.deactivate();
    extension = undefined;
}