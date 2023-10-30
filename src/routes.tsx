import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import CompanyCreate from "./components/company/company.create";
import Login from "./pages/Login";
import Company from "./pages/company/company";
import Signup from "./pages/Signup";
import RecoveryPassword from "./pages/RecoveryPassword";
import ChangePassword from "./pages/ChangePassword";
import CompanyEdit from "./components/company/company.edit";
import Expense from "./components/company/company.expense";
import { clear, getItem } from "./utils/storage";
import { useEffect, useState } from "react";
import AxiosInstance from "./connection";
import { toastfy } from "./hooks/toasfy";

function UserLogged({ redirectTo }: { redirectTo: string }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await AxiosInstance.axiosPrivate.get("/verifyToken/ceo", {
          headers: {
            Authorization: `Bearer ${await getItem("token")}`,
          },
        });
      } catch (error: any) {
        if (error.response.status === 401) {
          toastfy("error", "Sua sessão expirou", "text-red", 3000);
          await clear();
          setTimeout(() => {
            return navigate("/");
          }, 3000);
        }
      }
    };

    const checkAuth = async () => {
      const authToken = await getItem("token");

      if (authToken) await verifyToken();
      setIsAuth(Boolean(authToken));
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuth ? <Navigate to={redirectTo} /> : <Outlet />;
}

function ProtectRoute({ redirectTo }: { redirectTo: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authToken = await getItem("token");
      setIsAuth(Boolean(authToken));
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log({ begin: init });

    const initiService = async () => {
      const {
        data: { initial },
      } = await AxiosInstance.axiosInit.get("/");
      console.log(initial);

      if (initial) {
        setInit(true);
      }
    };

    initiService();
  }, []);

  return (
    <Routes>
      <Route
        path="*"
        element={
          <h1
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            {`(╯°□°）╯︵ ┻━┻ 
                     Essa página não existe!`}
          </h1>
        }
      ></Route>
      <Route element={<UserLogged redirectTo="/home" />}>
        <Route path="/">
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login init={init} />} />
          <Route path="/recoveryPassword" element={<RecoveryPassword />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Route>
      </Route>
      <Route element={<ProtectRoute redirectTo="/" />}>
        <Route path="/home" element={<Home init={init} />} />
        <Route path="/newCompany" element={<CompanyCreate />} />
        <Route path="/info" element={<Company />} />
        <Route path="/editCompany" element={<CompanyEdit />} />
        <Route path="/required" element={<Expense />} />
        <Route path="/shop" element={<Expense />} />
      </Route>
    </Routes>
  );
}
