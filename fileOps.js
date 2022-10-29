const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async() => {
  try{
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
    console.log(data);
    //Delete original file
    // fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseFile.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseFile.txt'), `\n\n-* NEW *-\nIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`);
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseFile.txt'),path.join(__dirname, 'files', 'file1.txt'));
    
  } catch (err) {
    console.log(err)
  }
}

fileOps();


