'use strict'

var findMinMax = function(arr){
	if (!Array.isArray(arr)){
		return "This is not an Array"
  	}
  	
  	for (var j = 0; j<arr.length; j++){
  		if (arr[j].constructor === String ){
  			return "invalid argument";
  		}
  	}
  	var Minmax = [];
	var maxi = arr[0];
	var mini = arr[0];
  	for(var i=1; i<arr.length; i++){
		if(arr[i] > maxi){
			maxi = arr[i];
		}
		if(arr[i]<mini){
			mini = arr[i]
		}
  	}
  	
  	Minmax.push(mini);
  	Minmax.push(maxi);
  	if (mini === maxi){
  		return [mini];
  	}
  	return Minmax;
}
  	 	
module.exports = {
	findMinMax : findMinMax
};