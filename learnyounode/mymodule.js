const fs = require('fs')

module.exports = function (sDirName, sExtensionName, callback) {
    fs.readdir(sDirName, {encoding: "utf8"}, 
        (err, arrFileNames) => {
            if(err) {
                return callback(err);
            } else {
                return callback(null, arrFileNames.filter(sFileName => sFileName.endsWith("." + sExtensionName)));
            }
        });
};