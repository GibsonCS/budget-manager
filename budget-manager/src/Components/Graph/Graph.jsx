
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function Graph() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Money',
                    backgroundColor: '#00c606',
                    data: [700, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Total Spent',
                    backgroundColor: '#a70000',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
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
    }, []);

    return (
        <div className="card ">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
