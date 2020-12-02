import React from "react";
import styles from "./index.less";
import { SG_sm2Encrypt } from "@bj-nsc/sm2";
export default () => {
  const d = SG_sm2Encrypt("test");
  console.log(d);
  return (
    <div>
      <h1 className={styles.title}>组件样板</h1>
    </div>
  );
};
