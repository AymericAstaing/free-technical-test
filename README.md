# Free technical test

Backend monolith for the free technical test application

## Overview

The CodeCraft Challenge Lottery System is a command-line program designed to modernize the current lottery system by replacing the traditional lottery drum and paper tickets. The program allows participants to purchase lottery tickets for the monthly draw, conducts random draws to select three winners, and displays the results, including prize distribution.

Useful information:

- By default, the kitty contains 200 euros
- Participation costs 5 euros
- One more person than the total number of winners is needed to launch the draw
- It is possible to have tickets with the same username

## Actions

### Purchase:

Participants can buy lottery tickets by providing their first name for the upcoming draw.
After purchasing, the corresponding ball numbers will be displayed on the screen.

### Draw:

The program triggers a random draw when the "Draw" command is entered.
Three winners are selected randomly from the participants who have purchased tickets.

### View Winners and Prizes:

The "Winners" command displays the winning ball numbers and the respective prize distribution.
Winners are presented in a formatted manner, showing first names and prize amounts.

## Software & Architecture

### Required tools

- Node.js ^20 LTS
- Npm

### JS-World libraries

- [TypeScript](https://www.typescriptlang.org/)
- [Inquirer](https://github.com/SBoudrias/Inquirer.js)

### CI / Reliability

- ESLint + Prettier
- Jest for tests

### Folders

- `tests/`: Contains jest .test and .data files (data related to tests are store in each .data file on the same level than tests)
- `src/index.ts`: Entry point of the server. Start of the prompt
- `src/actions`: Contains the behavior of each possible action of the lottery's prompt

### Files

- `src/constants.ts`: Contains every program constants, you can change lottery parameters in this file
- `src/types.ts`: Contains every types of the program
- `src/utils.ts`: Contains utility functions used in different parts of the project

## Usage

### Development

Start the lottery prompt:

```sh
npm start
```

## Technical documentation

### Tests

Many tests are present, covering every parts of the server

You can find and execute:

- Unit tests in the folder `tests/unit` for isolated function tests
- Integration tests in the folder `tests/integration` for running tests

To run tests, simply execute:

```sh
npm test
```

## Authors

- Aymeric Astaing
