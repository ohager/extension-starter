# Browser Extension Starter 2024

- [x] 🔥 Vite Build - Fast Builds, HMR
- [x] 🦊 Cross Browser - MV2/MV3
- [x] ⚛️ React TS
- [x] 🌬️ TailwindCSS
- [x] 🎵 NodeJS 20



## Installation

```bash
yarn
```

## Development

```bash
yarn dev
```

A window should open and you can open the extension popup in the tool bar.

> More here: https://vite-plugin-web-extension.aklinker1.io/guide/development.html

## Build 

### Unpacked

Unpacked can be loaded in Chrome when Developer Mode is active. 

```bash
yarn build:chrome
```

## Production for Chrome

> Manifest 3

```bash
yarn dist:chrome
```
The resulting package is available under `.dist/packed/chrome.extension.zip`


## Production for Firefox

> Manifest 2

```bash
yarn dist:firefox
```
The resulting package is available under `.dist/packed/firefox.extension.zip`

## Additional Info

The project was mainly built with [Vite Extension Plugin](https://vite-plugin-web-extension.aklinker1.io/)
See more details there.


### Built-In Environment Variables

> see also [env.d.ts](env.d.ts)

```JS
__APP_INFO__.browser
```

You can add more in [vite.config.ts](./vite.config.ts).