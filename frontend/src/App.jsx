import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutenProvider } from "./context/AutenContext";
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import IndicadorForm from "./pages/IndicatorFormPage";
import HomePage from "./pages/HomePage";
import CreateObjetives from "./pages/CreateObjetives";
import Profiles from "./pages/Profiles";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <AutenProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>


          <Route element={<ProtectedRoute/>}>
              <Route path="/create-indicator" element={<IndicadorForm/>}/>
              <Route path="/create-objetives" element={<CreateObjetives/>}/>
              <Route path="/profiles" element={<Profiles/>}/>
          </Route>
        
        </Routes>
      </BrowserRouter>
    </AutenProvider>
  )
}