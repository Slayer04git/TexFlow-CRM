import { FaUsers, FaShoppingCart, FaBox, FaWarehouse } from "react-icons/fa";

function StatCard({ title, value }) {
  let icon;

  if (title === "Total Customers") {
    icon = <FaUsers size={30} />;
  } else if (title === "Total Orders") {
    icon = <FaShoppingCart size={30} />;
  } else if (title === "Products") {
    icon = <FaBox size={30} />;
  } else {
    icon = <FaWarehouse size={30} />;
  }

  return (
    <div className="card">
      <div className="card-icon">{icon}</div>

      <h3>{title}</h3>

      <h2>{value}</h2>
    </div>
  );
}

export default StatCard;