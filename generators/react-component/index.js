'use strict';

module.exports = {
  description: 'Add a react dumb component',
  prompts: [
    {
      type: 'input',
      name: 'destinationpath',
      message: 'Target path root for components directory'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      validate: value => {
        return /.+/.test(value) ? true : 'The name is required';
      }
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?'
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?'
    }
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: '{{destinationpath}}/components/{{properCase name}}/Component.js',
        templateFile: './react-component/templates/Component.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '{{destinationpath}}/components/{{properCase name}}/index.js',
        templateFile: './react-component/templates/index.js.hbs',
        abortOnFail: true
      }
    ];

    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '{{destinationpath}}/components/{{properCase name}}/messages.js',
        templateFile: './react-component/templates/messages.js.hbs',
        abortOnFail: true
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '{{destinationpath}}/components/{{properCase name}}/loadable.js',
        templateFile: './react-component/templates/loadable.js.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
