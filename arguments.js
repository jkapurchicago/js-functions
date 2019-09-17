/*
function sayHello(name){ 
    console.log("Hello There " + name + "!");
}

sayHello("Rusty"); 

function area(length, width) { 
    console.log(length * width); 
}
area(9, 2); 

*/



/*

function greet(person1) { 
    console.log("hi" + person1);

}



//var name = prompt("what is your name"); 
var name = ""; 
while(name !== "exit"){ 
    console.log("what is your name"); 
    process.stdin.on('data', function (data) {
            // Print user input in console.
              name = data; 
     
    });
    greet(name); 

    //name = prompt("what is your name");
} 
*/

var name = prompt('what is your name'); 
var sign;
function greet(name) { 
    console.log("hi" + name);
}

while(name != "exit") { 
    greet(name);

    if (name === '') {
        name = prompt('what is your name?');
    }

    if (name !== '') {
        sign = prompt('whats your sign');
        console.log(`${sign} - looks like we're compatible ${name}`);
    }
} 



