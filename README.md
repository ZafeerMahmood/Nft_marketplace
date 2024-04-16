# Readme

this project is working example of a Nft marketplace using Next.js tailwindcss, Firebase , web3 and metamask.
the contract are deployed with an injected wallet (metamask) to a test network https://goerli.etherscan.io
using remix

the deployed minting contract [link](https://goerli.etherscan.io/address/0xa7ac6d36a8de108db8fb535af6c3a60c7bd2e77a)
the deployed trading contract [link](https://goerli.etherscan.io/address/0xd551285342f0d723289bd3a3d8ac72797d867ece)

also link to the contract code Token & Trading [link](https://github.com/ZafeerMahmood/Remix_Backup_of_Minting_and_TradingContracts/tree/main/.workspaces/remixDefault_Fyp/contracts)

# Project working Tree

```bash
    -src
        Components:
            holdes all the components
        context:
            used to run app context
        lib:
            firebase startup
        pages:
            all pages that run on app
        public:
            assets used
        styles:
            any golobal styles.css
        contract:
            minitinginfo:
                holds the abi and address of the deployed contract
            tradingingo:
                holdes the abi abd address of the deployed contract
        -README.md
        -tailwind.config.js
        -package.json
```

# Setup & installation

things you need before starting

- a metamask wallet [link](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
- and a gorelieth setup with metamask [link](https://www.buybitcoinbank.com/cryptocurrency/add-goerli-to-metamask)
- and firebase console [link](https://firebase.google.com/)
- an infura ipfs storage client and serect [link](https://www.infura.io/product/ipfs)

  !! Project is Deprecated !!

env file

```env
NEXT_PUBLIC_FIREBASE_API_KEY=<FIREBASE>
NEXT_PUBLIC_FIREBASE_AUTH_DOMIAN=<FIREBASE>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<FIREBASE>
NEXT_PUBLIC_FIREBASE_STORAGE_BUKET=<FIREBASE>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<FIREBASE>
NEXT_PUBLIC_FIREBASE_APP_ID=<FIREBASE>

NEXT_PUBLIC_PROJECT_ID=<INFURA IPFS>
NEXT_PUBLIC_PROJECT_SECRET_KEY=<INFURA IPFS>
```

commands

```bash
git clone
npm install
npm run dev
```

Screenshots
[ss]()
