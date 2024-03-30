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
        origin: "http://localhost:4000", // Works
        // origin: "capacitor://localhost",   // Broken
      }),
    ],
```