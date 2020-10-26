module.exports = function e02(filename){
    let ext = '';
    for (let i = 0; i < filename.length; i++){
        if (filename[i] == '.'){
            while (i != filename.length-1){
                i++;
                ext += filename[i];
            }
        }
    }
    return ext;
}