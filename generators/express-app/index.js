'use strict';

const packageExists = require('../utils/packageExists');
const DEFAULT_ORGANIZATION= "Sakura Pereira";

module.exports = {
  description: 'Add a Express app',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      validate: value => {
        if (/.+/.test(value)) {
          return packageExists(value)
            ? 'A package with this name already exists'
            : true;
        }

        return 'The name is required';
      }
    },
    {
      type: 'input',
      name: 'organization',
      message: 'Organization Name. Default: ' + DEFAULT_ORGANIZATION,
    }
  ],
  actions: data => {
    data.currentYear = new Date().getFullYear();
    data.organization = data.organization || DEFAULT_ORGANIZATION;

    const actions = [
      {
        type: 'addMany',
        destination: '../packages/express-app-{{kebabCase name}}/',
        base: './express-app/hbs',
        templateFiles: ['./express-app/hbs/**/**', './express-app/hbs/**/.*', '!./express-app/hbs/LICENSE.hbs'],
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/express-app-{{kebabCase name}}/LICENSE',
        templateFile: './express-app/hbs/LICENSE.hbs',
        abortOnFail: true
      }
    ];

    return actions;
  }
};
