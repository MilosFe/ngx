# Simfonija projekat

**Project made for symphony**

### About

- Project is made in angular 6 since, it's curently my working enviorment, for rapid development
  of enterpirse level applicaiton
  During the project, I follow industry standards for developing Angular applications and best
  practices in this project are based on my expirience working with angular.

# Getting started

1. Go to project folder and install dependencies:

```
npm install
```

2. Launch development server, and open `localhost:4200` in your browser:

```bash
npm start
```

# Project structure (Basic)

```
dist/                        compiled version
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

# Project details

In this project i used bootstrap design for rapid prototypeing usualy i go angular material design. The folder structure is made out of shell and core.

I'm seperating everything into the components for cleaner code and easier debuging. Models, Services, are also sepereated from everything
else as it is the best practice to keep them into their own space for later reuse.

# Project routing

Routing of the project is seperated in two groups, authorized routes and unotorized routes. I'm impleneting native angular guards
with opetions to use Route and Route.withShell you cant enter the components unless you are authorized.
#Http request

Every http request is followed with Http interceptor. This is good practice for authorizations token, cacheing of services and intercepting bad request and unauthorized
use of the applications wich produces 401 code.

#Models
Per best practices we are creating interfaces for each model

#Services
Services are seperated in this project for component for future reuse. Only one service is exception and that is authorization service which has its own folder (best practice)

#Translation
Since this is hotel api, i guess there is a need for translation service since not everyone is english speaking person. France is natural choice
beacuse they refuse to speak english :)

#Theme

Since i didn't recive mockup i did default theme with custom variables

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

# Developd by:

Radoman Milos Front End Devloper using ngx angular.
