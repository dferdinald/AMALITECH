import React, { ReactElement, SetStateAction } from "react";
import { toast } from "react-hot-toast";
import { useAppDispatch } from "../redux";
import { deleteDocs } from "../actions";

interface Props {
  isOpen: boolean;
  setIsPromptOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function DeletePrompt({
  isOpen,
  setIsPromptOpen,
}: Props): ReactElement {
  const dispatch = useAppDispatch();

  function stopPropagation(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  function deleteDocument() {
    dispatch(deleteDocs());
    setIsPromptOpen(false);
    toast.success("document deleted");
  }

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } absolute left-0 top-0 bg-transparent dark:bg-lightTransparent w-screen h-screen`}
      onClick={() => setIsPromptOpen(false)}
    >
      <div
        className="w-[343px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-100 rounded-md p-6"
        onClick={stopPropagation}
      >
        <span className="text-neutral-400 dark:text-white font-bold text-xl font-serif">
          Delete this document?
        </span>
        <p className="my-4 text-neutral-600 dark:text-neutral-700 font-serif font-normal text-sm">
          Are you sure you want to delete the document and its contents? This
          action cannot be reversed.
        </p>
        <button
          data-testid="confirmDeletion"
          className="primary-btn rounded-md w-full"
          onClick={deleteDocument}
        >
          <span>Confirm & Delete</span>
        </button>
      </div>
    </div>
  );
}
