var assert = require('assert');
var fs = require('fs');
var path = require('path');

// var docParse = require('../raxAdvanceDSL/docBuilder/doc-parse.js');
// var docPrinter = require('../raxAdvanceDSL/docBuilder/doc-printer.js');
// var docUtils = require('../raxAdvanceDSL/docBuilder/doc-utils.js');

// var dslHelper = require('../index');
var dslHelper = require('../dist/index');
var docParse = dslHelper.parser;
var docPrinter = dslHelper.printer;
var docUtils = dslHelper.utils;

var webProcessor = dslHelper.webProcessor;
var weexProcessor = dslHelper.weexProcessor;
var processLayoutData = dslHelper.processLayoutData;
var Process = dslHelper.Process;
var clearInheritedAttr = dslHelper.clearInheritedAttr;
var unifyClassName = dslHelper.unifyClassName;

var syntactic = dslHelper.syntactic;

describe( 'doc-parse' , function() {

	let docParseOriginJson = require( path.join( __dirname, './testFile/docParse.origin.json'  ) );
	let wirteFilePath = path.join( __dirname, './testFile/docParse.generate.js' );

	describe( '#parse()' , function() {
	
		it( 'should parse document correctly.' , function() {

			let ret = docPrinter( docParseOriginJson );

			fs.writeFileSync( wirteFilePath, ret , {encoding: 'utf8', flag: 'w'});

			let testString = fs.readFileSync( wirteFilePath , 'utf-8');
			
			let actual = docParse( testString );

			let expected = docParseOriginJson;		

			assert.deepEqual(actual, expected);

		});

		it( 'parse result’s lines should equal to origin generate json', function() {
			
			let ret = docParseOriginJson;

			let testString = fs.readFileSync( wirteFilePath , 'utf-8');
			
			assert.strictEqual( ret.length, testString.split('\n').length );

		});

	});

});

describe( 'doc-printer' , function() {

	let printerOriginJson = require( path.join( __dirname, './testFile/docPrinter.origin.json'  ) );

	describe( '#printer()', function() {

		it( 'printer should generate file corrently.' , function() {

			let fileString = docPrinter( printerOriginJson );
			
			assert.strictEqual( fileString, 
`'use strict';
import styles from './lib/style.js';

class Mod extends Component {
    // 注释
     static disableModuleDataAutoFetch = false;

  render() {
    let {
      benifit
    } = this.props.attrs;
    return (
      <View
        append="tree"
      >
        <Text>12345</Text>
      </View>
    );
  }
}` 
			);

		});

	});

});


