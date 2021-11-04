var fs = require('fs');

function readFile(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, { encoding: 'utf-8' }, function (err, content) {
      if (err) { return void reject(err); }
      resolve(content);
    });
  });
}

function writeFile(fileName, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(fileName, content, function (err) {
      if (err) { return void reject(err); }
      resolve(content);
    });
  });
}

// Promise.all([Promise.resolve(1),Promise.resolve(2)]).then((data) => data[0] // 1 data[1] // 2)

readFile('./students.txt')
  .then(function (content) {
    var studentsData = content.split('\n').reduce(function (acc, currLine) {
      if (currLine[0] === '#') { return acc; }
      var currLineArray = currLine.split(' ');
      if (currLineArray[0] === '') { return acc; }
      var fnNumber = currLineArray[currLineArray.length - 1];
      var studentName = currLineArray.slice(0, -1).join(' ');
      acc[fnNumber] = { name: studentName, marks: null };
      return acc;
    }, {});
    return Promise.all([readFile('./marks.txt'), studentsData]);
    // return readFile('./marks.txt').then(function (content) {
    //   return { content, studentsData };
    // });
  })
  .then(function (data) {
    var content = data[0]
    var studentsData = data[1];
    // var studentsData = data.studentsData;
    // var content = data.content;
    var contentLineArray = content.split('\n');
    for (var i = 0; i < contentLineArray.length; i++) {
      var currLine = contentLineArray[i];
      if (currLine[0] === '#') { continue; }
      var currLineArray = currLine.split(' ');
      if (currLineArray[0] === '') { continue; }
      var fnNumber = currLineArray[0];
      var marks = currLineArray.slice(1);
      studentsData[fnNumber].marks = marks;
    }
    return readFile('./credits.txt').then(function (content) {
      return { content, studentsData };
    });
  })
  .then(function (data) {
    var content = data.content;
    var studentsData = data.studentsData;

    var creditsLines = content.split('\n');
    var subjects = creditsLines[0].split(' ');
    var creditsData = subjects.reduce(function (acc, curr, index) {
      acc[curr] = creditsLines[1].split(' ')[index];
      return acc;
    }, {});

    var result = [];
    for (var fn in studentsData) {
      var currentResult = { name: null };
      var fnData = studentsData[fn];
      currentResult.name = fnData.name;
      for (var subject of subjects) {
        var currentStudentMark = fnData.marks[subjects.indexOf(subject)];
        if (currentStudentMark === 'xxx') { currentStudentMark = '0'; }
        currentResult[subject] = ((currentStudentMark / 6) * creditsData[subject]).toFixed(2);
      }
      result.push(currentResult);
    }
    var output = JSON.stringify(result).replace(/\[|\]/g, '').replace(/},/g, ',}\n');
    return writeFile('./output.txt', output);
  })
  .then(function () {
    console.log('Success!');
  })
  .catch(console.error);



// fs.readFile('./students.txt', { encoding: 'utf-8' }, function (err, content) {
//   if (err) { return void console.log(err); }
//   var studentsData = content.split('\n').reduce(function (acc, currLine) {
//     if (currLine[0] === '#') { return acc; }
//     var currLineArray = currLine.split(' ');
//     if (currLineArray[0] === '') { return acc; }
//     var fnNumber = currLineArray[currLineArray.length - 1];
//     var studentName = currLineArray.slice(0, -1).join(' ');
//     acc[fnNumber] = { name: studentName, marks: null };
//     return acc;
//   }, {});

//   fs.readFile('./marks.txt', { encoding: 'utf-8' }, function (err, content) {
//     if (err) { return void console.log(err); }
//     var contentLineArray = content.split('\n');
//     for (var i = 0; i < contentLineArray.length; i++) {
//       var currLine = contentLineArray[i];
//       if (currLine[0] === '#') { continue; }
//       var currLineArray = currLine.split(' ');
//       if (currLineArray[0] === '') { continue; }
//       var fnNumber = currLineArray[0];
//       var marks = currLineArray.slice(1);
//       studentsData[fnNumber].marks = marks;
//     }

//     fs.readFile('./credits.txt', { encoding: 'utf-8' }, function (err, content) {
//       if (err) { return void console.log(err); }
//       var creditsLines = content.split('\n');
//       var subjects = creditsLines[0].split(' ');
//       var creditsData = subjects.reduce(function (acc, curr, index) {
//         acc[curr] = creditsLines[1].split(' ')[index];
//         return acc;
//       }, {});

//       var result = [];
//       for (var fn in studentsData) {
//         var currentResult = { name: null };
//         var fnData = studentsData[fn];
//         currentResult.name = fnData.name;
//         for (var subject of subjects) {
//           var currentStudentMark = fnData.marks[subjects.indexOf(subject)];
//           if (currentStudentMark === 'xxx') { currentStudentMark = '0'; }
//           currentResult[subject] = ((currentStudentMark / 6) * creditsData[subject]).toFixed(2);
//         }
//         result.push(currentResult);
//       }
//       var output = JSON.stringify(result).replace(/\[|\]/g, '').replace(/},/g, ',}\n');
//       fs.writeFile('./output.txt', output, function (err) {
//         if (err) { return void console.log(err); }
//         console.log('Success!');
//       })
//     });
//   });
// });
