import { useState } from "react";

function Customers() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "ABC Textiles",
      phone: "9876543210",
      city: "Surat",
      gst: "24ABCDE1234F1Z5",
    },
    {
      id: 2,
      name: "XYZ Fabrics",
      phone: "9876500000",
      city: "Ahmedabad",
      gst: "24PQRS1234A1Z2",
    },
    {
      id: 3,
      name: "Fashion Hub",
      phone: "9123456780",
      city: "Mumbai",
      gst: "27AAAAA1111A1Z1",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    phone: "",
    city: "",
    gst: "",
  });

  // Add Customer
  const addCustomer = () => {
    if (
      newCustomer.name === "" ||
      newCustomer.phone === "" ||
      newCustomer.city === "" ||
      newCustomer.gst === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    setCustomers([
      ...customers,
      {
        id: customers.length + 1,
        ...newCustomer,
      },
    ]);

    setNewCustomer({
      name: "",
      phone: "",
      city: "",
      gst: "",
    });

    setShowForm(false);
  };

  // Delete Customer
  const deleteCustomer = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (confirmDelete) {
      setCustomers(
        customers.filter((customer) => customer.id !== id)
      );
    }
  };

  return (
    <div className="page">
      <h1>Customers</h1>

      <div className="customer-header">
        <input
          type="text"
          placeholder="Search customer..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="add-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Customer
        </button>
      </div>

      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>City</th>
            <th>GST</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers
            .filter((customer) =>
              customer.name
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.city}</td>
                <td>{customer.gst}</td>

                <td>
                  <button className="edit-btn">
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteCustomer(customer.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Customer</h2>

            <input
              type="text"
              placeholder="Customer Name"
              value={newCustomer.name}
              onChange={(e) =>
                setNewCustomer({
                  ...newCustomer,
                  name: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={newCustomer.phone}
              onChange={(e) =>
                setNewCustomer({
                  ...newCustomer,
                  phone: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="City"
              value={newCustomer.city}
              onChange={(e) =>
                setNewCustomer({
                  ...newCustomer,
                  city: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="GST Number"
              value={newCustomer.gst}
              onChange={(e) =>
                setNewCustomer({
                  ...newCustomer,
                  gst: e.target.value,
                })
              }
            />

            <div className="modal-buttons">
              <button
                className="save-btn"
                onClick={addCustomer}
              >
                Save
              </button>

              <button
                className="cancel-btn"
                onClick={() => {
                  setShowForm(false);

                  setNewCustomer({
                    name: "",
                    phone: "",
                    city: "",
                    gst: "",
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Customers;