'use strict'
var file = {}

var findMinMax = function(arr){
	var Minmax = [];
	var maxi = arr[0];
	var mini = arr[arr.length-1]
	if (!Array.isArray(arr) || arr === 0){
		return "invalid argument type"
  	}
  	for(var i=1; i<arr.length; i++){
		if(arr[i] > maxi){
			maxi = arr[i];
		}
		else if(arr[i]<mini){
			mini = arr[i]
		}
  	}
  	Minmax.push(mini);
  	Minmax.push(maxi);
  	return Minmax;
}
  	//for(var j=1; j<arr.length; j++){
	//	if(arr[i] < mini){
	//		mini = arr[i];
//		}
//	}
  //	Minmax.push(mini;
  	//return Minmax
  	
	
	
module.exports = file;