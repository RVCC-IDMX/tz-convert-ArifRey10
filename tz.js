/* eslint-disable no-template-curly-in-string */
/* eslint-disable prefer-destructuring */
/* eslint-disable eqeqeq */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

let targetTimezone;

if (process.argv.length != 3) {
  console.log('Usage; node <script-file> <timezone');
  process.exit(1);
} else {
  targetTimezone = process.argv[2];
}

console.log('The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}');
