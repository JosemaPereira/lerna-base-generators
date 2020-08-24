# Create new React Smart Component (Container)

* At the root of your project run command

``` bash
$ yarn generate
```

* Pick up `react-container` option and fill the prompts.

* When asked for `Target path root for components directory` use an absolute path to the directory that contains your smart components directory.

* When asked for `What is the dumb component name to be contained?` type the name of an already existing component with the markup for you smart component.

* If your componente will have any user input or interaction you should responde `yes` for `Do you want actions for this container?`.

* If your componente will have any user input or interaction is highly recommended to responde `yes` for `Do you want sagas for workflows?`.

That's it happy container generating

![demo gif](./demo-no-interactive.gif "Container generation demo")*Container without interaction generation*

![demo gif](./demo-interactive.gif "Interactive container generation demo")*Interactive container without saga generation*

![demo gif](./demo-interactive-workflow.gif "Interactive container using saga generation demo")*Interactive container with saga generation*

## Useful Visual Studio Code extensión

Do you want to make your life easier when in vscode? Well, this generator is compatible with [Plop File Templates
](https://marketplace.visualstudio.com/items?itemName=SamKirkland.plop-templates) you may try it.
