require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remain method inflict kitten sugar sport'; 
let testAccounts = [
"0xe0077a04368e1c9df077ea8a2a0e331a64a270fbe3a0d5f512a913c9ca8adf84",
"0x849bbca37eef53766fbd18a50d0e68f15dc39efd3ef0db6826b02fc9790fbeb7",
"0xc5b3f2bd7273321970fe1d03d8a56892ad39ce75e82a62e413bb426a388c27f1",
"0x2fbab0365a81837da6af847c6d783a379d0de969f6ac06ef562fc914e6c31561",
"0xd73595a7a56768a7dbc364f2d6fa8333722c77544e79812bba35c4a86635d875",
"0x1ac83c7cc3663f0f58dfe627d9f33496afe911055998e45f05f093130f205c2c",
"0x936a17a294c61e381ebd5dbc8497358f21003a67f3e236656e3ffc3d0ab7faae",
"0xec724c4fa14e617e703a3f6a11017a6396930f21f0941f5d30d3062a42115e44",
"0x98f3aae648d7046fecf9c5598a77e23a6f2c3cda6077b37586fd41270157e34e",
"0xfde4514e464bbcf46af874be04b6450cc7e63adf5fe71837a97fd18fc72243cb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

