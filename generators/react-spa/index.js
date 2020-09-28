'use strict';

const packageExists = require('../utils/packageExists');
const DEFAULT_ORGANIZATION= "Sakura Pereira";

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
