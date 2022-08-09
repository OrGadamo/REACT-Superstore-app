import { customersArray } from "./Customers.component";
export default function CustomerTable() {
  return (
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Street</th>
        <th>Date</th>
        <th>Image url</th>
      </thead>
      <tbody>
        {customersArray.map((customer) => (
          <tr>
            <td>{customer.fName}</td>
            <td>{customer.lName}</td>
            <td>{customer.street}</td>
            <td>{customer.date}</td>
            <td>{customer.pic}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
