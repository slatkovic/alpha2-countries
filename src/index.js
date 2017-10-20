var data = require('../data/countries.json')

const resolveName = (countryCode) => {
  const country = data.find(({ code }) => code === countryCode);
  return country ? country.name : undefined;
}

const resolveCode = (countryName) => {
  const country = data.find(({ name }) => name === countryName);
  return country ? country.code : undefined;
}

const getNameCodePairs = () => data

module.exports = {
  resolveName,
  resolveCode,
  getNameCodePairs
}
