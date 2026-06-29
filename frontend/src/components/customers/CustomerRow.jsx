function CustomerRow({
  customer,
  deleteCustomer,
  editCustomer,
}) {
  return (
    <tr>
      <td>{customer.name}</td>
      <td>{customer.phone}</td>
      <td>{customer.city}</td>
      <td>{customer.gst}</td>

      <td>
        <button
          className="edit-btn"
          onClick={() => editCustomer(customer)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteCustomer(customer.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CustomerRow;