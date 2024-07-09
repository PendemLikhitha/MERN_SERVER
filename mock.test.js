//Mock the getData and also Process the mocked data

//Creating mock module
//We are mocking the utils module
jest.mock('./test/utils',()=>({
    getData:jest.fn(),//Mocking the getData function
    getRaw:jest.fn()
}))
const {getData,getRaw } = require('./test/utils');
const {processData ,processRaw}=require('./test/processData')
//mockreturnvalue
test('Mocked the process data',()=>{
    //Mock the return value of getData
    getData.mockReturnValue('Mocked Data');
    expect(processData()).toBe('Processed : Mocked Data');
})
test('Mocked Raw Data',()=>{
        getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true);
})