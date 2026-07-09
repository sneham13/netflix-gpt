import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
        // User is signed out
        
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <header></header>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
