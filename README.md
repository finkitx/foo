# foo

`foo` is a Node.js library and command-line tool.

- **Library** — import `foo` into your own Node.js project.
- **CLI** — run `foo` from the terminal.

## Requirements

- [Node.js](https://nodejs.org/) 18 or later
- npm (bundled with Node.js)

## Install

Install as a dependency (library):

```bash
npm install foo
```

Install globally to use it as a command-line tool:

```bash
npm install -g foo
```

## Run

Run the CLI without installing it:

```bash
npx foo
```

Or, after a global install:

```bash
foo
```

Show usage and available options:

```bash
foo --help
```

## Usage as a library

```js
const foo = require('foo');
// or, with ES modules:
// import foo from 'foo';
```

## License

BSD 3-Clause License. See [LICENSE](LICENSE) for the full text.
