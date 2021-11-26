import { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                    to={to}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route
              path="/*"
              element={<Navigate to={routes[0].path} replace />}
            />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default Navigation;
