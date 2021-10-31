#Create ERC 1155 Token

1. Verify you have the Truffle (v5.0.2) latest installed if not use the command ``npm install -g truffle``
1. Run the command: `truffle init` to initialize a truffle project.
1. Run `npm install @truffle/hdwallet-provider` used to set up the provider to connect to the Infura Node.
1. Run `npm install @openzeppelin/contracts`
1. Go into your contracts folder, and create your token smart contract file Textrace.sol

1. Code for Textrace.sol

    ```Solidity
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.6;
    
    import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
    
    contract TexTrace is ERC1155 {
        uint256 public constant COTTON = 0;
        uint256 public constant POLYESTER = 1;
        uint256 public constant VISCOSE = 2;
        uint256 public constant LINEN = 3;
        uint256 public constant NYLON = 4;
    
        uint256 private initialSupply = 10**27;
    
        constructor() ERC1155("https://game.example/api/item/{id}.json") {
            _mint(msg.sender, COTTON, initialSupply, "");
            _mint(msg.sender, POLYESTER, initialSupply, "");
            _mint(msg.sender, VISCOSE, 1, "");
            _mint(msg.sender, LINEN, initialSupply, "");
            _mint(msg.sender, NYLON, initialSupply, "");
        }
    }
    ```
1. Make sure truffle-config.js has the same solidity compiler version

    ```javascript
   // Configure your compilers 
   compilers: {
    solc: {
        version: "0.8.6",    // Fetch exact version from solc-bin (default: truffle's version)
        }
    }
    ```

1. Deploy to a local environment using truffle

  1. Compile the contracts `truffle compile`
  1. Develop a truffle blockchain `truffle develop`
  1. Deploy the contract on the blockchain `truffle deploy`

1. Deploy to a local environment using Ganache-cli
  1. Uncomment *development* under the *network* at truffle-config.js
     ``` Javascript
     development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
     },
      ```
  1. Install Ganache-cli ``npm install -g ganache-cli``
  1. Get your mnemonic from MetaMask. ``opera uncle resist garage appear very when settle please front local lawn``
  1. Start Ganache-cli ``ganache-cli -m 'opera uncle resist garage appear very when settle please front local lawn'``
  1. Open a new terminal
  1. Run ``truffle deploy``

###Deploy to Rinkeby test network

Go to https://infura.io

Click on “Get Started for FREE”. Once you sign up, you will be sent an email. Confirm your email address.

Now go back to the Infura website, to get the API key.
The easiest way is to click on “Learn How Infura Works” as seen below.
Click on “Skip” button that you see on the screen.
Then click on “Create New Project” as seen below:
Give any name to your project…
Now, from the endpoint, copy the link for whichever network’s node you would want to connect to, for example, Rinkeby.

This is the code you need for the truffle-config.js file set up:
```javascript
const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "c7291f2b49194634acb4b8497de5c8e2";

const fs = require('fs');
const mnemonic = fs.readFileSync("./.secret").toString().trim();
```

```javascript
development: {
   host: "127.0.0.1",     // Localhost (default: none)
           port: 8545,            // Standard Ethereum port (default: none)
           network_id: "*",       // Any network (default: none)
},
rinkeby: {
   provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
           network_id: 4,       // rinkeby's id
           gas: 4500000,        // rinkeby has a lower block limit than mainnet
           gasPrice: 10000000000
},
```
Create a file named .secret to safely keep your mnemonic.


###Get Tokens from Public Faucet

Before we can deploy our contract on Rinkeby, we need to make sure have enough ethers. To get our ethers in the test network, we will get some ether from a public faucet. We will walk-through how to deploy our contract on Rinkeby.

To request ethers,

https://faucet.rinkeby.io/

https://www.youtube.com/watch?v=xY6ag7a9xuQ

Deploy Contract and Send Tokens
Now that we have enough ethers our Rinkeby account, let's deploy our token contract to the Rinkeby network! Once deployed, we can use the contract to find our contract on Etherscan. Finally, we will wrap it up by using Metamask to transfer the tokens we created between Ethereum accounts!

``truffle migrate --reset --network rinkeby``



##Frontend

Go to ./app

```npm i webpack-dev-server```

``npm run dev``

## Communicate with to Ethereum
Install web3 under ./app

`npm install web3`
