const fs = require('fs');

class EventEmitter {

  constructor() {
    this.eventHandlers = {};
  }

  on(eventName, cb) {
    this.eventHandlers[eventName] =
      (this.eventHandlers[eventName] || []).concat(cb);
  }

  emit(eventName, data) {
    (this.eventHandlers[eventName] || []).forEach(cb => cb(data));
  }

}

class Reader extends EventEmitter {

  constructor(options) {
    super();
    this.options = options;
  }

  readFile(fileName) {
    fs.readFile(fileName, this.options, (err, content) => {
      if (err) { return this.emit('error', err); }
      this.emit('data', content);
    });
  }
}

const reader = new Reader({ encoding: 'utf8' });
reader.on('data', console.log);
reader.on('error', console.log);
reader.readFile('test.txt');

