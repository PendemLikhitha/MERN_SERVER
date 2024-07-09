//Write our test cases for our unit function sum
const sum = require('./test/sum');

//Jest test case
//Test function takes 2 parameters : Label and Function
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe=Exactly equals to given value
    //expect()=to execute our unit function
})
test('Object in array',()=>{
    const data =[1,2,3,4,5]
    expect(data).toEqual([1,2,3,4,5])
})
test('Value is NULL',()=>{
    const n = null;
    expect(n).toBeNull();
})
test('Object in Dictionary',()=>{
    const data={one:1};
    expect(data).toEqual({one:1})
})
test('Value is Defined',()=>{
    const a=1;
    expect(a).toBeDefined();
})
test('Value is Truth',()=>{
    const bool=true;
    expect(bool).toBeTruthy();
})
test('Value is False',()=>{
    const bool=false;
    expect(bool).toBeFalsy();
})