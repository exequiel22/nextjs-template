# nextjs-template
NextJs project template

## Features & Libraries

* [React](https://reactjs.org/) v18
* [TypeScript](https://typescriptlang.org) - Superset of JavaScript which primarily provides optional static typing, classes and interfaces.
* [ESLint](https://eslint.org/) - The pluggable linting utility.
* [Docker](https://www.docker.com/) - A tool designed to make it easier to create, deploy, and run applications by using containers.
* [Cypress](https://www.cypress.io/) - A end-to-end testing framework for web test automation
* [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests
* [husky](https://typicode.github.io/husky/#/) - A tool for managing Git hooks
* [date-fns Library](https://date-fns.org/) - Modern JavaScript date utility library
* [Axios](https://axios-http.com/docs/intro) - A Promise based HTTP client for the browser and node.js
* [Falso](https://ngneat.github.io/falso/) - A library for mocking and Fake data

## Getting Started

### Install Dependencies
```bash
npm install
```
### Install husky
```bash
npm run prepare
```

### Run Development Server
```bash
npm run dev
```

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t nextjs-docker .`.
1. Run your container: `docker run -p 3000:3000 nextjs-docker`.

You can view your images created with `docker images`.

## License
Licensed under the MIT License, Copyright © 2022 - [ExeQuiroga](https://exequiroga.dev)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)