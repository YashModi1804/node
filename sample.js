const add=(a,b)=>{
    return(a+b);
};
const subtract=(a,b,c=0)=>{
    c=a-b;
    return c;
}
console.log(add(5,6));
module.exports={ //module.exports is a builtin function exports function 
    add,
    subtract
};
