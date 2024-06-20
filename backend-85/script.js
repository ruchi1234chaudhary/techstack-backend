// console.log("Radhe-Radhe");
// //fundamentals of js
// //Array and Objects
// // Functions and returns
// //async js coding
// //forEach Map Filter find and indexOf


// var arr = [1,2,3,4];
// arr.forEach(function(val){
//     console.log(val + "hello");
// })


// var newArr= [1,2,3,4];
// newArr.map(function(val){
//     return val;
// })
// console.log(newArr);



// var ans = arr.filter(function(val){
//     if(val<3){ return true;}
//     else{ return false;}
// })
// console.log(ans);


// var ans1 = arr.find(function(val){
//     if(val === 3){ return val;}
// })
// console.log(ans1);

var slugify = require('slugify')

 const a = slugify('some string') // some-string
 console.log(a);

// if you prefer something other than '-' as separator
 const b = slugify('some string', '_')  // some_string
 console.log(b);


