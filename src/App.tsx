import { useEffect } from "react";
import Editor from "../src/components/editor/Editor";
import Header from "../src/components/header/Header";
import Sidebar from "../src/components/sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "../src/components/redux";
import data from "../src/assets/data.json";
import { documentActions } from "../src/components/document-slice";
import { Toaster } from "react-hot-toast";
import { TDocument } from "./types";
import { getItem, saveItem } from "../src/components/localStorage";

function App() {
  const dispatch = useAppDispatch();
  const isPreview = useAppSelector((state) => state.docs.isPreview);

  useEffect(() => {
    const localData: TDocument[] = getItem("docs");
    if (localData) dispatch(documentActions.loadDocuments(localData));
    else {
      dispatch(documentActions.loadDocuments(data));
      saveItem("docs", data);
    }
  }, []);

  return (
    <div
      className={`grid wrapper ${
        isPreview ? "preview-open" : "preview-closed"
      } transition-all`}
    >
      <Sidebar />
      <div>
        <Header />
        <main>
          <Editor />
        </main>
      </div>
      <Toaster
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
}

export default App;
