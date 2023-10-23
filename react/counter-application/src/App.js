import "./App.css";
import CounterRow from "./components/CounterRow";
import ProductRow from "./components/ProductRow";
import ProductTable from "./components/ProductTable";
import ProductCategoryRow from "./components/ProductCategoryRow";
import SearchBar from "./components/SearchBar";


// const [count, setCount] = React.useState(0);

function App() {
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <div id="counterContainer">
        <ProductTable />
      </div>
    </>
  );
}

export default App;