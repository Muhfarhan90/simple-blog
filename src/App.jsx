import Home from "./pages/Index";
import { GlobalContext } from "./context";
import router from "./routers";
import { RouterProvider } from "react-router-dom";
function App() {
  const user = { username: "Bonjol" };
  return (
    <div className=" max-w-[768px] mx-auto bg-gray-300 h-screen">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
