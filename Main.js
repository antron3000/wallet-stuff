var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];


console.log(unique(data));


window.try2send = function() {
  var unique = require('uniq');


  const hdkey = require('ethereumjs-wallet/hdkey')
   const privateKey = hdkey.fromMasterSeed('random')._hdkey._privateKey
  const Wallet = require('ethereumjs-wallet')
  const wallet = Wallet.fromPrivateKey(privateKey)
 wallet.getPublicKeyString()
  '0x11f2b30c9479ccaa639962e943ca7cfd3498705258ddb49dfe25bba00a555e48cb35a79f3d084ce26dbac0e6bb887463774817cb80e89b20c0990bc47f9075d5'
  prompt(wallet.getPublicKeyString());
  var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

   prompt(unique(data));
 }
