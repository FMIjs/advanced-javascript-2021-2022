const stream = require('stream');
const data = [1, 2, 3, 4, 5, null];

class MyReadableStream extends stream.Readable {
  constructor(options) {
    super(options);
  }

  _read() {
    data.forEach(item => this.push(item?.toString() || item));
  }
}

class MyTransformStream extends stream.Transform {

  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, next) {
    this.push((+chunk + 1).toString());
    next();
  }
}

class MyWritableStream extends stream.Writable {
  sum = 0;

  constructor(options) {
    super(options);
  }

  _write(chunk, encoding, next) {
    this.sum += +chunk;
    next();
  }

  _final(next) {
    console.log('the sum is:', this.sum);
    next();
  }
}

const read = new MyReadableStream({ encoding: 'utf-8' });

read.on('end', () => { console.log('Readable stream end'); })

const write = new MyWritableStream({ encoding: 'utf-8' });

write.on('finish', () => { console.log('Writable stream finish'); })

const transform = new MyTransformStream({ encoding: 'utf-8' });

read.pipe(transform).pipe(write);




// class EventEmitter {
//   eventHandlers = {};
//   on(eventName, cb) {
//     this.eventHandlers[eventName] = this.eventHandlers[eventName] || [];
//     this.eventHandlers[eventName].push(cb);
//   }
//   emit(eventName, data) {
//     (this.eventHandlers[eventName] || []).forEach(cb => cb(data))
//   }
// }

// const ee = new EventEmitter();

// ee.on('test', (data) => console.log(data));
// setTimeout(() => {
//   ee.emit('test', 123);
// }, 3000)