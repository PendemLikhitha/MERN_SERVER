//jest test to test our http GET METHOD
//Test if it contains all the params or not
const app = require('./index');
//supertest to create http request
const request =require('supertest');

describe('GET /users',()=>{
    test('GET users from /users api',async ()=>{
        const res= await request(app)
        .get('/users').expect(200);
        console.log(res.body.getAllUsers[0]);
        const data=res.body;
        data.getAllUsers.forEach(user=>{
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('email');

        })
        
    })
})