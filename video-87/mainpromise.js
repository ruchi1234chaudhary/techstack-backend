import fs from "fs/promises"
let a = await fs.readFile("ruchi.txt")
let b = await fs.appendFile("ruchi.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(),b)