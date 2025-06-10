import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoPizza = ({ dataErro }) => {
  const data = {
    labels: ['Taxa de Erro', 'Taxa de Acertos'],
    datasets: [
      {
        label: 'Sua Taxa',
        data: dataErro,
        backgroundColor: [
          '#F96868',
          '#7EC384',
        ],
        borderColor: [
          '#F96868',
          '#7EC384',
        ],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
  const pluginMostrarValores = {
    id: 'pluginMostrarValores',
    afterDatasetDraw(chart) {
        const { ctx } = chart;
        const dataset = chart.data.datasets[0];
        const meta = chart.getDatasetMeta(0);

        const total = dataset.data.reduce((a, b) => a + b, 0);

        meta.data.forEach((element, index) => {
        const valor = dataset.data[index];
        const percentual = valor;

        const pos = element.tooltipPosition();

        ctx.save();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 15px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(percentual, pos.x, pos.y);
        ctx.restore();
        });
  }
};

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <Pie data={data} options={options} plugins={[pluginMostrarValores]} />
    </div>
  );
};

export default GraficoPizza;
