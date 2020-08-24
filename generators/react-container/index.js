'use strict';

module.exports = {
  description: 'Add a container component',
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
      type: 'input',
      name: 'dumbComponentName',
      message: 'What is the dumb component name to be contained?',
      validate: value => {
        return /.+/.test(value) ? true : 'The dumb component name is required';
      }
    },
    {
      type: 'confirm',
      name: 'wantActions',
      default: true,
      message: 'Do you want actions for this container?'
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message:
        'Do you want sagas for workflows? (e.g. fetching data, business flows)',
      when: data => data.wantActions
    }
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: '{{destinationpath}}/containers/{{properCase name}}/constants.js',
        templateFile: './react-container/hbs/constants.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '{{destinationpath}}/containers/{{properCase name}}/container.js',
        templateFile: './react-container/hbs/container.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '{{destinationpath}}/containers/{{properCase name}}/index.js',
        templateFile: './react-container/hbs/index.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '{{destinationpath}}/containers/{{properCase name}}/reducer.js',
        templateFile: './react-container/hbs/reducer.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '{{destinationpath}}/containers/{{properCase name}}/selectors.js',
        templateFile: './react-container/hbs/selectors.js.hbs',
        abortOnFail: true
      }
    ];

    if (data.wantActions) {
      actions.push({
        type: 'add',
        path: '{{destinationpath}}/containers/{{properCase name}}/actions.js',
        templateFile: './react-container/hbs/actions.js.hbs',
        abortOnFail: true
      });
    }

    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '{{destinationpath}}/containers/{{properCase name}}/saga.js',
        templateFile: './react-container/hbs/saga.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path:
          '{{destinationpath}}/containers/{{properCase name}}/tests/saga.test.js',
        templateFile: './react-container/hbs/tests/saga.test.js.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
