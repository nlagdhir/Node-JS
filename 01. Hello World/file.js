const fs = require('fs');

// Sync filesystem
fs.writeFileSync('./text.txt', 'Hey World'); 

// Async filesystem
fs.writeFile('./text.txt', 'Hello World', (err) => console.log(err,'123'));

const result = fs.readFileSync('./contact.txt', 'utf-8');
console.log(result);

fs.readFile('./contact.txt', "utf-8", function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

fs.appendFileSync('./test.txt', `${Date.now()} Hello World \n`); 

console.log(fs.statSync('./test.txt'));
