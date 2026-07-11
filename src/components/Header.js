import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toggleStateView } from "../utils/gptSlice"

import { logo } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const showGptSearch= useSelector(store=> store.gpt.showGptSearch);

   useEffect(()=>{},[]);
   
   const handleGptSearch=()=>{
    dispatch(toggleStateView())

   }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName })
      
      );
      navigate("/browse");
      } else {
        dispatch(removeUser());
              navigate("/");

      }
    });
    //unsubscribe from the listener when the component unmounts
    return unsubscribe;
  }, [dispatch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        navigate("/error");
      });
  };

  return (
    <div className="relative w-full">
      <div className="px-8 py-2 bg-black w-full flex justify-between items-center">

        <img
          src={logo}
          alt="logo"
          className="w-44"
        ></img>

        <div className="flex items-center gap-3">
        <button
          className="px-5 py-2 rounded-full font-semibold text-white bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-md hover:shadow-lg transition-all duration-200"
          onClick={handleGptSearch}
          type="button"
        >
        { showGptSearch? "GPT Search" : "Home Page" } 
        </button>

          <img
            className="w-10 h-10 rounded"
            alt="userProfile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPU5gJUj46ufL6FQfX3XvM7lR7qtcMy63tuj2siLuUQ&s=10"
          ></img>
          <button onClick={handleSignOut} className="text-white font-semibold">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
