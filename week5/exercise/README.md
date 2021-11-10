# Упражнение 5

## 10.11.20

1. Напишете функция **promisify**, която взима един аргумент, който е асинхронна функция _(от `node`)_ и връща `Promise` версията ѝ.

    Пример:

    ```js
    const fs = require('fs');
    const promisify = ...;
    const readFile = promisify(fs.readFile);
    const writeFile = promisify(fs.writeFile);

    readFile('./data.txt')
      .then(content => content + ' more data')
      .then(data => writeFile('./data.txt', data))
      .then(() => console.log('Operation completed!'));
    ```

2. Напишете програма, която асинхронно чете през 5 секунди дали има промени по подадени 3 файла, ако има такива промени, да ги печата. Програмата да спира да проверява след 60 секунди без такива.

3. Напишете програма, която приема функция и връща резултата ѝ след не по-малко от 10 секунди, без значение дали подадената функция се изпълнява за 0 или 7.

Bonus

1. Реализирайте функция `isDeepEqual()`, която извършва дълбоко сравнение на 2 подадени параметъра _(може да са от тип стринг, обект, масив, масив от обекти, масив от обекти с параметър масив от обекти, ...)_. Тези проверки да се извършват асинхронно, за да не забиваме main thread-a, в случай на много дълбоки подадени данни.

```javascript
isDeepEqual(1, 1); // true
isDeepEqual(1, 2); // false
isDeepEqual('str', 'str'); // true
isDeepEqual('str', 'str1'); // false
isDeepEqual({ prop: 'p' }, { prop: 'p' }); // true
isDeepEqual({ prop: 'p' }, { prop: 'p1' }); // false
isDeepEqual({ prop: [1, 2, 3] }, { prop: [1, 2, 3] }); // true
isDeepEqual({ prop: [1, 2, 3] }, { prop: [1, 2, 3, 4] }); // false
// ...
```

1. Реализирайте `Promise` сами