import BugdgetTable from "./Components/BudgetTable/BudgetTable";
import Filter from "./Components/Filter/Filter";
import Graph from './Components/Graph/Graph'
import "./index.css";

function App() {
  return (
    <section className="flex justify-around p-12 flex-1">
      <section className="w-1/2">
        <Graph />
      </section>
      <section>
        <Filter />
        <BugdgetTable />
      </section>
    </section>
  );
}

export default App
