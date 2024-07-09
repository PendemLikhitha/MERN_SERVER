const { getData,getRaw } = require('./utils');

function processData(){
    return `Processed : ${getData()}`
    //Should return processed real data
    //But using mock we pass fake data
}
function processRaw(){
    return getRaw();
}
module.exports ={ processData, processRaw };