import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PurpleButton from "./PurpleButton";

export function Header() {
  const { isAuth, logout, user } = useAuth();
  console.log(isAuth, user)

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold text-white">
        <Link to={isAuth ? "/tasks" : "/"}>MaL1st✔️</Link>
      </h1>
      <ul className="flex gap-x-2 items-center"> {/* Updated line: added 'items-center' class */}
        {isAuth ? (
          <>
            <li className="flex items-center"> {/* Updated line: added 'flex items-center' classes */}
              Welcome {user.username}
            </li>
            <li>
              <Link to="/add-task">
                <PurpleButton text="Add Task" />
              </Link>
            </li>
            <li>
              <PurpleButton text="Logout" onClick={() => logout()} />
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <PurpleButton text="Login" />
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <PurpleButton text="Register" />
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
