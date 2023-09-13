//fs module is used to carryout synchronous and asynchronous tasks
//although node js is a asynchronous based application some time we might need to perform synchronous task to be performed
//readFilesync is used for sync tasks alt is readFile
const fs=require('fs')
const add="this is a addition to existing text";
fs.writeFileSync('./text.txt',add)
try{
    const data=fs.readFileSync('text.txt','utf8',{flag:'a'});
    console.log(data);
}
catch(error){
    console.error('Error reading file::',error);
}