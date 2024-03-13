//crude Operation
use("crudDb")
console.log(db)
db.createCollection("courses")
db.courses.insertOne({
    name:"Ruchi webdiva ",
    Price:0,
    assingnments:12,
    projects:45,

})
// db.courses.insertMany([{
//     name:"Ruchi webdiva ",
//     Price:0,
//     assingnments:12,
//     projects:45,

// },
// {
//     name:"Ruchi webdiva ",
//     Price:0,
//     assingnments:12,
//     projects:45,

// },
// {
//     name:"Ruchi webdiva ",
//     Price:0,
//     assingnments:12,
//     projects:45,

// }])

//READ
//  let a = db.courses.find({price:0})
//  console.log(a.toArray())

//Update
db.courses.updateOne({price:0},{$set:{price:100}})
db.courses.updateMany({price:0},{$set:{price:100}})
//Delete
db.courses.deleteOne({price:100})
db.courses.deleteMany({price:100})