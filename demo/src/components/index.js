import React from "react";
import styles from "./index.less";
import SM2 from "@bj-nsc/sm2";
// import sm2 from "sm2";
// const { KJUR, sm2Encrypt } = sm2;
// console.log("sm2Obj", sm2Obj);
export default () => {
  const SM2PublicKey =
    "041B33EBFF3DF93784C73E34B01446939B76AD71D19B728BB07B8AC00FDA14D20F39B75447BF1EF56F78F211E3EEE29F57CB5EF9F0F35535681B936F6C119AEC58";
  const str =
    "04A2B6158A632D34358D4AFD0CC34326F39AF5B7F789BDA2618A63E6A2211143CEFAE5FE2AE26E8DD07581622AEB94CB9EBEE531CB3F364C054CD418594A6997E6B6BA68AF2EE78B19E3090EAE3DFC219BCEFED69DEA7C5A80D93DC2FB726DDDDF61734904743BCB4437";
  const SM2PrivateKey =
    "39EEA5AC0595474659F16BD7ED2C8CE73F335F887EE0E8EA462306CC3B48EEBD";
  // const SM2 = SM.SM2;
  console.log("SM2", SM2);
  const rel = SM2.sm2Decrypt(str);
  console.log("rel", rel);
  const test = "yes";
  return (
    <div>
      <h1 className={styles.title}>组件样板</h1>
    </div>
  );
};
