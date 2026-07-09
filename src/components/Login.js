import { useState, useRef } from "react";
import checkValidData from "../utils/validate";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setSignIn(!isSignIn);
  };

  const handleBtnClick = () => {
    const isValid = checkValidData(email.current.value, password.current.value);
    setErrorMsg(isValid);
    console.log(email.current.value);
    console.log(password.current.value);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <form className="flex flex-col w-80 gap-3 p-8 rounded bg-black/80">
        <h1 className="text-2xl font-bold text-white mb-1">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2.5 rounded bg-zinc-700 text-white placeholder-zinc-400 outline-none focus:ring-2 focus:ring-white"
          ></input>
        )}

        <input
          type="email"
          placeholder="User Email"
          ref={email}
          className="p-2.5 rounded bg-zinc-700 text-white placeholder-zinc-400 outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-2.5 rounded bg-zinc-700 text-white placeholder-zinc-400 outline-none focus:ring-2 focus:ring-white"
        />

        <p className="text-red-500">{errorMsg}</p>
        <button
          type="submit"
          onClick={handleBtnClick}
          className="p-2.5 mt-1 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
        >
          {isSignIn ? "Login" : "Sign Up"}
        </button>
        <p className="text-zinc-400 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn ? "Sign Up Now" : "Already Signed Up! Sign In."}
        </p>
      </form>
    </div>
  );
};

export default Login;
