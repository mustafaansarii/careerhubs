import { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Select } from '@headlessui/react';

const HeatMap = ({ completedQuestions }) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  
  // Generate year options
  const yearOptions = Array.from({ length: 5 }, (_, i) => currentYear - i);

  // Transform data for react-calendar-heatmap
  const heatmapData = completedQuestions?.completed_questions
    ?.map(question => {
      if (!question.completed_at) return null;
      const date = new Date(question.completed_at);
      if (isNaN(date)) return null;
      return {
        date: date.toISOString().split('T')[0],
        count: 1,
        created_at: question.created_at
      };
    })
    .filter(Boolean) // Remove any null entries
    .reduce((acc, curr) => {
      const existing = acc.find(item => item.date === curr.date);
      if (existing) {
        existing.count += 1;
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);

  // Calculate total contributions
  const totalContributions = heatmapData?.reduce((sum, day) => sum + day.count, 0) || 0;

  // Ensure totalContributions is a number
  const safeTotalContributions = Number.isInteger(totalContributions) ? totalContributions : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group relative p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all mb-4"
    >
      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100">
            {safeTotalContributions} Contributions in {selectedYear}
          </h3>
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="w-32 px-2 py-1.5 border border-gray-200 dark:border-gray-700 rounded-md text-sm focus:ring-2 focus:ring-blue-500 dark:text-white dark:bg-gray-700 [&>svg]:-mr-1"
          >
            {yearOptions.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </div>
        
        <div className="mt-4 overflow-x-auto scrollbar-hide">
          <div className="min-w-[1000px] sm:min-w-full">
            <CalendarHeatmap
              startDate={new Date(`${selectedYear}-01-01`)}
              endDate={new Date(`${selectedYear}-12-31`)}
              values={heatmapData || []}
              classForValue={(value) => {
                if (!value) return 'color-empty';
                return `color-green-${Math.min(value.count, 4)}`;
              }}
              tooltipDataAttrs={(value) => ({
                'data-tooltip-id': 'heatmap-tooltip',
                'data-tooltip-content': value.date ? 
                  `${value.count} submission${value.count > 1 ? 's' : ''} on ${new Date(value.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}` + 
                  (value.created_at ? `\nCreated: ${new Date(value.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}` : '') : 'No activity'
              })}
              showWeekdayLabels
              gutterSize={2}
              squareSize={window.innerWidth < 640 ? 16 : 12}
            />
            <Tooltip 
              id="heatmap-tooltip" 
              className="!bg-gray-800 !text-white !py-2 !px-3 !rounded-lg !text-sm"
              place="top"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeatMap;
