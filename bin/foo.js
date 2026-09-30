#!/usr/bin/env node
'use strict';

const { greet } = require('../lib');

const USAGE = `Usage: foo [options] [name]

Print a greeting.

Options:
  -h, --help     Show this help message
  -v, --version  Show the version number

Examples:
  foo
  foo Ada
`;

function main(argv) {
  const args = argv.slice(2);

  if (args.includes('-h') || args.includes('--help')) {
    process.stdout.write(USAGE);
    return 0;
  }

  if (args.includes('-v') || args.includes('--version')) {
    process.stdout.write(`${require('../package.json').version}\n`);
    return 0;
  }

  const name = args[0];
  process.stdout.write(`${greet(name)}\n`);
  return 0;
}

if (require.main === module) {
  process.exitCode = main(process.argv);
}

module.exports = { main };
