# Framework neutral template for building npm packages with Webpack and Babel

## Features
- Builds a clientside npm package with webpack and babel.
- Treeshaking with webpack
- A webserver to serve a testpage when developing your component.
- Also builds seperate css, fonts and other files.
  (Either from seperate entry points for css, or from `require` statements in JavaScript code.)
- Resulting library can be required with CommonJS.
- Externalizes all node_modules components for release builds. (Other node modules this package depends on, will be brought in as NPM dependecies and required in the resulting library.)

## Goals
- No need install any global npm packages!
- This template will act as a starting point for creating a clientside npm package.
- The output must be compatible with commonJS, and also work when concatenated. with other javascript files.
- The template should contain as few devDependencies as possible,
  so that it will be easy to evolve the build configuration as different packages are updated or made obsolete.

## How to use this template project
1. Copy the files and structure of this project.
   (If you use `git clone` you would probably want to remove the `.git` directory before initializing your new repo.)
2. Modify `package.json` to reflect the correct names.
3. Run `npm update` to load dependencies.
4. Create your app in the `src` folder.
5. Run `npm start` to start the dev-server. Navigate to (localhost:8080)[http://localhost:8080]
6. Build by running `npm run build`.
   (`npx webpack` also works, but doesn't clean out the `dist` directory first.)

### ...or
1. Create a folder: `src`.
2. Copy five files: `webpack.*.config.js` (=3 files), and `.gitignore` and `package.json`.
3. Modify `package.json`, and run `npm update` to pull inn all dependencies.

## Adding loaders or plugins
- Loaders and plugins that are common to all build configuration should be added to `webpack.common.config.js`
- `webpack.serve.config.js` and `webpack.build.config.js` contain additional configuration that is specific for the different builds.

### Adding support for Typescript
Run on the commandline:
```bash
npm install -D typescript awesome-typescript-loader source-map-loader
```

Add the following object to `rules` in webpack.common.config:

```javascript
{
  test: /\.ts$/,
  use: "awesome-typescript-loader"
}
```

- Optionally, change the entry point (in webpack.common.config) to "index.ts"
- Optionally, add `.ts` extention to the `resolve` element so that typescript files can be required without the `.ts` extension:

```javascript
resolve: {
  extensions: ['.js', '.ts']
}
```

### Adding support for React JSX
Run on the commandline:

```bash
npm install -D babel-preset-react
npm install -S react react-dom
```

Add `"react"` to the presets array in the `.babelrc` file. If you haven't modified  `.babelrc` yet, it will look like this:

```javascript
{
  "presets": [["env", {"modules": false}], "react"],
  "plugins": ["transform-object-rest-spread", "angularjs-annotate"]
}
```

- Optionally, change the entry point (in webpack.common.config) to "index.jsx"
- Optionally, add `.jsx` extention to the `resolve` element so that jsx files can be required without the `.jsx` extension:

```javascript
resolve: {
  extensions: ['.js', '.jsx']
}
```

### Adding support for Angular 1.x
Adding the `ng-annotate-loader` saves you from doubly declaring your angular dependency injections.

Run on the commandline:

```bash
npm install -D babel-plugin-angularjs-annotate
npm install -S angular
```

Add `"angularjs-annotate"` to the plugins array in the `.babelrc` file. If you haven't modified  `.babelrc` yet, it will look like this:

```javascript
{
  "presets": [["env", {"modules": false}]],
  "plugins": ["transform-object-rest-spread", "angularjs-annotate"]
}
```
