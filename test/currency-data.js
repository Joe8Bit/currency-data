import test from 'ava';
import CurrencyData from '../index';

test('Should expose .getData() and expose all data', t => {
  t.same(CurrencyData.getData(), require('../data'));
});

test('Should expose .getCurrencyByCountryISOCode() and get the correct data', t => {
  let gbr = CurrencyData.getCurrencyByCountryISOCode('GBR');
  t.is(gbr.countryName, 'United Kingdom');
  t.is(gbr.countryISOCode, 'GBR');
  t.is(gbr.currency.name, 'British Pound');
  t.is(gbr.currency.symbol, '£');
  t.is(gbr.currency.isoCode, 'GBP');
  t.is(gbr.currency.fractionalUnit.name, '£');
  t.is(gbr.currency.fractionalUnit.numberToBasic, 100);
});

test('Should expose .getCountriesByCurrencyISOCode() and get the correct data', t => {
  t.same(CurrencyData.getCountriesByCurrencyISOCode('GBP'), require('./fixtures/gbp'));
});

test('Should expose .getCurrencyByCurrencyISOCode() and get the correct data', t => {
  let gbp = CurrencyData.getCurrencyByCurrencyISOCode('GBP');
  t.is(gbp.name, 'British Pound');
  t.is(gbp.symbol, '£');
  t.is(gbp.isoCode, 'GBP');
  t.is(gbp.fractionalUnit.name, '£');
  t.is(gbp.fractionalUnit.numberToBasic, 100);
});

test('Should expose .getCurrencyByName() and get the correct data', t => {
  let gbp = CurrencyData.getCurrencyByName('British Pound');
  t.is(gbp.name, 'British Pound');
  t.is(gbp.symbol, '£');
  t.is(gbp.isoCode, 'GBP');
  t.is(gbp.fractionalUnit.name, '£');
  t.is(gbp.fractionalUnit.numberToBasic, 100);
});

test('Should expose .getCurrenciesBySymbol() and get the correct data', t => {
  t.same(CurrencyData.getCurrenciesBySymbol('£'), require('./fixtures/pound-symbol'));
});

test('Should expose .getCurrenciesByFractionalUnit() and get the correct data', t => {
  t.same(CurrencyData.getCurrenciesByFractionalUnit('Cent'), require('./fixtures/fractional-unit-name'));
});

test('Should expose .getCurrenciesByFractionalUnitNumberToBasic() and get the correct data', t => {
  t.same(CurrencyData.getCurrenciesByFractionalUnitNumberToBasic(10), require('./fixtures/fractional-unit-amount'));
});

test('Should expose .getCurrencyISOCodes() and get the correct data', t => {
  t.same(CurrencyData.getCurrencyISOCodes(), require('./fixtures/currency-iso-codes'));
});

test('Should expose .getCurrencyNames() and get the correct data', t => {
  t.same(CurrencyData.getCurrencyNames(), require('./fixtures/currency-names'));
});

test('Should expose .getCountryISOCodes() and get the correct data', t => {
  t.same(CurrencyData.getCountryISOCodes(), require('./fixtures/country-iso-codes'));
});

test('Should expose .getCountryNames() and get the correct data', t => {
  t.same(CurrencyData.getCountryNames(), require('./fixtures/country-names'));
});
