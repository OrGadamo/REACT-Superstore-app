import Home from "./Home.component";
import Customers from "./Customers.component";
function App() {
  return (
    <div className="App">
      <Home storeName="7Eleven" owner="Or Gadamo" />
      <Customers />
    </div>
  );
}

export default App;
