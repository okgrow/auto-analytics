module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "max-len": 1, // Sometimes necessary to have long strings and not risk whitespace
    "no-restricted-globals": 1, // Allow usage of globals like location
  }
}
