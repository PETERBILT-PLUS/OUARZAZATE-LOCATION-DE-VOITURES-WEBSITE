import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import './App.css'
import Layout from "./Layout/Layout/Layout";
import Home from "./Pages/Home/Home.tsx";
import NosVoitures from "./Pages/NosVoitures/NosVoitures.tsx";
import APropos from "./Pages/APropos/APropos.tsx";
import ConditionGeneral from "./Pages/ConditionGeneral/ConditionGeneral.tsx";
import Contact from "./Pages/Contact/Contact.tsx";

function App() {

  const router: any = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="nos-voitures" element={<NosVoitures />} />
      <Route path="a-propos" element={<APropos />} />
      <Route path="condition-generale" element={<ConditionGeneral />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
