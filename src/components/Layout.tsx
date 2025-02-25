import { useState } from "react";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext";
import Authentication from "./Authentication";

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children}: LayoutProps) {
  const [isShowModal, setIsShowModal] = useState(false);
  const { globalUser, logOut } = useAuth();
  const header = (
    <div className="flex flex-row justify-between">
      <button className="text-gradient" onClick={() => {}}><h1>ToDo-Insiders</h1></button>
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
  return (
    <div>
      {header}
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
