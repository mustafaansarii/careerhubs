'use client'
import { useTheme } from 'next-themes';
import { RadialBarChart, RadialBar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell, PieChart, Pie } from 'recharts';

export default function ResumeAnalysisCharts({ analysisData }) {
  const { theme } = useTheme();

  // Ensure ATS score is always greater than 60
  const atsScore = Math.max(analysisData.ats_score, 60);

  // Color scheme for both light and dark modes
  const colors = {
    format: '#6366f1', // Indigo
    impact: '#10b981', // Emerald
    action: '#f59e0b', // Amber
    keyword: '#ef4444', // Red
    text: theme === 'dark' ? '#ffffff' : '#374151', // White in dark mode, gray in light mode
    background: theme === 'dark' ? '#1f2937' : '#f0f0f0', // Dark gray in dark mode, light gray in light mode
    grid: theme === 'dark' ? '#4b5563' : '#e5e7eb' // Gray for grid lines
  };

  // Data for Radial Bar Chart (Format Analysis)
  const formatRadialData = [
    {
      name: 'Format Score',
      value: analysisData.format_analysis.score + 50, // Add 50 to the score
      fill: colors.format
    }
  ];

  // Data for Bar Chart (Experience Analysis)
  const experienceBarData = [
    {
      name: 'Impact Statements',
      value: analysisData.experience_analysis.impact_statements_score + 50, // Add 50 to the score
      fill: colors.impact
    },
    {
      name: 'Action Verbs',
      value: analysisData.experience_analysis.action_verbs_score + 50, // Add 50 to the score
      fill: colors.action
    }
  ];

  // Data for Pie Chart (Keyword Density)
  const keywordPieData = [
    { name: 'Keywords', value: analysisData.keyword_analysis.keyword_density + 50 }, // Add 50 to the score
    { name: 'Other', value: 100 - (analysisData.keyword_analysis.keyword_density + 50) },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
      {/* Format Analysis */}
      <div className="p-6 border-r border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Format Analysis</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="20%"
              outerRadius="100%"
              data={formatRadialData}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                minAngle={15}
                background
                clockWise
                dataKey="value"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill={colors.text}
                fontSize="24px"
                fontWeight="bold"
              >
                {`${analysisData.format_analysis.score + 50}%`}
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
          Your resume format scores {analysisData.format_analysis.score + 50}% based on ATS compatibility.
        </p>
      </div>

      {/* Experience Analysis */}
      <div className="p-6 border-r border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Experience Analysis</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={experienceBarData}>
              <XAxis
                dataKey="name"
                tick={{ fill: colors.text }}
                axisLine={{ stroke: colors.grid }}
              />
              <YAxis
                domain={[0, 100]} // Adjusted to 100 since we added 50
                tick={{ fill: colors.text }}
                axisLine={{ stroke: colors.grid }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: colors.background,
                  borderColor: colors.grid,
                  color: colors.text
                }}
              />
              <Bar dataKey="value">
                {experienceBarData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
          Your experience section scores {analysisData.experience_analysis.impact_statements_score + 50} in impact statements and {analysisData.experience_analysis.action_verbs_score + 50} in action verbs.
        </p>
      </div>

      {/* Keyword Density */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Keyword Density</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={keywordPieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill={colors.keyword}
                label
              >
                {keywordPieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? colors.keyword : colors.grid} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: colors.background,
                  borderColor: colors.grid,
                  color: colors.text
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
          Your resume has a keyword density of {analysisData.keyword_analysis.keyword_density + 50}%.
        </p>
      </div>
    </div>
  );
}