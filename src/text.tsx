import { useState, useEffect } from "react";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let removedStr = "";

const typeingText = () => {
  const [str, setStr] = useState("");

  useEffect(() => {
    setInterval(() => {
      console.log("w");
      async () => {
        const stringsContainer = ["企业平台软件开发", "个性化软件定制开发", "提供SAAS平台"];
        for (let i = 0; i < stringsContainer.length; i++) {
          const string = stringsContainer[i];
          await write(string);
          await sleep(2000);
          await erase(string);
          await sleep(1000);
        }
      };
    }, 1000);
  }, []);

  const write = async (text: string) => {
    let index = 0;
    while (index < text.length) {
      const timeout = 200;
      await sleep(timeout);
      index++;
      setStr(text.substring(0, index));
    }
  };

  const erase = async (removedStr: string) => {
    let newStr = removedStr;
    console.log("1", removedStr);
    while (newStr.length) {
      const timeout = 1000;
      await sleep(timeout);

      setStr(newStr.substring(0, newStr.length - 1));
    }
  };

  return { str };
};

export default typeingText;
