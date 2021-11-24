var fs = require('fs');

function parseStudents(studentData) {
    var students = {};

    for(student of studentData) {
        students[student[2]] = {name: student[1]};
    }

    return students;
}

function parseGrades(gradeData, students) {
    
    for(match of gradeData) {
        var fn = match[1];
        var grades = match[2].split(' ');

        students[fn].grades =   grades.map(function(num) {
                                    if(num === 'xxx') return 0;
                                    return +num;
                                });
    }

}

function calculateStudents(students, subjects, credits) {
    var results = [];
    for(var student of Object.values(students)) {

        var studentWithGrades = {name: student.name};

        student.grades.forEach(function(grade, index) {
            var score = Math.round(((grade / 6) * credits[index] + Number.EPSILON) * 100) / 100;
            studentWithGrades[subjects[index]] = score.toFixed(2);
        });

        results.push(studentWithGrades);
    }
    return results;
}

fs.readFile("students.txt", {encoding: 'utf8'}, function(err, stundentContent) {
    if(err) {
        console.log(err);
        return;
    }

    var studentRegex = /^([a-zA-Z \t]+)(\d{3})/gm;
    var regexRes = stundentContent.matchAll(studentRegex);
    var students = parseStudents(regexRes);

    fs.readFile("marks.txt", {encoding: 'utf8'}, function(err, marksContent) {
        if(err) {
            console.log(err);
            return;
        }

        var gradeRegex = /^(\d+)\s([\d.x \t]+)$/gm;
        var gradeRes = marksContent.matchAll(gradeRegex);
        
        parseGrades(gradeRes, students);

        fs.readFile("credits.txt", {encoding: 'utf8'}, function(err, creditContent) {
            if(err) {
                console.log(err);
                return;
            }

            var lines = creditContent.split('\n');
            var firstLineRegex = /^[\w \t]+/m;
            var secondLineRegex = /^[\d.\s]+/m;

            var correctNames = firstLineRegex.test(lines[0]);
            var correctCredits = secondLineRegex.test(lines[1]);

            subjectNames = correctNames ? lines[0].trim().split(' ') : [];
            subjectCredits = correctCredits ? lines[1].trim().split(' ').map(function(num) {
                return +num;
            }) : [];

            var results = calculateStudents(students, subjectNames, subjectCredits);
            
            fs.writeFile('Results.json',JSON.stringify(results), function(err) {
                if(err) {
                    console.log(err);
                    return;
                }
            })
        });
    });
})

