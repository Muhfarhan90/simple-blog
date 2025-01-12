import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="">
      <div className="bg-yellow-300 flex justify-around p-8">
        <NavLink to="/" className={({isActive}) => `text-xl font-bold hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}  `}>
          Home
        </NavLink>
        <NavLink to="/blog" className={({isActive}) => `text-xl font-bold hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}  `}>Blog</NavLink>
        <NavLink to="/about" className={({isActive}) => `text-xl font-bold hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}  `}>About</NavLink>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
