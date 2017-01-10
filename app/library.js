'use strict'
function reverseString(str){
	if(str === ""){
		return null;
	}
	var reversal = [];
	for (var i = 1; i<=str.length; i++){
		reversal.push(str[str.length-i])
		}
		if (reversal === str){
			return true
		}
		return reversal
}

module.exports = {
	reverseString : reverseString
};
