import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Header from "./components/Header";
import appStore from "./utils/appStore";

function App() {
  const AppLayout = () => {
    return (
      <div className="relative w-full h-screen  ">
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

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
