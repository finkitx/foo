'use strict';

/**
 * Return a greeting for the given name.
 *
 * @param {string} [name] - Name to greet. Defaults to "world".
 * @returns {string} The greeting.
 */
function greet(name = 'world') {
  return `Hello, ${name}!`;
}

module.exports = { greet };
