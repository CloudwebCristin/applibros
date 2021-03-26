import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/register",
    render: () => <Register />,
    private: false,
    public: true,
    exact: true,
  },
  {
    path: "/login",
    render: () => <Login />,
    private: false,
    public: true,
    exact: true,
  },
  {
    path: "/",
    render: () => <Home />,
    private: true,
    public: true,
    exact: true,
  },
];

