// Modules  
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// local
const secret = 'SUPER SECRET';
// share
const john = 'john';
const peter = 'Peter';

// console.log(module);

module.exports = { john, peter };
