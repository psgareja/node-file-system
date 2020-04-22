

 const fs=require('fs');

// const book={

//     title:"Ego is Enemy",
//     auther:"Ryan Holiday"
// }
// const bookJSON=JSON.stringify(book);

// fs.writeFileSync('1-json.json',bookJSON);

// const dataBuffer=fs.readFileSync('1-json.json');
// const dataJSON=dataBuffer.toString();
// const data=JSON.parse(dataJSON);
// console.log(data.auther)

const databuffer=fs.readFileSync('1-json.json');
const dataJSON=databuffer.toString();
const user=JSON.parse(dataJSON);

user.name='pradip'
user.age=13
const userJSON=JSON.stringify(user);
fs.writeFileSync('1-json.json',userJSON);