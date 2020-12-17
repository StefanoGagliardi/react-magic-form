# Developmente documentation

Index:

1. Npm scripts

### NPM Scripts

Abbiamo una bella lista di scripts disponibili per questo "template library" dalla build, al linter fino ai tet.

```json
"scripts": {
  "build": "npx rollup -c",
  "clean": "rimraf dist",
  "dev": "npm run storybook",
  "format": "prettier --write \"src/**/*.{ts,tsx,json,js,jsx}\"",
  "format:check": "prettier --list-different \"src/**/*.{ts,tsx,json,js,jsx}\"",
  "lint": "npm run lint:script && npm run lint:style",
  "lint:script": "eslint ./src --ext .js,.jsx,.ts,.tsx",
  "lint:style": "stylelint ./src",
  "storybook": "start-storybook -p 9001 -s ./src/assets -c .storybook",
  "test": "jest --maxWorkers=2",
  "test:watch": "npm run test --watch",
  "test:coverage": "jest --coverage --colors --maxWorkers=2",
  "hygen": "hygen",
  "component:new": "hygen component with-prompt",
  "publish": "npx semantic-release --no-ci"
},
```
Test