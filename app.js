/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const yargs = require('yargs');
const { format } = require('date-fns');

const { argv } = yargs
  .option('format', {
    alias: 'f',
    description: 'Format the date string',
    type: 'boolean',
  });

// Get the current date
const currentDate = new Date();

// Check if the --format flag is included
if (argv.format) {
  // Format the date string using the specified format
  const formattedDate = format(currentDate, 'dddd, MMMM Do YYYY, h:mm:ss a');
  console.log('Formatted Date:', formattedDate);
} else {
  // Display the default date string
  console.log('Default Date:', currentDate.toString());
}
