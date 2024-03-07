// import { a, b, d} from "./mymodule.js"
// console.log(a,b,d)
//  import obj from "./mymodule.js"
//  console.log(obj)
const a = require("./mymodule2.js")
console.log(a)
(function(exports, require, module, _filename, _dirname,){
    //module code actually lives here
})
console.log(a, _dirname, _filename)