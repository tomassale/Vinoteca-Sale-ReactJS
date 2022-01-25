import { NavLink } from "react-router-dom";

const ItemNavBar = ({ link }) => {
  return (
    <>
      {link.map((mapeo) => {
        return (
            <li key={mapeo.id}>
              <NavLink  to={mapeo.href}>
                {mapeo.nombre}
                <span className="material-icons">{mapeo.icono}</span>
              </NavLink>
            </li>
        )
      })}
    </>
    )
}
export default ItemNavBar;