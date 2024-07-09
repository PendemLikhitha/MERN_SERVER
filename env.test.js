let dataSets=[];
//EXcute my evn before all
beforeAll(()=>{
    dataSets =['Raju','Ravi Teja'];

})
beforeEach(()=>{
    console.log("Before each SetUp is called");
})
afterEach(()=>{
    console.log('After Each Setup is called');
})
afterAll(()=>{
    dataSets=[];
})
test('Test Case',()=>{
    expect(dataSets.length).toBe(2);

})
test('DataSet contains ',()=>{
    expect(dataSets).toContain('Ravi Teja');
})
test('DataSet contains ',()=>{
    expect(dataSets).toContain('Raju');
})