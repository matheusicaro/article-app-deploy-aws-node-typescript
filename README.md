# Simple TypeScript Starter Rest API

- Minimal
- TypeScript
- Testing with Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- VS Code debugger scripts
- Local development with Nodemon

### Scripts

#### `npm run start`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start:prd`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/server.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.
