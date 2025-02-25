import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential,
} from "firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

type AuthContextType = {
  globalUser: User | null;
  globalData: {} | null;
  setGlobalData: React.Dispatch<React.SetStateAction<{} | null>>;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [globalUser, setGlobalUser] = useState<User | null>(() => null);
  const [globalData, setGlobalData] = useState<{} | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    setGlobalUser(null);
    setGlobalData(null);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("CURRENT USER: ", user);
      setGlobalUser(user as User | null); 

      if (!user) {
        console.log("No active user");
        return;
      }

      try {
        setIsLoading(true);

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        let firebaseData = {};
        if (docSnap.exists()) {
          firebaseData = docSnap.data();
          console.log("Found user data", firebaseData);
        }
        setGlobalData(firebaseData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ globalUser, globalData, setGlobalData, isLoading, signUp, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}