describe( 'doc-utils' , function() {

	describe( '#isArray()', function() {

		it( 'utils.isArray should judge Array corrently.' , function() {

			docUtils.isArray( );
			
			let testValue = [
				[1,2,3,4],
				[undefined, 1, null, '', {
					hello: 'world'
				}],
			  []
			];

			let errorValue = [
				null,
				'hello',
				3.1415926,
				{
					m: 1
				}
			];

			let ret = true;
			testValue.map((v) => {
				if ( !docUtils.isArray( v ) ) {
					ret = false;
				}
			});
			errorValue.map((v) => {
				if ( docUtils.isArray(v) ) {
					ret = false;
				}
			});

			assert.ok( ret );

		});

	});

	// 移除concat

	// describe( '#concat()', function() {

	// 	it( 'utils.concat should generate object which type is "concat"', function() {

	// 		let originParts = [];

	// 		assert.deepEqual(docUtils.concat(originParts), {
	// 			type: 'concat',
	// 			parts: [],
	// 		});

	// 	});

	// });

	describe( '#line()', function() {

		it( 'utils.line should generate object which type is "line"', function() {

			let originParts = [
				"class Mod extends Component {"
			];
			let options = {
				indent: {
					"tab": 2,
				}
			};

			assert.deepEqual(docUtils.line(originParts, options), {
				type: 'line',
				parts: [
					"class Mod extends Component {"
				],
				indent: {
					tab: 2
				}	
			});

		});

	});

	describe( '#string()', function() {

		it( 'utils.string should generate object which type is "string"', function() {

			let originParts = [
				"extends"
			];
			let options = {
				indent: {
					"space": 1,
				}
			};

			assert.deepEqual(docUtils.string(originParts, options), {
				type: 'string',
				parts: [
					"extends"
				],
				indent: {
					space: 1
				}	
			});

		});

	});

	describe( '#indentTab()', function() {

		it( 'utils.indentTab should change all parts indent with count' , function(){

			let result = [
				{
					type: 'line',
					parts: [
						'test'
					],
					indent: {
						tab: 2
					}
				},
				{
					type: 'line',
					parts: [
						'test2'
					],
					indent: {
						tab: 3
					}
				}
			];
			let count = -1;
			let judgeResult = [
				{
					type: 'line',
					parts: [
						'test'
					],
					indent: {
						tab: 2 + count
					}
				},
				{
					type: 'line',
					parts: [
						'test2'
					],
					indent: {
						tab: 3 + count
					}
				}
			];

			assert.deepEqual(docUtils.indentTab( result, count), judgeResult);

		});
		
	});

	describe( '#setIndentTab()', function() {

		it( 'utils.setIndentTab should set all parts indent with count' , function(){

			let result = [
				{
					type: 'line',
					parts: [
						'test'
					],
					indent: {
						tab: 2
					}
				},
				{
					type: 'line',
					parts: [
						'test2'
					],
					indent: {
						tab: 3
					}
				}
			];
			let count = 10;
			let judgeResult = [
				{
					type: 'line',
					parts: [
						'test'
					],
					indent: {
						tab: count
					}
				},
				{
					type: 'line',
					parts: [
						'test2'
					],
					indent: {
						tab: count
					}
				}
			];

			assert.deepEqual(docUtils.setIndentTab( result, count), judgeResult);

		});

	});

	describe( '#countIndent()', function() {
		
		it( 'utils.countIndent should count indent from string corrently.' , function(){

			let string = '			     前面有五个tab一个space';

			assert.deepEqual(docUtils.countIndent( string ), {
				indent: {
					tab: 5,
					space: 1
				},
				pureStr: '前面有五个tab一个space',
				originStr: string
			});

		});

	});

});

describe( 'process', function() {

	describe( '#Process' , function() {
	
		it( 'Process objects should exists.' , function() {
		
			assert.equal(typeof webProcessor, 'object');
			assert.equal(typeof weexProcessor, 'object');
			assert.equal(typeof processLayoutData, 'function');
			assert.equal(typeof Process, 'function');
			assert.equal(typeof clearInheritedAttr, 'function');
			assert.equal(typeof unifyClassName, 'function');

		});

	});
})

describe( 'syntactic', function() {

	describe( '#getData:Return' , function() {
	
		it( 'should parse function correctly.' , function() {
			
			let functionString = fs.readFileSync( path.join( __dirname, './functions/getData1.js'  ), 'utf-8');
			let constructorString = fs.readFileSync( path.join( __dirname, './functions/constructor.js'  ), 'utf-8');
			let getValidString = fs.readFileSync( path.join( __dirname, './functions/getValidDatas.js'  ), 'utf-8');
			let isSquareString = fs.readFileSync( path.join( __dirname, './functions/isSquare.js'  ), 'utf-8');
			
			// console.log('syntactic.11111', syntactic, syntactic.parseFunction);

			let ret1 = syntactic.parseFunction( functionString );
			fs.writeFileSync( path.join( __dirname, './functions/getData1.json'  ), JSON.stringify(ret1, null, 2), 'utf-8' )
			
			let ret2 = syntactic.parseFunction( constructorString );
			fs.writeFileSync( path.join( __dirname, './functions/constructor.json'  ), JSON.stringify(ret2, null, 2), 'utf-8' )
			
			let ret3 = syntactic.parseFunction( getValidString );
			fs.writeFileSync( path.join( __dirname, './functions/getValidDatas.json'  ), JSON.stringify(ret3, null, 2), 'utf-8' )
			
			let ret4 = syntactic.parseFunction( isSquareString );
			fs.writeFileSync( path.join( __dirname, './functions/isSquare.json'  ), JSON.stringify(ret4, null, 2), 'utf-8' )
			
			let ret5 = syntactic.parseFunction( `/**
* @author 卡狸
* @version 1.0
* @param
* @return
*/
export default function(args1, args2 = {}){
	let text = 'hello world';
	return {
		arg1,
		args2: text,
	}
};` );
			fs.writeFileSync( path.join( __dirname, './functions/testFunction.json'  ), JSON.stringify(ret5, null, 2), 'utf-8' )

			// console.log('syntactic.getDataReturn', ret);

		});

	});
});


















