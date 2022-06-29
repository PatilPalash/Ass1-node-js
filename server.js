console.log("Hello Palash 🙌");
// REPL ---> 

// we can use loop, condition, function, object ✅

// document or window ❌

// file system 
// CRUD (sync, async)

// [12,34,56,76].foEeach((val)=>{ console.log(val)});

// const fs= require('fs');  // file system
// CRUD ()

// create file
// const file = fs.writeFileSync('data.txt', 'Hey Mates, Node js is awesome 🎁');

// reading file
const data= fs.writeFileSync('data.txt');
console.log(data);

// updating file
fs.appendFileSync('data.txt','Author is Node js');

// deleting
fs.unlinkSync('data.txt');


// Async 
fs.writeFile('data.txt','Hey mates, its Async here', (error)=>{
    console.log(error)
})

fs.readFile('')

