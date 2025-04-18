import { Routes, Route } from "react-router-dom";
import { ROUTES } from './routes';
import { LoginPage, RegisterPage } from "../pages";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<LoginPage />}/>
            <Route path={ROUTES.LOGIN} element={<LoginPage />}/>
            <Route path={ROUTES.REGISTER} element={<RegisterPage />}/>
        </Routes>
    )
}

export default AppRouter;