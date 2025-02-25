import {useState } from "react";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext";
import Authentication from "./Authentication";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
type Task = {
  title: string;
  description: string;
  isDone: boolean;
};
type LayoutProps = {
  children: React.ReactNode;
  taskLists: Task[][];
  setTaskLists: (taskLists: Task[][]) => void;
};

export default function Layout({ children, taskLists }: LayoutProps) {
  const [isShowModal, setIsShowModal] = useState(false);
  const {globalUser, logOut } = useAuth();
  const header = (
    <div className="flex flex-row justify-between">
      <button className="text-gradient" onClick={() => {}}>
        <h1>ToDo-Insiders</h1>
      </button>
      {!globalUser && (
        <button
          onClick={() => {
            setIsShowModal(true);
          }}
        >
          Log In
        </button>
      )}
      {globalUser && <button onClick={logOut}>Log out</button>}
    </div>
  );
  const footer = (
    <div>
      <p>
        App created by{" "}
        <a target="_blank" href="https://github.com/Yeroglif/">
          Yeroglif
        </a>
      </p>
    </div>
  );

  async function handleDataSubmit() {
    try {
      console.log("db: ", db);

      if (!db) {
        throw new Error("Firestore db is not initialized.");
      }
      if (!globalUser?.uid) {
        console.warn("User UID is missing.");
        return;
      }
      const nowTime = Date.now();
      const timestamp = nowTime;
      const formattedTaskLists = taskLists.reduce((acc, list, index) => {
        acc[`list_${index}`] = list;
        return acc;
      }, {} as Record<string, Task[]>);
      const newData = {
        list: formattedTaskLists,
      };
      const userRef = doc(db, "users", globalUser.uid);
      await setDoc(userRef, { [timestamp]: newData }, { merge: true });
      console.log("Data saved successfully!");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      {header}
      <button
        onClick={() => {
          handleDataSubmit();
        }}
      >
        Click to submit lists to your account
      </button>
      {children}
      {isShowModal && (
        <Modal
          handleCloseModal={() => {
            setIsShowModal(false);
          }}
        >
          <Authentication
            handleCloseModal={() => {
              setIsShowModal(false);
            }}
          />
        </Modal>
      )}
      {footer}
    </div>
  );
}
