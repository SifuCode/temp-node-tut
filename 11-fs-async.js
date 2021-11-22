const { readFile, writeFile } = require('fs');

console.log('Start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result2) => {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(result2);
        const second = result2;
        writeFile('./content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result3) => {
                if (err) {
                    console.log(err);
                }
                const third = result3;
                console.log('Done with this task!');
        })
    })
});

console.log('Starting next Task!!');
