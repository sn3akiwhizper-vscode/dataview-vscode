
//import vscode elements
import * as vscode from 'vscode';
// import { workspace, ExtensionContext, window, commands } from 'vscode';

//import external lib elements
import { getAPI } from "obsidian-dataview";

//import core elements
import { Logger } from './core/utils/log';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	/////////////////////////////////////////////////////////////////////////
	// INITIAL SETUP
	/////////////////////////////////////////////////////////////////////////
	Logger.info('Starting vscode-dataview');

	const ODV_api = getAPI(); //get obsidian-dataview api object

	/////////////////////////////////////////////////////////////////////////
	// DEFINING COMMANDS
	/////////////////////////////////////////////////////////////////////////

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-dataview.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from vscode-dataview!');
	});

	let updateIndexCommand = vscode.commands.registerCommand('vscode-dataview.updateIndex', () => {
		vscode.window.showInformationMessage('testing update index command');
	});

	let runQueryCommand = vscode.commands.registerCommand('vscode-dataview.runQuery', () => {
		vscode.window.showInformationMessage('testing run query command');
	});

	/////////////////////////////////////////////////////////////////////////
	// REGISTER COMMANDS
	/////////////////////////////////////////////////////////////////////////
	context.subscriptions.push(disposable);
	context.subscriptions.push(updateIndexCommand);
	context.subscriptions.push(runQueryCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
