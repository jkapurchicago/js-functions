//this function capitalizes the first char in a string: 
function capitalize(str) { 
    return str.charAt(0).toUppercase() + str.slice(1); 

}

var city = "paris"; 
var capital = capitalize(city); 

var num = 37; 
var capital = capitalize(num); 

//we can capture the returned value in a variable 