const shell = require('shelljs');
const chalk = require('chalk');
const path = require('path');
const originalPackageJsonContent = require('../../package.json');

const DIST_DIR = `dist`;

shell.echo(`Generating package.json`);
const newPackageJsonPath = path.join(DIST_DIR, 'package.json');

const {
  name,
  version,
  license,
  description,
  author,
  keywords
} = originalPackageJsonContent;

const packageJsonContent = {
  name,
  version,
  license,
  description,
  author,
  keywords
};

shell.ShellString(JSON.stringify(packageJsonContent)).to(newPackageJsonPath);

shell.echo(chalk.green(`End generating package.json`));
