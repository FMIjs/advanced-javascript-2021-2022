import text from './text.txt';

const h1 = document.createElement('h1');

h1.textContent = 'Webpack!';

document.body.append(h1);

function Component(config) {
  return function (klass) {

    return class extends klass {
      constructor() {
        super();
        const klassElement = document.createElement('div');
        klassElement.innerHTML = config.html;
        document.body.appendChild(klassElement);
        this.el = klassElement;
      }
    }
  }
}

@Component({
  html: '<h1>My Component</h1>'
})
class Person {
  #test = 123;

  #printTest() {
    console.log(this.#test);
  }

  constructor() {
    this.#printTest();
  }
}

const a = new Person();
const b = new Person();


window.a = a;
window.b = b;

console.log(a?.test);