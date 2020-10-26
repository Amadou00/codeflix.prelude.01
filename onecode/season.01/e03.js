const fs = require('fs');
module.exports = function e03(filename){
    const chopper = fs.readFileSync('./' + filename);
    return "I gotta give my all for everyone in my crew ~~ " + chopper;
}