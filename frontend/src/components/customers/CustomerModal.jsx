function CustomerModal({
  showForm,
  setShowForm,
  newCustomer,
  setNewCustomer,
  addCustomer,
  editingId,
}) {
  if (!showForm) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>
          {editingId !== null ? "Edit Customer" : "Add Customer"}
        </h2>

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
            {editingId !== null ? "Update" : "Save"}
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
  );
}

export default CustomerModal;