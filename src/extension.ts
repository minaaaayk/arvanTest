
import * as vscode from 'vscode';
import { ArvanPanel } from './ArvanPanel';

export async function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "arvanTest" is now active!');
	
	context.subscriptions.push(
		vscode.commands.registerCommand('arvanTest.helloWorld', () => {
			// vscode.window.showInformationMessage('this is test of arvan extention');
			ArvanPanel.createOrShow(context.extensionUri);
		}
	));

	context.subscriptions.push(
		vscode.commands.registerCommand('arvanTest.arvanQuestion',async () => {
			const answer = await vscode.window.showInformationMessage('how are you?', 'good', 'bad');
			console.log('answer: ', answer);
		}
	));
}

// this method is called when your extension is deactivated
export function deactivate() {}
