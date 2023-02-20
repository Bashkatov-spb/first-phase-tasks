const fs = require('fs').promises;

const readFile = fs.readFile('1.txt', 'utf-8');
readFile.then((res) => console.log(res));

async function file() {
  const checkedFiled = await fs.readFile('1.txt', 'utf-8');
  console.log(checkedFiled);
}
file()