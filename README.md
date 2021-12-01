# Final project - ETH Auto Sales

## Deployment Details

Deployment of Contract on ropsten:
0x971B3c5B65c8B1EB1b2Ce31BCF5eDcD36696D0eA

> transaction hash: 0xb526af9c6a9ad7ad282265930ef0c39cf3630721c2e709bc3bfd4d8ea63f6ea2

Deployment of front end:

Click below

[Deployment of front end](http://ethauto-dapp.surge.sh "Named link title")

Or copy and paste

http://ethauto-dapp.surge.sh/

**_Please refresh page if you get 21,000 gas limit error on ropsten. The error comes from the ropsten Infura node._**

## System requirements

- Truffle v5.4.22 (core: 5.4.22)
- Solidity - ^0.8.0 (solc-js)
- Node v14.17.6
- Web3.js v1.5.3

## Contracts

Run : `npm install -g truffle` in project root

Run : `npm install` in project root folder to install all dependencies

#### Truffle Network Configuration

```bash
 networks: {
   development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
   },
```

#### Truffle compiler version

```bash
compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
```

#### Truffle config mnemonic & infuraURL

Use the .env file to populate:

```
 const mnemonic = 'Your mnemonic here';
 const infuraURL = "https://ropsten.infura.io/v3/<project id here>'";
```

Use your the mnemonic from ganache in the top
left corner and insert it into `const mnemonic`

Login into infura.com and go to your dashboard to get a new endpoint url for the ropsten test network.

Use the project Id for the ropsten network and insert it into
`const infuraURL`

Run: `truffle compile`

Run: `truffle migrate`

Run: `truffle test`

### Using the Dapp

Run:`npm run dev`

Make sure url is `http://localhost:3000`

### ScreenCast Link

https://youtu.be/lQZsSy694T4

### Ethereum Public Account for NFT Certification

0x6d5F2706f0C998f710bC72d0CE12E476458eC412

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
