'use strict'
function reverseString(str){
	if(str === ""){
		return null;
	}
	var reversal = str.split('').reverse().join('');
	if(str === reversal){
		return true
	}
	
}

module.exports = {
	reverseString : reverseString
};
