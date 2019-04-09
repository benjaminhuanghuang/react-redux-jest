## Reference 
- Advanced React and Redux - Udemy
  - https://www.udemy.com/react-redux-tutorial/
  - https://github.com/StephenGrider/AdvancedReduxCode/
  - https://github.com/StephenGrider/ReduxSimpleStarter
  
- [Testing React / Redux Apps with Jest & Enzyme - Part 1: Installation & Setup](https://alligator.io/react/testing-react-redux-with-jest-enzyme/)

- [React Testing with Jest and Enzyme](https://www.udemy.com/react-testing-with-jest-and-enzyme/)

## Setup
- create app
```
  create-react-app .
```

- Install redux libraries
```
  npm i -S redux react-redux
```

- Install UT libraries
```
  $ npm install -D jest
  $ npm install -D enzyme enzyme-adapter-react-16 enzyme-to-json
```
Create src/setupTests.js to config enzyme. Jest will find and use it.


## What do we test
- Components
- Reducer
- Actions