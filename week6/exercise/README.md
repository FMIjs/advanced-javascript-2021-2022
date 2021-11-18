1. Create a [transform stream](https://nodejs.org/api/stream.html) called RevisionStream that replaces all 'Lorem' and 'Ipsum' from text.txt.

Usage: 
```javascript
const readStream = fs.createReadStream('./text.txt', { highWaterMark: 10 });
const writeStream = fs.createWriteStream('./revision.txt');
const re = new RevisionStream();

readStream.pipe(re).pipe(writeStream);
```