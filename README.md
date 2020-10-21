# Frontend Interview Assignment

## Table of Contents

- [Instruction](#Instruction)
- [Development](#Development)

## Instruction

### What we provide

- Basic project infrastructure
- The design for the UI in `/design`
  - Open `/design/index.html` in a browser to see the inspectable design
- A page with step cards rendered
  - Step data will be fetched from the server side on page request
- An API to get a random email address

### What you have to do

- Implement step detail panel in either `/packages/app-react` or `/packages/app-vue`
  - Choose either React.js or Vue.js and work on the corresponding starting app we provide
- The panel should look like the design we provide
- The panel can be open when clicking on `InputText` step.
- When edit the text in the panel, the text in step card should also be updated
- The type of input can be changed from `Given value`, which is a free text, to `Random email address`, which is an email address generated from the api.

### Rules

- We'll test the website only on Chrome Stable for macOS, with the viewport size of 1280x800
- You **cannot** remove any dependency we provide
- You **cannot** modify `/packages/api`
- You can add any dependency you want
- You can modify the code, or project structure, however you want
- You can reach out to us if you have any question
- We'll judge the final result based on:
  - How well the UI work, the UX when using it
  - How it being tested
  - How the code is structured, its readability

## Development

### Prerequisite

1. [Node.js 14.14.0](https://nodejs.org/en/) - The version is also specified in `.nvmrc`
2. [Yarn 1.22.10](https://classic.yarnpkg.com/en/)

### Installation

1. `yarn install`
2. `yarn build`
3. `yarn test-all` - To ensure that everything work fine at the start

### Starting the app

1. `yarn start:api`
   - To start the API server for the app to use
   - See `/packages/api/README.md` for more info on the available endpoint
2. See the `README.md` in the app you want to work on to learn how to develop it.
   - `/packages/app-react/README.md`
   - `/packages/app-vue/README.md`
