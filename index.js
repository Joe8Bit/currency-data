'use strict';

const _ = require('lodash');
const data = require('./data');

exports.getData = () => {
  return data;
};

exports.getCurrencyByCountryISOCode = (ISOCode) => {
  return _.find(data, { countryISOCode: ISOCode });
};

exports.getCountriesByCurrencyISOCode = (ISOCode) => {
  return _.filter(data, (curr) => {
    return curr.currency.isoCode === ISOCode;
  });
};

exports.getCurrencyByCurrencyISOCode = (ISOCode) => {
  return _.find(data, (curr) => {
    return curr.currency.isoCode === ISOCode;
  }).currency;
};

exports.getCurrenciesBySymbol = (symbol) => {
  return _.filter(data, (curr) => {
    return curr.currency.symbol === symbol;
  });
};

exports.getCurrencyByName = (name) => {
  return _.find(data, (curr) => {
    return curr.currency.name.toLowerCase() === name.toLowerCase();
  }).currency;
};

exports.getCurrenciesByFractionalUnit = (fractionalUnit) => {
  return _.filter(data, (curr) => {
    return curr.currency.fractionalUnit.name === fractionalUnit;
  });
};

exports.getCurrenciesByFractionalUnitNumberToBasic = (numberToBasic) => {
  return _.filter(data, (curr) => {
    return curr.currency.fractionalUnit.numberToBasic === numberToBasic;
  });
};

exports.getCurrencyISOCodes = () => {
  return _.chain(data)
            .map((curr) => {
              return curr.currency.isoCode;
            })
            .uniq()
            .omitBy(_.isUndefined)
            .omitBy(_.isNull)
            .toArray()
            .value();
};

exports.getCurrencyNames = () => {
  return _.chain(data)
            .map((curr) => {
              return curr.currency.name;
            })
            .uniq()
            .omitBy(_.isUndefined)
            .omitBy(_.isNull)
            .omitBy(_.isLength)
            .toArray()
            .value();
};

exports.getCountryISOCodes = () => {
  return _.chain(data)
            .map((curr) => {
              return curr.countryISOCode;
            })
            .uniq()
            .omitBy(_.isUndefined)
            .omitBy(_.isNull)
            .toArray()
            .value();
};

exports.getCountryNames = () => {
  return _.chain(data)
            .map((curr) => {
              return curr.countryName;
            })
            .uniq()
            .omitBy(_.isUndefined)
            .omitBy(_.isNull)
            .toArray()
            .value();
};
