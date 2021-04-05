'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'rewrite-templates-for-empty-component-files',
});