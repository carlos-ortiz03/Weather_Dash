import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const WeatherChart = ({ weatherForecast }) => {
  // Define a function to create the chart
  const createChart = () => {
    if (weatherForecast) {
      const ctx = document.getElementById('myChart'); // Reference the canvas element by its ID

      // Extract relevant data from your weatherForecast and format it for the chart.
      const dates = weatherForecast.map((day) => day.date);
      const maxTemps = weatherForecast.map((day) => day.max_temp);
      const minTemps = weatherForecast.map((day) => day.min_temp);

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Max Temperature (°C)',
              data: maxTemps,
              borderColor: 'blue',
              fill: false,
            },
            {
              label: 'Min Temperature (°C)',
              data: minTemps,
              borderColor: 'red',
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Temperature (°C)',
              },
            },
          },
        },
      });
    }
  };

  // Call the createChart function when the component mounts or when weatherForecast updates
  useEffect(() => {
    createChart();
  }, [weatherForecast]);

  return <canvas id="myChart" width="400" height="200" />;
};

export default WeatherChart;
