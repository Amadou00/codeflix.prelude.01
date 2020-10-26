const fs = require('fs');
module.exports = function e04(filename){
    fs.readFile('./' + filename, 'utf8', (err, data) =>{
        if (err){
            return console.log(err);
        }
        console.log("I gotta give my all for everyone in my crew ~~ " + data);
    });
}
// La data n'est pas récupérable.