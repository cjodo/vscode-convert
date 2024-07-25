import * as vscode from 'vscode';

// a command that finds a unit in a line in a css file and converts it to a selected unit

type cssSizeUnit = 'px' | 'em' | 'rem' | 'vh' | 'vw' | 'vmin' | 'vmax' | 'cm' | 'mm' | 'in' | 'pt' | 'pc' | 'ch';
type cssColorUnit = 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla';

interface Unit {
	val: number | string;
	unit: cssSizeUnit | cssColorUnit;
}

export function convertNext(from: Unit, to:Unit) {
	// The code you place here will be executed every time your command is executed
	// Display a message box to the user
	let lines = vscode.window.activeTextEditor?.document.getText().split('\n');

	if (!lines) return

	for(let i = 0; i < lines.length; i++){

	}
}
