const fs = require('fs').promises;

fs.writeFile('./filesystem/writeme.txt', '글이 입력됩니다')
    .then(() => {
        return fs.readFile('./filesystem/wirteme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.log(err);
    });