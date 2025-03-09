
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.error('Error reading first file:', err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.error('Error reading second file:', err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here's the result: ${first}, ${second}`,
            (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    return;
                }
                console.log('File written successfully');
            }
        );
    });
});


