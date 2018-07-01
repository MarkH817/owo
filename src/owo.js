/**
 * OwO
 * @param {string} text
 * @returns {string}
 */
const transform = text => {
  return text.replace(/l|r/g, 'w').replace(/L|R/g, 'W')
}

module.exports = {
  transform
}
