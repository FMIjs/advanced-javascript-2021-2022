# Упражнение 7

1. Създайте прост сървър, който по подаден URL извлича съдържанието на дадената страница и ги връща.
[Примерен линк](https://www.reddit.com/.rss)
За зареждане на данните използвайте [`https`](https://nodejs.org/api/https.html) модула.

2. Създайте базов сървър, който да слуша за заявки от тип `/load/:prop` и да връща `localJson[prop]`, като `localJson` е локален за сървъра обект.

    Създайте клас `Delivery`, който при извикване на негово property `x.prop` посредством [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) пуска заявка `/load/:prop` към нашият сървър и връща даннните от сървъра.
