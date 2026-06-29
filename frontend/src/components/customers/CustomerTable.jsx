import CustomerRow from "./CustomerRow";

function CustomerTable({
  customers,
  search,
  deleteCustomer,
  editCustomer,
}) {
  return (
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
            <CustomerRow
              key={customer.id}
              customer={customer}
              deleteCustomer={deleteCustomer}
              editCustomer={editCustomer}
            />
          ))}
      </tbody>
    </table>
  );
}

export default CustomerTable;