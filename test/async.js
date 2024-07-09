//How we can perform unit tests on asynchornous function


function fetchData(callback){
    setTimeout(()=>{
        callback('Admin')
    },1000);
}
//This function calls admin after 1seconds


function MyData(callback){
    setTimeout(()=>{
        callback({id:10001});
    },1000)
}
module.exports= {  fetchData,MyData  };