const fs = require('fs');
const path = require('path');

const packages = fs.readdirSync(
  path.join(__dirname, '../../packages')
);

function packageExists(comp) {
  return packages.indexOf(comp) >= 0;
}

module.exports = packageExists;
