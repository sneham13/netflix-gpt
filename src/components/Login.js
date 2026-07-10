import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {photoUrl} from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setSignIn(!isSignIn);
  };

  const handleBtnClick = () => {
    const isValid = checkValidData(email.current.value, password.current.value);
    setErrorMsg(isValid);
 
    if (isValid) return;

    if (!isSignIn) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              photoUrl,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;

            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName }),
            );

            navigate("/browse");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/IN-en-20260706-TRIFECTA-perspective_2f2fae68-6962-4d52-8cc2-1fe6ef5c6a56_large.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <form className="flex flex-col w-80 gap-3 p-8 rounded bg-black/80">
        <h1 className="text-2xl font-bold text-white mb-1">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
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
          type="button"
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
