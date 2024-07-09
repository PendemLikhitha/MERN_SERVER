const mongoose = require("mongoose");

//Internal function :describe()

describe('MongoDb Connected',()=>{
    beforeAll(async ()=>{
        const url ='mongodb+srv://littleme:littleme@cluster0.f0jwfdk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url);
    });
    //Call the test case inside describe and below beforeAll
    test('MongoDB connected to SERVER :)',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
})
