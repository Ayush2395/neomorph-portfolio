import { createContext, useContext, useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "../backend/firebase.config";

const API = createContext();

export default function ContextApi({ children }) {
  // error message
  const [error, setError] = useState({ error: false, msg: "" });

  // firebase database setup
  const projectCollection = collection(db, "projects");
  const messageCollection = collection(db, "message");
  return (
    <>
      <API.Provider
        value={{ error, setError, projectCollection, messageCollection }}
      >
        {children}
      </API.Provider>
    </>
  );
}

export function useAppState() {
  return useContext(API);
}
