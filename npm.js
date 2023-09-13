const _=require('lodash')
const items= [1,2,[3,5,[6,7,8]]];
const new_items=_.flattenDeep(items);
console.log(items)
console.log(new_items)