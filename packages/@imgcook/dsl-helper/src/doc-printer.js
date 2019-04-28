"use strict";


function _isString(str) {
	return typeof str === 'string';
}

function addTabs(value, count, postion) {
	if ( postion == 'after' ) {
		// value += "\t".repeat(count);
		value += " ".repeat(2 * count);
	} else {
		// value = "\t".repeat(count) + value;
		value = " ".repeat(2 * count) + value;
	}
  return value;
}

function addSpaces(value, count, postion) {
	if ( postion == 'after' ) {
		value += " ".repeat(count);
	} else {
		value = " ".repeat(count) + value;
	}
  return value;
}

// 缩进生成
function generateInd( string, indent ) {
	if ( indent && typeof indent == 'object' ) {
		if ( indent.space ) {
			string = addSpaces( string, indent.space );			
		}
		if ( indent.tab ) {
			string = addTabs( string, indent.tab );
		}		
	}

	return string;
}

// 文字生成
function generateString(stringJson) {
	
	if ( stringJson.type !== 'string' ) {
		throw new Error( 'generate code error: ' + JSON.stringify(stringJson) + ' type should be "string"' );
	}		

	let string = '';

	stringJson.parts && stringJson.parts.map((v, i) => {
		if ( _isString(v) ) {
			string += v;
		} else {
			string += generateString(v);
		}
	});
	
	string = generateInd( string, stringJson.indent );

	return string;

}	

// 单行生成
function generateLine(lineJson) {

	if ( lineJson.type !== 'line') {
		throw new Error( 'generate code error: ' + JSON.stringify(lineJson) + ' type should be "line"' );
	}

	let line = '';

	lineJson.parts && lineJson.parts.map((v, i) => {
		if ( _isString(v) ) {
			line += v;
		} else {
			line += generateString(v);
		}
	});

	line = generateInd( line, lineJson.indent );

	return line;

}

// parts => json
function generateCode(partsJson) {

	// if ( partsJson.type !== 'concat' ) {
	// 	throw new Error( 'generate code error: PARTS JSON type should be "concat"');
	// }

	let code = '';
	// partsJson.parts && partsJson.parts.map((v, i) => {
	partsJson && partsJson.map((v, i) => {
		code += ( generateLine( v ) + ( i === partsJson.length - 1 ? '' : '\n' ) );
	});

	return code;

}

module.exports = generateCode;