import StatCard from "../components/dashboard/StatCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="cards">
        <StatCard title="Total Customers" value="128" />
        <StatCard title="Total Orders" value="56" />
        <StatCard title="Products" value="245" />
        <StatCard title="Inventory Value" value="₹1,75,000" />
      </div>
    </div>
  );
}

export default Dashboard;