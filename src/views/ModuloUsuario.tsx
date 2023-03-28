import SearchBar from "./../components/SearchBar";
import Content from "../components/Content";

function ModuloUsuario() {
  return (
    <div className="content-container">
      <SearchBar />
      <h1 className="text-2xl m-5">Módulo Empleados</h1>
      <Content/>
    </div>
  );
}

export default ModuloUsuario;
