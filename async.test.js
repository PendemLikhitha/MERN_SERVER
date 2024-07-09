const {fetchData,MyData} = require('./test/async');
test('Callback DATA',done=>{
    function callback(data){
        try{
        expect(data).toBe('Admin');
        done();
    }catch(err){
        done(err);
    }
}
    fetchData(callback);
})
test('CallBack My Data',done=>{
    function callback(data){
    try{
        expect(data.id).toBe(10001);
        done();
    }catch(err){
        done(err);
    }
}
  MyData(callback);
})

//MOCK function to check user is admin or not
test('Mocking callback function',done=>{
    const MockFunction = jest.fn(data=>{
      expect(data).toBe('Admin')
      console.log("Mock function")
      done();
    })
    fetchData(MockFunction);
})