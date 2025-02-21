'use strict';

const process = require('process');
const test = require('supertape');
const fs = require('fs');
const {reRequire} = require('mock-require');
const columnsPath = '../../server/columns';

test('columns: prod', (t) => {
    const {NODE_ENV} = process.env;
    
    process.env.NODE_ENV = '';
    const columns = reRequire(columnsPath);
    
    process.env.NODE_ENV = NODE_ENV;
    
    t.equal(columns[''], '');
    t.end();
});

test('columns: dev', (t) => {
    const {NODE_ENV} = process.env;
    
    process.env.NODE_ENV = 'development';
    
    const columns = reRequire(columnsPath);
    const css = fs.readFileSync(`${__dirname}/../../css/columns/name-size-date.css`, 'utf8');
    
    process.env.NODE_ENV = NODE_ENV;
    
    t.equal(columns['name-size-date'], css);
    t.end();
});
