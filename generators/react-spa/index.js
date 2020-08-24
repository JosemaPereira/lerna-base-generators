'use strict';

const packageExists = require('../utils/packageExists');

module.exports = {
  description: 'Add a react based Single Page Application package',
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
        destination: '../packages/react-spa-{{kebabCase name}}/',
        base: './react-spa/hbs',
        templateFiles: ['./react-spa/hbs/**/**', './react-spa/hbs/**/.*', '!./react-spa/hbs/LICENSE.hbs'],
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/react-spa-{{kebabCase name}}/LICENSE',
        templateFile: './react-spa/hbs/LICENSE.hbs',
        abortOnFail: true
      }
    ];

    return actions;
  }
};
