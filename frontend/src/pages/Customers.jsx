import { useState, useEffect } from "react";

import SearchBar from "../components/customers/SearchBar";
import CustomerTable from "../components/customers/CustomerTable";
import CustomerModal from "../components/customers/CustomerModal";

function Customers() {
  const defaultCustomers = [
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
  ];

  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem("customers");
    return savedCustomers
      ? JSON.parse(savedCustomers)
      : defaultCustomers;
  });

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    phone: "",
    city: "",
    gst: "",
  });

  // Save customers to Local Storage
  useEffect(() => {
    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );
  }, [customers]);

  // Add or Update Customer
  const addCustomer = () => {
    if (
      !newCustomer.name ||
      !newCustomer.phone ||
      !newCustomer.city ||
      !newCustomer.gst
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingId !== null) {
      setCustomers(
        customers.map((customer) =>
          customer.id === editingId
            ? { ...customer, ...newCustomer }
            : customer
        )
      );
    } else {
      setCustomers([
        ...customers,
        {
          id: Date.now(),
          ...newCustomer,
        },
      ]);
    }

    setNewCustomer({
      name: "",
      phone: "",
      city: "",
      gst: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  // Delete Customer
  const deleteCustomer = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (confirmDelete) {
      setCustomers(
        customers.filter(
          (customer) => customer.id !== id
        )
      );
    }
  };

  // Edit Customer
  const editCustomer = (customer) => {
    setEditingId(customer.id);

    setNewCustomer({
      name: customer.name,
      phone: customer.phone,
      city: customer.city,
      gst: customer.gst,
    });

    setShowForm(true);
  };

  return (
    <div className="page">
      <h1>Customers</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        setShowForm={setShowForm}
      />

      <CustomerTable
        customers={customers}
        search={search}
        deleteCustomer={deleteCustomer}
        editCustomer={editCustomer}
      />

      <CustomerModal
        showForm={showForm}
        setShowForm={setShowForm}
        newCustomer={newCustomer}
        setNewCustomer={setNewCustomer}
        addCustomer={addCustomer}
        editingId={editingId}
      />
    </div>
  );
}

export default Customers;