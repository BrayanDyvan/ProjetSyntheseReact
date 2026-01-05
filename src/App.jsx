
import { Route,Routes } from "react-router-dom";
import PageListe1 from "./PageListe1/PageListe1";
import NavBarPage from "./NavBarPage/NavBarPage";
import PageDAcceuil from "./PageDAcceuil/PageDAcceuil";
import Connexion from "./Connexion/Connexion";
import PageZoom1 from "./Zoom/PageZoom1";
import PageListe2 from "./PageListe2/PageListe2";
import PageZoom2 from "./Zoom/PageZoom2";

export default  function App() {

  return (
    <>
    <NavBarPage/>
    <Routes>
      <Route path="/" element={< PageDAcceuil/>} />
      <Route path="/Page_Liste_1" element={<PageListe1 />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/Zoom1" element={<PageZoom1/>} />
      <Route path="/Page_Liste_2" element={<PageListe2 />} />
      <Route path="/Zoom2" element={<PageZoom2/>} />
    </Routes>
    </>
  )
}


