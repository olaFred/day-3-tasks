'use strict'

const StringSplosion = function(string)  {
	this.string = string;
	this.manipulate = function() {
		let result = '';
    	for (let i = 1; i <= this.string.length; i++) {
        	let word = this.string.slice(0,i);
        	result += word;
    	}
    //console.log(typeof result);
    this.string = result.toString();
    return this.string;
	}
}

module.exports = StringSplosion