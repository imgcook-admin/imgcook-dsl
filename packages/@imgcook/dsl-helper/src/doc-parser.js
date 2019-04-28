"use strict";

let {
	isArray,
  // concat,
  line,
  string,
  indentTab,
  setIndentTab, 
  countIndent
} = require('./doc-utils.js');

function docParse(fileString) {

	let result = [];

	let concatArray = fileString.split('\n');

	concatArray.map((v) => {
		
		let {
			indent, 
			pureStr,
			originStr,
		} = countIndent( v );

		if ( indent.tab == 0 && indent.space == 0 ) {
			result.push( line( `${pureStr}` ) );
		} else {
			result.push( line( `${pureStr}`, {
				indent: indent,
			}) );
		}

	});	

	// return concat( result );
	return result;

}

module.exports = docParse;