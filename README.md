# Regex from Extensions

Get a regex expression from a list of extensions. Useful with webpack's `test` property.

## Example

```js
const regexFromExtensions = require('regex-from-extensions');

// resolves to /\.(js|jsx|ts|tsx)$/
regexFromExtensions(['js', 'jsx', 'ts', 'tsx']);
```

## Syntax

```
regexFromExtensions(array)
```

## License

MIT
