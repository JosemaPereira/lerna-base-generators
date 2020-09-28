const packageGenerator = require('./package');
const expressProject = require('./express-app');
const reactProject = require('./react-spa');

module.exports = (plop) => {
  plop.setGenerator('package', packageGenerator);
  plop.setGenerator('express-app', expressProject);
  plop.setGenerator('react spa', reactProject);
};
