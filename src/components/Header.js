import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.error("Error signing out:", error);
      navigate("/error");
    });
  };

  return (
    <div className="relative w-full">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/IN-en-20260706-TRIFECTA-perspective_2f2fae68-6962-4d52-8cc2-1fe6ef5c6a56_large.jpg"
        alt="header"
        className="w-full object-cover"
      ></img>

      <div className="absolute top-0 px-8 py-2 bg-linear-to-b from-black to-transparent w-full flex justify-between items-center">
        <img
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAeuLioOK1ZSC8bQbffYbz1gZFxugAQdkx7UsMvqKDtFJLk3EWkpY-w8IBimYy_0xmg1aTzugh7JDHsGzv6hqIL9_qklFo-PFSH81MwCe9rokU4kGkdki.svg"
          alt="logo"
          className="w-44"
        ></img>

        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded" alt="userProfile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPU5gJUj46ufL6FQfX3XvM7lR7qtcMy63tuj2siLuUQ&s=10"></img>
          <button onClick={handleSignOut} className="text-white font-semibold">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
