'use strict';

const process = require('process');
const getMessage = (a) => a?.message || a;

module.exports = (...args) => {
    const messages = args.map(getMessage);
    
    console.error(...messages);
    process.exit(1);
};
