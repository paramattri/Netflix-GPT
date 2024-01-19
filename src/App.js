import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Header from "./components/Header";
import netflixBgImage from "./images/netflix-background.jpg";

function App() {
  const AppLayout = () => {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <img
          className="absolute w-full h-full object-cover opacity-50"
          src={netflixBgImage}
          alt="Background"
        />
        <Header />
        <Outlet />
      </div>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
