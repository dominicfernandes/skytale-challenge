# Skytale Challenge Backend

## Hosted Service

(`http://3.66.28.187:3000`)

## Documentation

(`https://documenter.getpostman.com/view/5214074/UVR5q8ur`)

## Techstack used

-   Nodejs with Typescript
-   Express
-   MongoDB

## Scripts

-   `npm run start:dev` starts server with a dev build
-   `npm run start` starts server for prod build
-   `npm build` creates a prod build
-   `npm run test` runs unit tests
-   `npm run test:e2e` - runs integration tests

## Endpoints

-   (POST) /wallets data:{ chain:"ethereum", address:"0x5b3ce67ebc795fe7e709815bc49d4300898e1b7b" }
    `response: { chain: 'ethereum', address: '0x5b3ce67ebc795fe7e709815bc49d4300898e1b7b', userToken: '52cc768f-7dc7-dcfb-4c11-65db7f1784d1', }`

-   (GET) /transactions headers:{userToken:"52cc768f-7dc7-dcfb-4c11-65db7f1784d1"}
    `response: {transactions:{ hash: '0x45002133ba2fa7f2f263b466dd687f6fc9feef3a1ac8aacd28b3ecbac6be84fe', from: '0x29d5527caa78f1946a409fa6acaf14a0a4a0274b', to: '0x266e110faba6fd1c4d50a1e9bf94e9af3fd02e41', value: '0.35167462ETH', type: 'send', }, ], size: 10, page: 1, hasNext: true, }`

-   (GET) /balance headers:{userToken:"52cc768f-7dc7-dcfb-4c11-65db7f1784d1"}
    `response: { ETH: { amount: 5.0008, rate: 3577.3574, value: '17889.64EUR' } }}`
