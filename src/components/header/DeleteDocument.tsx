import { useAppSelector } from "../redux";
import React, { ReactElement, useState } from "react";
import DeleteIcon from "../../assets/icon-delete.svg";
import DeletePrompt from "./DeletePrompt";

export default function DeleteDocument(): ReactElement {
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const { activeDoc } = useAppSelector((state) => state.docs);
  function onClickHandler() {
    setIsPromptOpen(true);
  }

  return (
    <>
      <DeletePrompt isOpen={isPromptOpen} setIsPromptOpen={setIsPromptOpen} />
      <button
        className={`ml-auto ${!activeDoc ? "invisible" : ""}`}
        onClick={onClickHandler}
      >
        <img src={DeleteIcon} aria-hidden={true} alt="" />
        <span className="sr-only">delete markdown document</span>
      </button>
    </>
  );
}
