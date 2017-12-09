function regexFromExtensions(extensions = []) {
  return new RegExp(`.(${extensions.join('|')})$`);
}

module.exports = regexFromExtensions;
