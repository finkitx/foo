'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { execFileSync } = require('node:child_process');
const path = require('node:path');

const { greet } = require('../lib');

const CLI = path.join(__dirname, '..', 'bin', 'foo.js');

test('greet defaults to world', () => {
  assert.strictEqual(greet(), 'Hello, world!');
});

test('greet uses the provided name', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
});

test('cli greets the provided name', () => {
  const out = execFileSync(process.execPath, [CLI, 'Ada'], { encoding: 'utf8' });
  assert.strictEqual(out.trim(), 'Hello, Ada!');
});

test('cli prints usage with --help', () => {
  const out = execFileSync(process.execPath, [CLI, '--help'], { encoding: 'utf8' });
  assert.match(out, /Usage: foo/);
});
