![](https://raw.githubusercontent.com/asatelit/pwa-pos-terminal/master/doc/images/preview.jpg)

# Online Client Side POS Terminal 🖥️💻📱

Asatelit Point of Sale Terminal is a simple browser-based progressive web application built using common web technologies including HTML, CSS and TypeScript on top of Facebook's [React][react] library.

## Demo

### [pos-terminal.herokuapp.com](https://pos-terminal.herokuapp.com)

### Tech Stack

- [Node.js][node], [npm][npm], [TypeScript][ts], [Babel][babel], [Prettier][prettier] — core platform and dev tools
- [Jest][jest] - unit and snapshot testing

### Prerequisites

- [Node.js][node] v10 or higher + [npm][npm] package manager
- Optionally [VS Code][code] editor with [Project Snippets][vcsnippets],
  [EditorConfig][vceditconfig], [ESLint][vceslint], and [Prettier][vcprettier]
  plug-ins.

### Getting Started

Just clone the repo, install the packages with `npm` and run `npm start`:

```bash
$ git clone https://github.com/rez4rinaldi/pwa-pos-terminal.git
$ cd pwa-pos-terminal   # Change current directory to the newly created one.
$ npm install       # Install Node.js dependencies.
$ npm start         # Launch application.
```

Now you can open your web app in a browser and start hacking.
Whenever you modify any of the source files inside the /src folder, the module bundler (Webpack)
will recompile the app on the fly and refresh all the connected browsers.

Note that the npm start command launches the app in development mode, the compiled output files are not optimized
and minimized in this case.

### How to Build

If you need just to build the app (without running a dev server), simply run:

```shell
$ npm run build
```

This command builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
By default, it also includes a service worker so that your app loads from local cache on future visits.

Your app is ready to be deployed.

### Credit

[![POS Terminal](https://github-readme-stats.vercel.app/api/pin?username=Asatelit&repo=pwa-pos-terminal&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=1D282A)](https://github.com/Asatelit/pwa-pos-terminal)

[node]: https://nodejs.org
[react]: https://github.com/facebook/react
[ts]: https://typescriptlang.org/
[babel]: http://babeljs.io/
[prettier]: https://prettier.io/
[npm]: https://www.npmjs.com/
[code]: https://code.visualstudio.com/
[vcsnippets]: https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[jest]: http://facebook.github.io/jest/
