import Home from "./Home.component";
import Customers from "./Customers.component";
import CustomerTable from "./CustomersTable.component";
function App() {
  return (
    <div className="App">
      <Home storeName="7Eleven" owner="Or Gadamo" />
      <Customers />
      <CustomerTable />
    </div>
  );
}

export default App;
