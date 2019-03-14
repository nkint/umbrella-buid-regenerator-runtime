# TEST `ReferenceError: regeneratorRuntime is not defined`

## How to reproduce

- Clone project
- if not already `npm i -g http-server`
- `yarn build`
- `cd dist`
- `http-server .`
- open the project (I'm using Google Chrome in Incognito Version 73.0.3683.75)

## How to fix

Not sure why this is happening exactly but adding
`import '@babel/polyfill'` in `index.ts` seems to fix

Or in alternative use

```
"browserslist": [
  "last 3 Chrome versions",
  "Firefox 63",
  "Node 11"
],
"browser": {
  "process": false
}
```

in the package.json fix this too.
