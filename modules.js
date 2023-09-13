//built in modules
const os=require('os')
//info about current user 
const user=os.userInfo()
//method return the system uptime in secondss
// console.log( `${os.uptime()}`)
// const all={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),

// }
// console.log(all);

const path=require('path')
console.log(path.sep)