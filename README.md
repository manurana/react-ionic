```bash
create-react-app react-ionic --typescript
cd react-ionic/
yarn add @ionic/core @ionic/react react-router react-router-dom @types/react-router @types/react-router-dom
```

The following is to configure eslint/prettier for VSCODE.  Eslint is alreay configured for the command line TS compiler, as part of `eslint-config-react-app`, which is installed by default as part of `react-scripts`

[https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675](https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675)

[https://dorshinar.me/linting-your-react+typescript-project-with-eslint-and-prettier](https://dorshinar.me/linting-your-react+typescript-project-with-eslint-and-prettier)



```bash
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier
```

```bash
yarn add -D eslint-config-react-app eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

`eslint-config-react-app` (and dependencies) are already included in react-scripts, but is required separately for the `@typescript-eslint/eslint-plugin` to resolve. `babel-eslint@10.x` was the only dep not installed manually. https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/package.json






