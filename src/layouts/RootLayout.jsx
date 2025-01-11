import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="bg-yellow-300 flex justify-around p-8">
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
