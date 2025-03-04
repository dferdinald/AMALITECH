import React, { ReactElement } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useAppDispatch, useAppSelector } from "../redux";
import { insertDocument } from "../actions";

export default function Body(): ReactElement {
  const dispatch = useAppDispatch();
  const { activeDoc, isPreview } = useAppSelector((state) => state.docs);

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

  return (
    <ReactMarkdown
      className={`overflow-y-auto p-6 bg-white dark:bg-neutral-100 w-full ${
        isPreview ? "md:max-w-screen-sm md:mx-auto" : ""
      } preview-markdown`}
    >
      {activeDoc.content}
    </ReactMarkdown>
  );
}
