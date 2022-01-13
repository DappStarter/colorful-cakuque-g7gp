require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remain history hidden process front skull'; 
let testAccounts = [
"0x1d5ab28fd89dd84f95a4b6a5f492971ccc6b72914d1068baab842da37a443286",
"0x29f083543a7d99142509a9b2440375c42128ad800e3ae6f19009b529818574b4",
"0x928772dec4c6cf4353304fd178a9e05ad532c5b54d4ba2f0266f891df70321ba",
"0x4600a6fc46f9dba2deb0616ef0757f70b8d293920cffc981d83469e2f71224a7",
"0xe97b5b317b455df9d515e8c4448ce6270c145a03bf9f7db2caf10589721a71c9",
"0xc6cb33801b595cedbfeece7c6ed0f3a8e0bebd0e855d21d08ac6231ecb1980c3",
"0x379b5590ec107bbcceb95aae63d05b31c3f5341972b52c8764e948199d5231d9",
"0xbf63a2407e18c821cbec02e34b30ed9846500987e700946ef349047ff2176b7d",
"0x79e2566303769246c4acd18ca5e443adada5ea38b16d6883dd6261894ada285a",
"0x7f46af056aad2d892269ed2fb313379e59efde11f8e917c21482cb8ebfdb91f8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

