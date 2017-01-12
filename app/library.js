'use strict'
function reverseString(str){
	if(str === ""){
		return null;
	}
	var reversal = "";
	for (var i = str.length-1; i>=0; i--){
		reversal+=str[i]
	}
	return reversal
	
		
}

module.exports = {
	reverseString : reverseString
};
