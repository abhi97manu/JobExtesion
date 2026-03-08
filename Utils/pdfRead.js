const fs = require('fs');


const { PDFParse } = require('pdf-parse');
// import { PDFParse } from 'pdf-parse';

const resource = ""



async function run(url) {
	const parser = new PDFParse({ url: url });

	const result = await parser.getText();
	return result;
}



module.exports = run