#!/usr/bin/env node
'use strict';

const cli = require('codemod-cli');
const cleanupRemovableFiles = require('../src/cleanup-files')

const JS_TRANSFORM = 'rewrite-empty-component-files';
const HBS_TRANSFORM = 'rewrite-template-for-empty-component-files';
const TRANSFORM_ALL = 'template-only-components-codemod';

const transformName = process.argv[2]; /* transform name */
const transformArgs = process.argv.slice(3) /* paths or globs */

async function runTransforms() {
  
    // the desired way, run these transforms together
  if (transformName === TRANSFORM_ALL) {
    await cli.runTransform(__dirname, TRANSFORM_JS, transformArgs);
    await cleanupRemovableFiles();
    await cli.runTransform(__dirname, TRANSFORM_HBS, transformArgs);
  
    // allow individual runs (that may fail)
  } else if (transformName === JS_TRANSFORM || transformName === HBS_TRANSFORM) {
    await cli.runTransform(__dirname, transformName, transformArgs);
    if (transformName === JS_TRANSFORM) {
      await cleanupRemovableFiles();
    }
  } else {
    throw new Error(`Unknown tranform: ${transformName}`);
  }
}

runTransforms();