import { useState } from "react";
import { useAuth } from "../context/AuthContext";
type AuthenticationProps = {
  handleCloseModal: () => void;
};
export default function Authentication({
  handleCloseModal,
}: AuthenticationProps) {
  const [isRegistration, setIsRegistration] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState(null);

  const { signUp, logIn } = useAuth();

  async function handleAuthenticate() {
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.length < 6 ||
      isAuthenticating
    ) {
      return;
    }

    try {
      setIsAuthenticating(true);
      setError(null);

      if (isRegistration) {
        await signUp(email, password);
      } else {
        await logIn(email, password);
      }
      handleCloseModal();
    } catch (err) {
      console.log(err);
    } finally {
      setIsAuthenticating(false);
    }
  }

  return (
    <>
      <h2 className="sign-up-text">{isRegistration ? "Sign Up" : "Login"}</h2>
      <p>{isRegistration ? "Create an acount!" : "Sign in to your account!"}</p>
      {error && <p>X {error}</p>}
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="*********"
        type="password"
      />
      <button onClick={handleAuthenticate}>
        <p>{isAuthenticating ? "Authenticating..." : "Submit"}</p>
      </button>
      <hr />
      <div className="register-content">
        <p>
          {isRegistration
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>
        <button
          onClick={() => {
            setIsRegistration(!isRegistration);
          }}
        >
          <p>{!isRegistration ? "Sign Up" : "Sign in"}</p>
        </button>
      </div>
    </>
  );
}
