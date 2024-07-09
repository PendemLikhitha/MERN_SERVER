async function fetchData(){
   return{
    getAllUsers:[{
        "id":"1",
        "name":"abc",
        "email":"@.com",
        "password":"123"
    }]
}
}
module.exports =fetchData;
/*async function fetchData(){
    try{
        const response = await
fetch('http://localhost:3001/users');//fetch() that allows to fetch
data
        if(!response) {
            throw new Error('Failed to Fetch');
        }
        const data= response.json();
        return data;
    }catch(err){
        throw err;
    }
}
module.exports =fetchData;*/