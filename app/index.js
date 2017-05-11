'use strict'

const reverseString = function (word) {
	if (word == '') {
		return (null);
	} else {
	    let final = [];
	    for (let i in word){
	    	final.push(word[(word.length - 1) - i]);
	    	}
	    	let result = final.join('');
	    	if (result == word) {
	    		result = true;
	    	}
	    return result;
	}
}
module.exports = reverseString