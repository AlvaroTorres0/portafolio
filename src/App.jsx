import './App.css'
import NavBar from "./Components/Navbar/Navbar";
import Inicio from "./Components/Inicio/Inicio";
import SobreMi from "./Components/Sobremi/SobreMi";
import Proyectos from "./Components/Proyectos/Proyectos";
import Certificados from "./Components/Certificados/Certificados";

function App() {

  return (
    <div className="container-principal">
      <NavBar></NavBar>
      <Inicio></Inicio>
      <SobreMi></SobreMi>
      {/* Proyectos da problema */}
      <Proyectos></Proyectos>
      <Certificados></Certificados>
    </div>
  )
}

export default App
