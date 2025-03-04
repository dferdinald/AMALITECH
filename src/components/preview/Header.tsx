import React, { ReactElement } from "react";
import HideIcon from "../../assets/icon-hide-preview.svg";
import { useAppDispatch } from "../redux";
import { documentActions } from "../document-slice";

export default function Header(): ReactElement {
  const dispatch = useAppDispatch();

  function onClickHandler() {
    dispatch(documentActions.togglePreview());
  }

  return (
    <div className="bg-neutral-900 dark:bg-neutral-200 px-4 py-3 flex justify-between items-center">
      <span className="font-medium text-neutral-600 dark:text-neutral-700 text-sm tracking-widest">
        PREVIEW
      </span>
      <button onClick={onClickHandler}>
        <span className="sr-only">hide preview</span>
        <img src={HideIcon} alt="" />
      </button>
    </div>
  );
}
