## currency-data

[![Circle CI](https://circleci.com/gh/Joe8Bit/currency-data.svg?style=svg)](https://circleci.com/gh/Joe8Bit/currency-data)

[![Coverage Status](https://coveralls.io/repos/github/Joe8Bit/currency-data/badge.svg?branch=master)](https://coveralls.io/github/Joe8Bit/currency-data?branch=master)
[![Dependency status](https://david-dm.org/joe8bit/currency-data.svg)](https://david-dm.org/Joe8bit/currency-data)
[![Dependency status](https://david-dm.org/Joe8bit/currency-data/dev-status.svg)](https://david-dm.org/Joe8bit/currency-data#info=devDependencies&view=table)
[![npm version](https://badge.fury.io/js/currency-data.svg)](https://badge.fury.io/js/currency-data)

Currency data is an npm package for exposing information about the world's currencies and their usage. It's core value lies in `./data.json` and it exposes a number of utility methods for interacting with it's content, however, requiring that data yourself is of course possible (and encouraged). You can do so thusly:

```javascript
const rawCurrencyData = require('./node_modules/currency-data/data'); 
```

There are a number of other NPM modules that have similar functionality, but most of them have incomplete data (e.g. only returning *one* currency that uses the '£' symbol?! There are dozens!). As a result this module attempts to offer a *complete and comprehensive* set of data about the worlds currencies.

Need information about the currency used in the Nagorno-Karabakh Republic? This is the module for you! The answer is it uses two currencies: the Nagorno-Karabakh Dram and the Armenian Dram!

## Usage

```javascript
const currencyData = require('currency-data');

currencyData.getCurrenciesBySymbol('£'); // Returns an Array of all currencies that use the '£' symbol
```

## Data structure

The core data structure is as follows:

```json
{
	"countryName": "United States",
	"countryISOCode":"USA",
	"currency": { 
		"name": "United States Dollar",
		"symbol": "$",
		"isoCode": "USD",
		"fractionalUnit": {
			"name":"Cent",
			"numberToBasic":100
		}
	}
}

```

## The public API

The public API is very high level, and frankly, verbose. It was deliberatley designed that way to be self explanatory. I know *I* got confused with the different ISO standards for describing counties and currencies, so I wanted to make the public methods eaiser to grok.

| API Method | Arguments | Return type |Description |
|---|---|---|---|
| `.getData()` | None | `Array` | A utility method to return all of the data from the module in a single large Array |
| `.getCurrencyByCountryISOCode()` | `String` / An [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country code | `Object` | Returns the currency used in a specified country |
| `.getCountriesByCurrencyISOCode()` | `String` /  An [ISO_4217](https://en.wikipedia.org/wiki/ISO_4217) currency code | `Array` | Returns an Array of country objects that use a currency e.g. all the countries that use the USD |
| `.getCurrencyByCurrencyISOCode()` | `String` /  An [ISO_4217](https://en.wikipedia.org/wiki/ISO_4217) currency code | `Object` | Returns just the `currency` object (see Data Structure above) for a currency |
| `.getCurrenciesBySymbol()` | `String` / a currency symbol e.g. `$/£/€` | `Array` | Returns an Array of all currencies that use that symbol |
| `.getCurrencyByName()` | `String` e.g. `British Pound` | `Object` | Returns just the currency object (see Data Structure above) for a currency |
| `.getCurrenciesByFractionalUnit()` | `String` e.g. `Cent` | `Array` | Returns an Array of all the currencies that use a fractional unit |
| `.getCurrenciesByFractionalUnitNumberToBasic()` | `Integer` e.g. `100` | `Array` | A niche method, but it returns all the currencies that share the property of number of fractional units to a basic unit |
| `.getCurrencyISOCodes()` | None | `Array` | Utility method that returns all of the available currency ISO codes, please remember some currencies do not have assigned ISO codes and so won't be returned |
| `.getCurrencyNames()` | None | `Array` | Utility method that returns the names of all the available currencies |
| `.getCountryISOCodes()` | None | `Array` | Utility method that returns the names of the ISO codes of all available countries |
| `.getCountryNames()` | None | `Array` | Utility method that returns the names of the all the available countries |

If you have any requests for public methods please file an issue, these were created to meet my own use case for this module but I can see how others would also be useful.

## Testing

```
npm test
npm local-coverage // runs tests and generates coverage report
```

## TODO

* Return all available currency denominations for a currency

## Contrubuting

All contributors will abide by the `CODE_OF_CONDUCT.md`.

## License

MIT