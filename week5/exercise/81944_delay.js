
function delay(fn) {
    const del = 3_000;
    return new Promise((resolve, reject) => {
        const startTime = new Date().getTime();
        const result = fn();
        const endTime = new Date().getTime();

        const diff = endTime - startTime;
        if(diff > del) {
            return reject('Took too long');
        }

        setTimeout(() => { 
            resolve(result);
        }, del - diff);
    })
            
}

delay(() => {
    return fs.readFileSync("a.txt", 'utf-8');
})
.then(console.log);