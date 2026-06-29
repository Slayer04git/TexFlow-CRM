import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>

      <ul>
        <li>
          <NavLink to="/" end>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/customers">
            Customers
          </NavLink>
        </li>

        <li>
          <NavLink to="/products">
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders">
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="/inventory">
            Inventory
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;