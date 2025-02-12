import { useContext } from "react";
import {
  FaGlasses,
  FaUserAlt,
  FaBoxOpen,
  FaDatabase,
  FaDoorOpen,
  FaUndo,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

function Menu() {
  const admin = useContext(UserContext);
  return (
    <nav
      className="fixed top-0 left-0 h-screen w-20 flex flex-col
                  bg-gray-50 shadow-lg"
    >
      <div className="content-start">
        <MenuIcon
          icon={<FaGlasses size="28" />}
          tooltip="Clientes"
          route="/cliente"
        />
        <MenuIcon
          icon={<FaBoxOpen size="28" />}
          tooltip="Proveedores"
          route="/proveedor"
        />
        {admin ? (
          <MenuIcon
            icon={<FaUserAlt size="28" />}
            tooltip="Empleados"
            route="/usuario"
          />
        ) : null}
      </div>
      <div className="fixed bottom-0 left-3">
        <hr className="bg-gray-200 border border-gray-200  rounded-full mx-2" />
        <MenuIcon
          icon={<FaDatabase size="28" />}
          tooltip="Exportar Base de Datos"
          route="Exportar"
          redirect={false}
        />
        <MenuIcon
          icon={<FaUndo size="28" />}
          tooltip="Restaurar Base de Datos"
          route="Restaurar"
          redirect={false}
        />
        <MenuIcon icon={<FaDoorOpen size="28" />} tooltip="Salir" route="/" />
      </div>
    </nav>
  );
}

const MenuIcon = ({ icon = {}, tooltip = "", route = "", redirect = true }) => {
  const menuClick = () => {};

  return (
    <>
      {redirect ? (
        <Link to={route} className="menu-icon group">
          <>
            {icon}
            <span className="menu-tooltip group-hover:scale-100">
              {tooltip}
            </span>
          </>
        </Link>
      ) : (
        <div className="menu-icon group" onClick={menuClick}>
          <>
            {icon}
            <span className="menu-tooltip group-hover:scale-100">
              {tooltip}
            </span>
          </>
        </div>
      )}
    </>
  );
};

export default Menu;
