const fs = require('fs');
module.exports = function e05(filename, txt){
    fs.writeFileSync(filename, txt);
    //return 'The file has been saved!';
}