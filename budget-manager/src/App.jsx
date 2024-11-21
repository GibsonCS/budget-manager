/* eslint-disable no-unused-vars */
import { data } from "autoprefixer";
import BugdgetTable from "./Components/BudgetTable/BudgetTable";
import Filter from "./Components/Filter/Filter";
import Graph from './Components/Graph/Graph'
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [budgetData, setBudgetData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBudget = async () => {
      const response = await fetch('https://sheet2api.com/v1/VFJVTlUeRMe2/budget', {
        method: 'GET',
      })
      const data = await response.json();
      setBudgetData(data);
      setLoading(false)
    }
    getBudget();
  }, [data])



  return (
    <section className="flex justify-around p-12 flex-1">
      <section className="w-1/2">
        {loading &&
          <p>Carregando...</p>
        }
        <Graph dBudget={budgetData} />
      </section>
      <section>
        <Filter />
        <BugdgetTable data={budgetData} />
      </section>
    </section>
  );
}

export default App
