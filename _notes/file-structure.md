## Recommended File Structure
- Leverage Default Behavior: By default Jest looks for tests in the __tests__ folder.
- Folder Hierarchy: Mirror your src folder hierarchy for easier test management.
- Separate By Type: Keep separate folders for components, actions and reducers.
- Append Filenames: For files containing tests use the .test.js or .spec.js  extension to differentiate.

```
  .
  ├── __tests__
  │   ├── actions
  │   │   └── gator_actions.test.js
  │   ├── components
  │   │   └── Gator.test.js
  │   ├── reducers
  │   │   └── gator_reducer.test.js
  │   └── setup
  │       └── setupEnzyme.js
  ├── src
  │   ├── actions
  │   │   ├── gator_actions.js
  │   │   ├── index.js
  │   │   └── types.js
  │   ├── components
  │   │   └── Gator.js
  │   ├── reducers
  │   │   ├── gator_reducer.js
  │   │   └── index.js
  │   └── store
  │       └── index.js
  ├── package.json
  └── README.md
```