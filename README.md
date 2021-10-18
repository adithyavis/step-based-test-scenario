# Step based test scenario

## Table of Contents

- [Overview](#Overview)
- [Development](#Development)

## Overview

### About the task

The application included in this repo shows a test scenario for E2E testing in a step-by-step style.
To make things simpler, it supports only two kinds of operation -- "Visit" some page and "Input" text to the page.

The tasks I have completed are-

- Implement step edit panel in react.
- The panel looks like the provided design.
- The panel can be open when clicking on "Input" step.
- The panel will open _below the row of the open step_. I implemented this using absolute positioning. An example of the interaction is at `/design/example.gif`.
- When edit the text in the panel, the text in step card is also be updated
- The type of input can be changed from `Given value`, which is a free text, to `Random email address`, which is an email address generated from the api.

## Development

### Prerequisites

1. [Node.js 16.0.0](https://nodejs.org/en/) - The version is also specified in `.nvmrc`
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
