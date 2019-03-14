# TEST `ReferenceError: regeneratorRuntime is not defined`

[For the umbrella issue #78](https://github.com/thi-ng/umbrella/issues/78)

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

Or in alternative use (as [Karsten](https://github.com/postspectacular) advice)

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

## Related `parcel` issues:

https://github.com/parcel-bundler/parcel/issues/2128
https://github.com/parcel-bundler/parcel/issues/1762
https://github.com/parcel-bundler/parcel/issues/843
