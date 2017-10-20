# alpha2-countries

Exposes ISO 3166-1 alpha-2 country names and codes and simple name/code resolution abilities.

Uses data from https://datahub.io/core/country-list.


### Usage

```javascript
const countries = require('alpha2-countries')
```

```javascript
// Input: 'US'
// Output: 'United States'
countries.resolveName('US')
```

```javascript
// Input: 'United States'
// Output: 'US'
countries.resolveCode('United States')
```

```javascript
// Output: [..., { code: 'US', name: 'United States' }, ...]
countries.getNameCodePairs()
```


### Dependencies
Has no external dependencies.
