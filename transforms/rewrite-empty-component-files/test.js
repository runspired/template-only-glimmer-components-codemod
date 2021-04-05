'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'rewrite-empty-component-files',
});