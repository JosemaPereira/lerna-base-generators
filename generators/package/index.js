'use strict';

const packageExists = require('../utils/packageExists');

module.exports = {
  description: 'Add a typescript package',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of package',
      choices: () => ['Typescript contract', 'Typescript implementation']
    },
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
    let includeTesting = false;

    data.currentYear = new Date().getFullYear();

    switch (data.type) {
      case 'Typescript contract':
        data.contractPrefix = 'contract-';
        break;
      default:
        data.contractPrefix = '';
        includeTesting = true;
    }

    const actions = [
      {
        type: 'add',
        path: '../packages/{{contractPrefix}}{{kebabCase name}}/.gitignore',
        templateFile: './package/.gitignore',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/{{contractPrefix}}{{kebabCase name}}/.yarnrc',
        templateFile: './package/.yarnrc',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/{{contractPrefix}}{{kebabCase name}}/LICENSE',
        templateFile: './package/LICENSE.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/{{contractPrefix}}{{kebabCase name}}/package.json',
        templateFile: './package/package.json.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/{{contractPrefix}}{{kebabCase name}}/README.md',
        templateFile: './package/README.md.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/{{contractPrefix}}{{kebabCase name}}/tsconfig.json',
        templateFile: './package/tsconfig.json',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/{{contractPrefix}}{{kebabCase name}}/src/index.ts',
        templateFile: './package/src/index.ts',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/{{contractPrefix}}{{kebabCase name}}/src/public_api.ts',
        templateFile: './package/src/public_api.ts.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path:
          '../packages/{{contractPrefix}}{{kebabCase name}}/src/{{properCase name}}.service.ts',
        templateFile: './package/src/service.ts.hbs',
        abortOnFail: true
      }
    ];

    if (includeTesting) {
      actions.push({
        type: 'add',
        path:
          '../packages/{{contractPrefix}}{{kebabCase name}}/karma.conf.js',
        templateFile: './package/karma.conf.js',
        abortOnFail: true
      });

      actions.push({
        type: 'add',
        path:
          '../packages/{{contractPrefix}}{{kebabCase name}}/test/{{properCase name}}.service.spec.ts',
          templateFile: './package/test/service.spec.ts.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
