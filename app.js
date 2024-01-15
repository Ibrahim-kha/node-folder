// Globals - No Window !!!

// __dirname - path to current directory
// __filename - file name
// require - function to use module (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed
console.log(__dirname);
// setInterval(() => {
//     console.log('hello world')
// }, 1000);

// Modules
// CommonJs, every file is module (by default)
// Modules - encapsulated code (only share minimum)
const names = require('./names');
const sayHi = require('./util');
const data = require('./names-2');
require('./fileimport');
console.log(data);
console.log(names)

sayHi(names.jhon)
sayHi(names.peter)
sayHi('susan')

