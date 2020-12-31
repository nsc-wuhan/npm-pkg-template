const sm2 = require("sm-crypto").sm2;
const SM2PublicKey =
  "041B33EBFF3DF93784C73E34B01446939B76AD71D19B728BB07B8AC00FDA14D20F39B75447BF1EF56F78F211E3EEE29F57CB5EF9F0F35535681B936F6C119AEC58";

const SM2PrivateKey =
  "39EEA5AC0595474659F16BD7ED2C8CE73F335F887EE0E8EA462306CC3B48EEBD";

export default {
  SM2: {
    sm2Encrypt: function (str, publicKey) {
      if (!str) return str;
      return "04" + sm2.doEncrypt(str, publicKey || SM2PublicKey, 1);
    },
    sm2Decrypt: function (str, privateKey) {
      if (!str || (typeof str === "string" && str.length < 196)) {
        return str;
      }
      return sm2.doDecrypt(
        str.toLocaleLowerCase().substring(2),
        privateKey || SM2PrivateKey,
        1
      );
    },
  },
};
