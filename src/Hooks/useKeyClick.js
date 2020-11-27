import { useEffect } from "react";
import { keys } from "../base";

const isFunction = (functionToCheck) => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
};

const isObject = (variable) => {
  return typeof variable === "object" && variable !== null;
};

export default function useKeyClick(keysObject) {
  const clickHandler = (e) => {
    let shift = e.keyCode >= 48 && e.keyCode <= 90 ? e.shiftKey : true;

    Object.keys(keysObject).forEach((key) => {
      let value = keysObject[key];

      if (e.keyCode === keys[key] && shift) {
        if (isFunction(value)) {
          value();
        } else if (isObject(value)) {
          if (value.shiftFunc && e.shiftKey) {
            value.shiftFunc();
            return;
          }
          if (value.func) {
            value.func();
          }
        } else {
          window.location = value;
        }
      }
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", clickHandler);
    return () => document.removeEventListener("keydown", clickHandler);
  }, []);
}
