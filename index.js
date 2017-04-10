'use strict';

const _ = require('lodash');
const data = require('./data');

exports.getData = function () {
  return data;
};

exports.getCurrencyByCountryISOCode = function (ISOCode) {
  return _.find(data, { countryISOCode: ISOCode });
};

exports.getCountriesByCurrencyISOCode = function (ISOCode) {
  return _.filter(data, function (curr) {
    return curr.currency.isoCode === ISOCode;
  });
};

exports.getCurrencyByCurrencyISOCode = function (ISOCode) {
  return _.find(data, function (curr) {
    return curr.currency.isoCode === ISOCode;
  }).currency;
};

exports.getCurrenciesBySymbol = function (symbol) {
  return _.filter(data, function (curr) {
    return curr.currency.symbol === symbol;
  });
};

exports.getCurrencyByName = function (name) {
  return _.find(data, function (curr) {
    return curr.currency.name.toLowerCase() === name.toLowerCase();
  }).currency;
};

exports.getCurrenciesByFractionalUnit = function (fractionalUnit) {
  return _.filter(data, function (curr) {
    return curr.currency.fractionalUnit.name === fractionalUnit;
  });
};

exports.getCurrenciesByFractionalUnitNumberToBasic = function (numberToBasic) {
  return _.filter(data, function (curr) {
    return curr.currency.fractionalUnit.numberToBasic === numberToBasic;
  });
};

exports.getCurrencyISOCodes = function () {
  return _.chain(data)
            .map(function (curr) {
              return curr.currency.isoCode;
            })
            .uniq()
            .omitBy(_.isUndefined)
            .omitBy(_.isNull)
            .toArray()
            .value();
};

exports.getCurrencyNames = function () {
  return _.chain(data)
            .map(function (curr) {
              return curr.currency.name;
            })
            .uniq()
            .omitBy(_.isUndefined)
            .omitBy(_.isNull)
            .omitBy(_.isLength)
            .toArray()
            .value();
};

exports.getCountryISOCodes = function () {
  return _.chain(data)
            .map(function (curr) {
              return curr.countryISOCode;
            })
            .uniq()
            .omitBy(_.isUndefined)
            .omitBy(_.isNull)
            .toArray()
            .value();
};

exports.getCountryNames = function () {
  return _.chain(data)
            .map(function (curr) {
              return curr.countryName;
            })
            .uniq()
            .omitBy(_.isUndefined)
            .omitBy(_.isNull)
            .toArray()
            .value();
};
