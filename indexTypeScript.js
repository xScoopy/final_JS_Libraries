/* eslint-disable no-plusplus */
/* eslint-disable no-useless-concat */
/* eslint-disable no-console */
/* After installing my libraries, i had to
go into their package.json files to put
a 'src/' in front of index.js under 'main'
to get it to work */
const strHelp = require('scoopy-str-helper');
const TimeAgo = require('javascript-time-ago');
const { dateObject } = require('datelibjs');
const en = require('javascript-time-ago/locale/en.json');
const myData = require('./data.json');

TimeAgo.addDefaultLocale(en);
const when = new TimeAgo('en-US');
// challenge 1
const combineFirstAndLast = function (firstName, lastName) {
  return ''.concat(strHelp.capitalize(firstName), ' ').concat(strHelp.capitalize(lastName));
};
// challenge 2
const constructPurchasedDate = function (purchaseDate) {
  // eslint-disable-next-line new-cap
  const newPurchaseDate = new dateObject(purchaseDate);
  return 'Purchased: '.concat(newPurchaseDate.format('M d, Y'));
};
// challenge 3
const constructLastPayment = function (lastPayment) {
  const pmtDate = new Date(lastPayment);
  return 'Last Payment '.concat(when.format(pmtDate));
};
// challenge 4
const formatPhone = function (phoneNumber) {
  if (typeof phoneNumber === 'number') {
    throw new Error('Please provide phone number in string format');
  }
  if (phoneNumber.length < 10) {
    throw new Error('Phone number was too short');
  }
  if (phoneNumber.length > 10) {
    throw new Error('Phone number too long');
  }
  const areaCode = phoneNumber.slice(0, 3);
  const firstThree = phoneNumber.slice(3, 6);
  const lastFour = phoneNumber.slice(6);
  return 'Phone: ('.concat(areaCode, ')') + ' '.concat(firstThree, '-').concat(lastFour);
};
// include car make/model
const constructCarInfo = function (carMake, carModel) {
  return ''.concat(strHelp.capitalize(carMake), ' ').concat(strHelp.capitalize(carModel));
};
// print all data to console
const printData = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log(combineFirstAndLast(data[i].first_name, data[i].last_name));
    console.log(constructCarInfo(data[i].make, data[i].model));
    console.log(constructPurchasedDate(data[i].purchased));
    console.log(constructLastPayment(data[i].lastpayment));
    console.log(formatPhone(data[i].phone));
  }
};
printData(myData);
module.exports.formatPhone = formatPhone;
