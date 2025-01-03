/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function Graph({ dBudget }) {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const categories = dBudget.map((c) => c.category)
        const cost = dBudget.map((a) => a.cost)
        const planned = dBudget.map((p) => p.planned)

        const data = {
            labels: categories,
            datasets: [
                {
                    label: 'Cost',
                    backgroundColor: '#00c606',
                    data: planned
                },
                {
                    label: 'Total Spent',
                    backgroundColor: '#a70000',
                    data: cost
                }
            ]
        };
        data.labels = categories
        const options = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.7,
            plugins: {
                legend: {
                    labels: {
                        fontColor: '#fff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#fff',
                        font: {
                            weight: 700
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: '#fff'
                    },
                    grid: {
                        color: '#fff',
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data)
        setChartOptions(options);
    }, [dBudget]);

    return (
        <div className="card ">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
