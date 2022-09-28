# Project: Anonymous Poll

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Project Description

To create a project, we chose:

```
ng new mini-poll-frontend
```

_<Angular@14.1.0 & Typesript@4.7.2 versions>_

## Structure

We build the project working with multiple modules.

**Each feature is a module**.

Besides, there is an additional module `core` for storing services and `shared` for storing commonly used components, directives,...

The initial project structure below:

```
mini-poll-frontend
└── src
    └── app
        ├── app-routing.module.ts
        ├── app.component.html
        ├── app.component.scss
        ├── app.component.spec.ts
        ├── app.component.ts
        ├── app.module.ts
        ├── auth
        │   ├── auth.module.ts
        │   ├── login
        │   │   ├── login.component.html
        │   │   ├── login.component.scss
        │   │   └── login.component.ts
        │   ├── login-form
        │   │   ├── login-form.component.html
        │   │   ├── login-form.component.scss
        │   │   └── login-form.component.ts
        ├── core
        │   │   └──  core.module.ts
        ├── components
        │   │   ├── header
        │   │   │   ├── header.component.html
        │   │   │   ├── header.component.scss
        │   │   │   └──  header.component.ts
        │   │   └──  components.module.ts
        ├── create-poll
        │   │   ├──  create-poll.component.html
        │   │   ├──  create-poll.component.scss
        │   │   ├──  create-poll.component.ts
        │   │   └──  create-poll.module.ts
        ├── dashboard
        │   │   ├──  dashboard.component.html
        │   │   ├──  dashboard.component.scss
        │   │   ├──  dashboard.component.ts
        │   │   └──  dashboard.module.ts
        ├── poll-detail
        │   │   ├──  poll-detail.component.html
        │   │   ├──  poll-detail.component.scss
        │   │   ├──  poll-detail.component.ts
        │   │   └──  poll-detail.module.ts
        └── shared
                └──  shared.module.ts
```
