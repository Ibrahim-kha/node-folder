// os
// path
// http
// fs

const os = require('os');
// info about current user 
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)

//path
const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute);

// file  modules
// 1. async (non blocking) 2. sync (blocking)

const { readFileSync, writeFileSync } = require('fs');
//console.log('start')
const first = readFileSync('./content/firsttext.txt', 'utf8');
const second = readFileSync('./content/secondtext.txt', 'utf8');

// console.log(first, second);

// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result : ${first}, ${second}`, {flag: 'a'}
// )

//console.log('done with task start next one');

const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/firsttext.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/secondtext.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with task')
            })
    })
})

console.log('starting next task');
