const combine = require('stream-combiner') 
const split2 = require('split2') 
const through2 = require('through2')
const zlib = require('zlib')

module.exports = function () {
    let newLineObj;
    return combine(  
        split2(),
        through2(function (lineBuffer, encoding, next) { 
                const lineObj = JSON.parse(lineBuffer.toString());
                
                if(lineObj.type === 'genre') {
                    this.push(JSON.stringify(newLineObj));

                    newLineObj = {}
                    newLineObj.name = lineObj.name;
                    newLineObj.books = [];
                } else {
                    newLineObj.books.push(lineObj.name);
                }

                next();
            },
            function (next) {
                this.push(JSON.stringify(newLineObj))
                next()
              }
        ),
        zlib.createGzip()
        //split2() //JUST To Test
      )
};