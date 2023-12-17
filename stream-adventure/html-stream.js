const trumpet = require('trumpet')
const through = require('through2')
const tr = trumpet()

const loudSelectorStream = tr.select('.loud').createStream()
//loudSelectorStream is duplex stream, so can be writable again as below

loudSelectorStream.pipe(through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase())
  next()
})).pipe(loudSelectorStream)

process.stdin.pipe(tr).pipe(process.stdout)