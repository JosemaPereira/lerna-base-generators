'use strict';

const packageExists = require('../utils/packageExists');

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
    }
  ],
  actions: data => {
    data.currentYear = new Date().getFullYear();

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
