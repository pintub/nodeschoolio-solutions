const { Readable } = require('stream')

class MyStream extends Readable {
    constructor(options) {
        super(options);
        this._count = 0;
    }

    //_read() provides chunk of data
    //When _read() is internally called, push data to buffer
    _read() {
        ++this._count;
        if(this._count === 1) {
            const str = process.argv[2];
            this.push(Buffer.from(str, 'ascii'));
        }
    }
}

const myStreamObj = new MyStream();
myStreamObj.pipe(process.stdout);


//_read is called when .push() return a non-empty data. When empty data is returned call to _read stops