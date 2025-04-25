import { BrowserRouter } from "react-router";
import { ManagerRoutes } from "./manager-routes";

import { Loading } from "../components/Loading";
import { EmployeeRoutes } from "./employee-routes";
import { AuthRoutes } from "./auth-routes";

const isLoading = false;

const session = {
  user: {
    role: "",
  },
};

export function Routes() {
  function Route() {
    switch (session.user.role) {
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
