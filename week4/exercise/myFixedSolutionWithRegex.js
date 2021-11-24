var fs = require("fs");

function reduceFnWithStudents(data) {
  var stMatch = data.match(/^[^#]([A-Za-z]+(\s)*)+((\s)*([\d])+)/gm);
  var studentsData = stMatch.reduce(function (acc, currLine) {
    var matches = currLine.match(/^([^#]([A-Za-z]+(\s)*)+)((\s)*([\d])+)/);
    var fnNumber = matches[4].trim();
    var stName = matches[1].trim();
    acc[fnNumber] = { name: stName, marks: null };
    return acc;
  }, {});
  return studentsData;
}
function addingGradesIntoStudentsData(promiseData) {
  var data = promiseData[0];
  var studentsData = promiseData[1];
  var marksMatch = data.match(/^([^#]([\d]+))(\s[(\d+\.\d+)|xxx]+)+/gm);
  var marks = marksMatch[0].split("\n");
  for (let i = 0; i < marks.length; i++) {
    var splitedMarks = marks[i].replace("xxx", "0").split(" ");
    var markFn = splitedMarks[0];
    var grades = splitedMarks.slice(1);
    studentsData[markFn].marks = grades;
  }
  return studentsData;
}
function calcAndFinishData(promiseData) {
  var data = promiseData[0];
  var studentsData = promiseData[1];
  var creditLines = data.split("\n");
  var subjects = creditLines[0].split(" ");
  var splitedCreditLineSecond = creditLines[1].split(" ");
  var creditData = subjects.reduce(function (acc, curr, index) {
    acc[curr] = splitedCreditLineSecond[index];
    return acc;
  }, {});
  var result = [];
  for (var fn in studentsData) {
    var currentResult = { name: null };
    var fnData = studentsData[fn];
    currentResult.name = fnData.name;
    for (const subject of subjects) {
      var currentStudentMark = fnData.marks[subjects.indexOf(subject)];
      currentResult[subject] = (
        (currentStudentMark / 6) *
        creditData[subject]
      ).toFixed(2);
    }
    result.push(currentResult);
  }
  var output = JSON.stringify(result)
    .replace(/\[|\]/g, "")
    .replace(/},/g, ",}\n");
  return output;
}
function readFile(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, { encoding: "utf-8" }, function (err, data) {
      if (err) {
        return void reject(err);
      }
      resolve(data);
    });
  });
}
function writeFile(fileName, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return void reject(err);
      }
      resolve(data);
    });
  });
}

readFile("./students.txt")
  .then(function (data) {
    var studentsData = reduceFnWithStudents(data);
    return Promise.all([readFile("./marks.txt"), studentsData]);
  })
  .then(function (promiseData) {
    var studentsData = addingGradesIntoStudentsData(promiseData);
    return Promise.all([readFile("./credits.txt"), studentsData]);
  })
  .then(function (promiseData) {
    var output = calcAndFinishData(promiseData);
    return writeFile("./output.txt", output);
  })
  .then(function () {
    console.log("Successfully adding the full data in output.txt");
  })
  .catch(console.error);
