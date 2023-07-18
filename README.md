# Readme

this project is working example of a Nft marketplace with Next.js tailwindcss, Firebase , web3 and metamask.
it use an


Project workin Tree

```- 📂project__
   - 📄 [README.md](README.md)
   - 📂 __components__
     - 📂 __About\_Us__
       - 📄 [About\_Us\_Logic.js](components/About_Us/About_Us_Logic.js)
       - 📄 [About\_us\_Layout.js](components/About_Us/About_us_Layout.js)
     - 📂 __Account\_Details__
       - 📄 [Accounts.js](components/Account_Details/Accounts.js)
       - 📄 [Accounts\_Layout.js](components/Account_Details/Accounts_Layout.js)
     - 📂 __Cards__
       - 📄 [Card.js](components/Cards/Card.js)
       - 📄 [cardv1.js](components/Cards/cardv1.js)
     - 📄 [DarkModeButton.js](components/DarkModeButton.js)
     - 📂 __Discover__
       - 📄 [Discover\_Layout.js](components/Discover/Discover_Layout.js)
       - 📄 [Discover\_logic.js](components/Discover/Discover_logic.js)
     - 📂 __Dynamic\_Pages\_Layout__
       - 📄 [Discover\_Loading.js](components/Dynamic_Pages_Layout/Discover_Loading.js)
       - 📄 [Dynamic\_Layout.js](components/Dynamic_Pages_Layout/Dynamic_Layout.js)
       - 📄 [Header.js](components/Dynamic_Pages_Layout/Header.js)
     - 📂 __Footer__
       - 📄 [Footer.js](components/Footer/Footer.js)
     - 📂 __GoogleAuth__
       - 📄 [GoogleAuth.js](components/GoogleAuth/GoogleAuth.js)
       - 📄 [GoogleAuthBg.js](components/GoogleAuth/GoogleAuthBg.js)
       - 📄 [GoogleAuthLayout.js](components/GoogleAuth/GoogleAuthLayout.js)
     - 📂 __Home__
       - 📄 [Home\_Layout.js](components/Home/Home_Layout.js)
       - 📄 [Home\_Logic.js](components/Home/Home_Logic.js)
     - 📂 __Loading\_Minting__
       - 📄 [Load\_mint.js](components/Loading_Minting/Load_mint.js)
       - 📄 [Load\_mint\_success.js](components/Loading_Minting/Load_mint_success.js)
     - 📂 __MetamaskAuth__
       - 📄 [MetamakAuth.js](components/MetamaskAuth/MetamakAuth.js)
       - 📄 [MetamaskAuthBg.js](components/MetamaskAuth/MetamaskAuthBg.js)
       - 📄 [MetamaskAuthLayout.js](components/MetamaskAuth/MetamaskAuthLayout.js)
     - 📂 __Minting__
       - 📄 [Background.js](components/Minting/Background.js)
       - 📄 [Header.js](components/Minting/Header.js)
       - 📄 [MintLayout.js](components/Minting/MintLayout.js)
       - 📄 [MintingLogic.js](components/Minting/MintingLogic.js)
       - 📄 [Minting\_Ui.js](components/Minting/Minting_Ui.js)
     - 📂 __Navbar__
       - 📄 [Navbar.js](components/Navbar/Navbar.js)
     - 📂 __Search__
       - 📄 [Search\_Layout.js](components/Search/Search_Layout.js)
       - 📄 [Search\_logic.js](components/Search/Search_logic.js)
     - 📂 __Table__
       - 📄 [table.js](components/Table/table.js)
     - 📂 __Terms\_and\_Service__
       - 📄 [Terms\_Service\_Layout.js](components/Terms_and_Service/Terms_Service_Layout.js)
       - 📄 [Terms\_Service\_logic.js](components/Terms_and_Service/Terms_Service_logic.js)
     - 📂 __User\_Redirect__
       - 📄 [User\_redirect\_Layout.js](components/User_Redirect/User_redirect_Layout.js)
       - 📄 [User\_redirect\_logic.js](components/User_Redirect/User_redirect_logic.js)
     - 📂 __UsersNft__
       - 📄 [Background.js](components/UsersNft/Background.js)
       - 📄 [Header.js](components/UsersNft/Header.js)
       - 📄 [UserNftLayout.js](components/UsersNft/UserNftLayout.js)
       - 📄 [UserNftLogic.js](components/UsersNft/UserNftLogic.js)
     - 📂 __loader__
       - 📄 [loader.js](components/loader/loader.js)
   - 📂 __context__
     - 📄 [AuthUserContext.js](context/AuthUserContext.js)
   - 📂 __contracts__
     - 📂 __mintingInfo__
       - 📄 [info.js](contracts/mintingInfo/info.js)
     - 📂 __tradingInfo__
       - 📄 [info.js](contracts/tradingInfo/info.js)
   - 📄 [eslintrc.json](eslintrc.json)
   - 📂 __lib__
     - 📄 [firebase.js](lib/firebase.js)
   - 📄 [next.config.js](next.config.js)
   - 📄 [node\_modules](node_modules)
   - 📄 [package\-lock.json](package-lock.json)
   - 📄 [package.json](package.json)
   - 📂 __pages__
     - 📄 [About\_Us.js](pages/About_Us.js)
     - 📄 [Discover.js](pages/Discover.js)
     - 📄 [GoogleAuth.js](pages/GoogleAuth.js)
     - 📄 [MetamaskAuth.js](pages/MetamaskAuth.js)
     - 📄 [Pre\_web\_load.js](pages/Pre_web_load.js)
     - 📄 [Redirect\_page.js](pages/Redirect_page.js)
     - 📄 [Search\_Page.js](pages/Search_Page.js)
     - 📄 [Terms\_Service.js](pages/Terms_Service.js)
     - 📄 [UserNft.js](pages/UserNft.js)
     - 📄 [\_app.js](pages/_app.js)
     - 📄 [accounts\_detail.js](pages/accounts_detail.js)
     - 📂 __api__
       - 📄 [hello.js](pages/api/hello.js)
     - 📂 __buy\_nft__
       - 📄 [[tokenid].js](pages/buy_nft/%5Btokenid%5D.js)
     - 📄 [buy\_ui\_load.js](pages/buy_ui_load.js)
     - 📄 [home.js](pages/home.js)
     - 📄 [index.js](pages/index.js)
     - 📄 [mint.js](pages/mint.js)
     - 📂 __sell\_nft__
       - 📄 [[tokenid].js](pages/sell_nft/%5Btokenid%5D.js)
   - 📄 [postcss.config.js](postcss.config.js)
   - 📂 __public__
   - 📂 __styles__
   - 📄 [tailwind.config.js](tailwind.config.js)
```


# setup

things you need before starting
    - a metamask wallet (@)[]
    - and a gorelieth setup with metamask (@)[]
    - and firebase console (@)[]
    - an infura ipfs storage client and serect ()[]

```bash
git clone 
npm install
npm run dev
```