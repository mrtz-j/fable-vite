# Fable Template with Vite

Minimal template for Fable apps using [Vite](https://vitejs.dev/). Based on the [Azure Static Web Apps template](https://github.com/aaronpowell/swa-fable-template).

## Requirements

* [dotnet SDK](https://www.microsoft.com/net/download/core) 6.0 or higher
* [node.js](https://nodejs.org) 14 or higher
* An F# editor like Visual Studio, Visual Studio Code with [Ionide](http://ionide.io/) or [JetBrains Rider](https://www.jetbrains.com/rider/)

## Building and running the app

* Clone the repo: `git clone`
* Install dotnet dependencies: `dotnet tool restore` and `dotnet paket install`
* Install dependencies: `npm install`
* Start the compiler in watch mode and a development server: `npm start`
* After the first compilation is finished, in your browser open: <http://localhost:5173/>

Any modification you do to the F# code will be reflected in the web page after saving.

> NB: you can check the "scripts" section in `package.json` to see the available commands.

## Bundling for release

Run the following command to compile and bundle up all your F# code into one Javascript file: `npm run build`. The compiled output ends up in the `public` folder under the name `bundle.js`.

## Project structure

### npm

JS dependencies are declared in `package.json`, while `package-lock.json` is a lock file automatically generated.

### Paket

[Paket](https://fsprojects.github.io/Paket/) is a dependency manager for .NET. It is used to manage the F# dependencies. The `paket.dependencies` file contains the list of dependencies, while `paket.lock` is a lock file automatically generated.

### Vite

[Vite](https://vitejs.dev/) is a JS bundler with extensions, like a static dev server that enables hot reloading on code changes. Configuration for Vite is defined in the `vite.config.js` file. Note this sample only includes basic Vite configuration for development mode, if you want to see a more comprehensive configuration check the vite documentation.

### F\#

The sample only contains two F# files: the project (.fsproj) and a source file (.fs) in the `src` folder.

### Web assets

The `index.html` file and other assets like an icon can be found in the `public` folder.
