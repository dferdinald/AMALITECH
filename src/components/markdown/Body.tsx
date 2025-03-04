import React, { ChangeEvent, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { insertDocument } from "../actions";
import { documentActions } from "../document-slice";

export default function Body(): ReactElement {
  const { activeDoc } = useAppSelector((state) => state.docs);
  const dispatch = useAppDispatch();

  function newDoc() {
    dispatch(insertDocument());
  }

  if (!activeDoc)
    return (
      <div className="m-4">
        <button onClick={newDoc} className="primary-btn rounded-md">
          Create new
        </button>
      </div>
    );

  function updateContent(e: ChangeEvent<HTMLTextAreaElement>) {
    if (!activeDoc) return;

    dispatch(documentActions.updateMarkdown(e.target.value));
  }

  return (
    <>
      <label className="sr-only" htmlFor="markdownEditor">
        Markdown editor
      </label>
      <textarea
        id="markdownEditor"
        className="w-full bg-white dark:bg-neutral-100 dark:text-neutral-700 p-4 font-mono text-sm"
        value={activeDoc?.content ? activeDoc.content : ""}
        onChange={updateContent}
      />
    </>
  );
}
