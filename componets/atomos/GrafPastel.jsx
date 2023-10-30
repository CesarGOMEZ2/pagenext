'use client'

import React, { useState, useEffect } from 'react';
import { Chart } from '../../node_modules/primereact/chart';

export default function GrafPastel() {
    const [chartData, setChartData] = useState(0);
    const [chartOptions, setChartOptions] = useState(0);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [
                        "rgba(255, 228, 0)",
                        'rgba(0, 128, 255)',
                        'rgba(19, 255, 0)',
                        
                    ],
                    hoverBackgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="pie" data={chartData} options={chartOptions} className="" />
        </div>
    )
}