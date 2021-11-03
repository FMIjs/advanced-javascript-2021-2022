# Задача

Прочетете следното съдържание от посочените файлове и извършете операциите.

*заб: Всеки от файловете може да съдържа коментари, които започват с #*

Пресметнете успеха на всеки студент, като оценката зависи от оценката и кредитите за съответния предмет.  

```(score = (receives/6) * credits)```

Данните за кредити (в credits.txt) са за отличен успех. Данните за студенти са в students, а оценките на даден студент по предмет - в marks.

* Решете задачата с callbacks и запазете резултата в results.txt. 
* Използвайте Promises и Promise.all, за да решите задачата.

## Входни файлове

**Students.txt**
```
# a student may also have three or four own names!
# the faculty number is always the last number 
#
Ivan Ivanov 441
Petko Petkov 442
Alex Alexandrov 443
```
**Marks.txt**
```
# when a mark is missing -> there is xxx in the source
#
441 5.0 xxx 6.0
442 3.5 4.0 xxx
443 6.0 6.0 6.0
```
**Credits.txt**
```
mathematics literature geography
10.0 10.0 8.0
```

### Output file:
```json
    {"name":"Ivan  Ivanov","mathematics":"8.33","literature":"0.00","geography":"8.00"},
    {"name":"Petko  Petkov","mathematics":"5.83","literature":"6.67","geography":"0.00"},
    {"name":"Alex  Alexandrov","mathematics":"10.00","literature":"10.00","geography":"800"}
```
