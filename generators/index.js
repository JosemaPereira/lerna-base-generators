const packageGenerator = require('./package');
const expressProject = require('./express-app');

module.exports = (plop) => {
  plop.setGenerator('package', packageGenerator);
  plop.setGenerator('express-app', expressProject);
};
