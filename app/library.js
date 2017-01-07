'use strict'
var file = {}
file.findMinMax = function(arr){
	var Minmax = [];
	if (!Array.isArray(arr)){
		return "invalid argument type"
  	}
  	else{
  		Minmax.push(getMin(arr));
  		Minmax.push(getMax(arr));
  		return Minmax
  		}
	}
	file.getMax =function(n){
		var maxi = arr[0];
		if (!Array.isArray(n)){
			return "invalid argument type"
		}
		else{
			for(var i=1; i<arr.length; i++){
				if(arr[i] > maxi){
					maxi = arr[i];
  				}
  			}
  			return maxi
  		}	
  
	}
	file.getMin = function(x){
		var mini = arr[0];
		if (!Array.isArray(x)){
			return "invalid argument type"
  		}
  		else{
  			for(var i=1; i<arr.length; i++){
  				if(arr[i] < mini){
  					mini = arr[i];
  				}
  			}
  			return mini
  		}
  
	}