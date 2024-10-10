# PocAokPortalrahmen

## More on CI setup
[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/v5Hi7HWYpU)


## Run tasks
You can start each app individually or the shell that contains remote1 and remote2 as micro-frontends. Please choose new ports if you run them all at the same time: e.g. --port=4200
To run the dev server for your apps:

Angular-apps:
```sh
npx nx serve shell
```
```sh
npx nx serve remote1
```

```sh
npx nx serve remote2
```

React-app:
```sh
npx nx serve remote3
```


Following commands go for each app and lib.
To create a production bundle:
```sh
npx nx build shell
```

All infos on certain apps or libs:

```sh
npx nx show project shell
```
Example
![img_1.png](img_1.png)


See the project graph:
```sh
npx nx graph
```
Currently:
![img.png](img.png)


## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature. 
Use the plugin's generator to create new projects. To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

## Add new EsLint-Rules
New ESLint-rules can be created with one command:
```sh
npx nx g @nx/eslint:workspace-rule my-custom-rule
```
There is one rule that currently is set to global error for all libs Angular and React apps.

## Useful links
Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
