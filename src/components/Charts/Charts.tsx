import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface ChartProps {
  data: number[];
  labels: string[];
}

const ChartComponent: React.FC<ChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Chart Data',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
        });
      }
    }
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
