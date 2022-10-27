const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data)
})

// exit on uncaught errors
process.on('uncaughtException', err => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
})