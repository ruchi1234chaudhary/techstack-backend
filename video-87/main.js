const fs = require("fs")
console.log(fs)
console.log("starting")
//fs.writeFileSync("ruchi.txt" , "ruchi is a good girl")
fs.writeFile("ruchi2.txt", "ruchi is a good girl", ()=>{
    console.log("done")
})
console.log("ending")
fs.readFile("ruchi2.txt", (error, data)=>{
    console.log(error,data.toString())
})
fs.appendFile("ruchi2.txt","ruchikiki" ,(e,d)=>{
    console.log(d.tostring())
})
console.log("ending")