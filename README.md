# Qwik Static Origin Test ⚡️

## Setup
`pnpm i`

## Works

`pnpm dev`

## Does not work

`pnpm build`
`pnpm build.server`
`pnpm serve`

FILE: `./static/adapters/static/`
```ts
    plugins: [
      staticAdapter({
        // origin: "http://localhost:4000", // Works
        origin: "capacitor://localhost",   // Broken
      }),
    ],
```

### Error

This test fails the build: [HERE](https://github.com/BuilderIO/qwik/blob/fd2ccbd641c12afce90ec45696c9d598cd4a34d7/packages/qwik-city/static/main-thread.ts#L239)

```log
error during build:
Error: "origin" must start with a valid protocol, such as "https://" or "http://", received "null"
    at validateOptions (file:///path_to_project/node_modules/.pnpm/github.com+builderio+qwik-city-build@c6ac291818242ab7832d17d40e662791a766b5aa_@types+node@20.12.2/node_modules/@builder.io/qwik-city/static/node.mjs:1086:11)
```