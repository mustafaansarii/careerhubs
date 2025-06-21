import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, ChartDataLabels);

export const Distributions = ({ progressChartData, topicDistributionData }) => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#6B7280',
          font: { size: 14 }
        }
      },
      datalabels: {
        display: true,
        color: '#ffffff',
        font: {
          size: 12,
          weight: 'bold'
        },
        formatter: (value) => value > 0 ? value : ''
      }
    },
    scales: {
      y: {
        grid: { color: '#E5E7EB' },
        ticks: { color: '#6B7280', font: { size: 12 } }
      },
      x: {
        grid: { color: '#E5E7EB' },
        ticks: { 
          color: '#6B7280',
          font: { size: 12 },
          callback: (value) => {
            const label = typeof value === 'string' ? value : String(value);
            return label.length > 12 ? `${label.substring(0, 12)}...` : label;
          }
        }
      }
    }
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#6B7280',
          font: { size: 12 }
        }
      },
      datalabels: {
        display: true,
        color: '#ffffff',
        font: {
          size: 12,
          weight: 'bold'
        },
        formatter: (value) => value > 0 ? value : ''
      }
    },
    scales: {
      x: { display: false },
      y: { display: false }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-2">
      <div className="bg-white dark:bg-gray-800/50 p-4 sm:p-6 rounded-lg sm:rounded-2xl shadow-sm sm:shadow-md border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4">Progress Distribution</h3>
        <div className="h-60 sm:h-80">
          <Bar 
            id="progressChart"
            data={progressChartData}
            options={chartOptions}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm sm:shadow-md border border-gray-100 dark:border-gray-700">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 sm:mb-4">Completed Questions Topic Distribution</h3>
        <div className="h-60 sm:h-80 relative">
          <Pie 
            id="topicChart"
            data={topicDistributionData}
            options={pieChartOptions}
          />
        </div>
      </div>
    </div>
  );
};
