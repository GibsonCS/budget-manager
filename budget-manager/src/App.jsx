/* eslint-disable react-hooks/exhaustive-deps */

import { data } from "autoprefixer";
import BugdgetTable from "./Components/BudgetTable/BudgetTable";
import Filter from "./Components/Filter/Filter";
import Graph from './Components/Graph/Graph'
import "./index.css";
import { useEffect, useState } from "react";
import { Github } from "lucide-react"

function App() {
  const [budgetData, setBudgetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtedDate, setFiltedDate] = useState([])
  const [filter, setFilter] = useState({ start: '', end: '' })

  useEffect(() => {
    const getBudget = async () => {
      const response = await fetch('https://sheet2api.com/v1/VFJVTlUeRMe2/budget', {
        method: 'GET',
      })
      const data = await response.json();
      setBudgetData(data);
      setFiltedDate(data)
      setLoading(false)
    }
    getBudget();
  }, [data])

  const convertDateToIso = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    if (filter.start && filter.end) {
      const startDate = new Date(`${filter.start}T00:00:00`);
      const endDate = new Date(`${filter.end}T23:59:59`); // Incluir até o final do dia

      const fils = budgetData.filter((item) => {
        const date = new Date(`${convertDateToIso(item.date)}T00:00:00`)
        return date >= startDate && date <= endDate;
      });
      setFiltedDate(fils)
    }
  }, [filter, budgetData]);

  return (
    <section className="sm:flex flex-wrap justify-around p-12 flex-1">
      <section className="sm:w-1/2 w-full">
        {loading &&
          <p>Carregando...</p>
        }
        <Graph dBudget={filtedDate} />
        <Filter setFilter={setFilter} />
      </section>
      <section>
        <BugdgetTable data={budgetData} />
        <a className="flex gap-2 justify-center flex-row-reverse" href='https://github.com/GibsonCS/budget-manager' target='_blanck'>Source code<Github /></a>
      </section>
    </section>
  );
}
export default App
