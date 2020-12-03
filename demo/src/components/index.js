import React from "react";
import styles from "./index.less";
// import { SG_sm2Encrypt } from "@bj-nsc/sm2";
import sm2 from "sm2";
const { KJUR, sm2Encrypt } = sm2;
console.log("sm2", sm2);
export default () => {
  const SM2PublicKey =
    "041B33EBFF3DF93784C73E34B01446939B76AD71D19B728BB07B8AC00FDA14D20F39B75447BF1EF56F78F211E3EEE29F57CB5EF9F0F35535681B936F6C119AEC58";

  const enc = new sm2.SM2Cipher();
  console.log("enc", enc);
  const d = enc.Encrypt(SM2PublicKey, "test");
  console.log("d", d);
  return (
    <div>
      <h1 className={styles.title}>组件样板</h1>
    </div>
  );
};
