// Alert 

// 1
alert("Error! Please enterr a valid password.");

// 2
alert("Welcome to JS land...\nHappy Coding!");


// 3
alert("Welcome to JS land...");
alert("Happy Coding!");

// 4
alert("Hello i can run with my browsr console");


// chapter 02

var username = "kehan";
alert(username);

var fullname = "syed kehan  iqbal";
alert(fullname);


var Name = "jhone doe";

var age  = "15 years old";
var quality = "certified mobile app develoment ";

alert(Name);
alert(age);
alert(quality);


// 5



// ch 6/9


var a = 9;
console.log(++a)

console.log(a++)

console.log(--a);



var a = 2,b =1;

console.log(--a - --b + ++b + b--);


var a  = prompt("Enter subject name ");
var b  = prompt("Enter subject name ");
var c  = prompt("Enter subject name ");



var d = a+b+c








// ch 9/11


var cityname = +prompt("Enter city name ");
if(cityname == karachi){
    console.log("Welcome to the city of light")
}


var gender  = +prompt("Enter gender here");

if(gender == male ){
    console.log("good morning sir");
}

else if(gender == female){

    console.log("good morning mam");
}

else {
    console.log ("not able to say");
}



var fuel = +prompt("Enter remaining fuel");

if(fuel < 0.25){
    console.log("please refill the fuel in  your car");
}



var number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}










// ch 17 /20


var empty_ = [];
console.log(empty_);


var a = [0 , 1,2];
var b = [0 , 1,0];
var c = [2, 1,0];
var d = [3, 2,1];


for(var i=0; i<a.length;i++){


    for(var j=0; j<b.length;j++){
        console.log(a[i]+b[j]);

    }

    for(var k=0; k<c.length;k++){

        console.log(a[j]+b[k]);

    }

    for(var l=0; l<d.length;l++){

        console.log(a[k]+b[l]);
    }


}




// 3


num = +prompt("Enter any no you want to a multiplication table");
len = +prompt("Enter length")

console.log("Multiplication table of "+ num + " with length of " + len + " is:")

for(var i=0; i < len ; i++){
    console.log(num + " x " + (i+1) + "  =  " + num*(i+1));
}


var arr  = ["mango","orang","banana","graps"];
console.log(arr);

