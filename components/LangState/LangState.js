import { useState } from "react";
export default function LangState({ langOne, langTwo }) {
  const [select, setSelect] = useState(false);
  return (
    <>
      <span
        className={
          !select
            ? "font-medium hover:text-blue-600 active:text-grey-700"
            : "font-normal hover:text-black active:text-grey-700"
        }
        onClick={() => {
          setSelect(!select);
        }}
      >
        {langOne}
      </span>
      <span> / </span>
      <span
        className={
          select
            ? "font-medium hover:text-blue-600 active:text-grey-700"
            : "font-normal hover:text-black active:text-grey-700"
        }
        onClick={() => {
          setSelect(!select);
        }}
      >
        {langTwo}
      </span>
    </>
  );
}
