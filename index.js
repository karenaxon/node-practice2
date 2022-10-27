const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
  if(err) throw err;
  // console.log(data)
})

// exit on uncaught errors
process.on('uncaughtException', err => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
})

fs.writeFile(path.join(__dirname, 'files', 'file1.txt'),`If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`, (err) => {
  if(err) throw err;
  console.log('\nThe file has been written!')
})