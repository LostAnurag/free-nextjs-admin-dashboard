"use client";
import React, { useState } from "react";

export default function DataVisualization() {
  const [selectedChart, setSelectedChart] = useState(null);
  const [drillDownData, setDrillDownData] = useState(null);
  const [timeRange, setTimeRange] = useState("6months");

  const salesData = [
    { month: "Jan", revenue: 45000, deals: 12, conversion: 24 },
    { month: "Feb", revenue: 52000, deals: 15, conversion: 28 },
    { month: "Mar", revenue: 48000, deals: 13, conversion: 26 },
    { month: "Apr", revenue: 61000, deals: 18, conversion: 32 },
    { month: "May", revenue: 55000, deals: 16, conversion: 29 },
    { month: "Jun", revenue: 67000, deals: 20, conversion: 35 }
  ];

  const pipelineData = [
    { stage: "Leads", count: 1000, value: 500000 },
    { stage: "Qualified", count: 400, value: 400000 },
    { stage: "Demo", count: 200, value: 300000 },
    { stage: "Proposal", count: 100, value: 200000 },
    { stage: "Closed Won", count: 40, value: 120000 }
  ];

  const teamPerformance = [
    { name: "Alice Miller", revenue: 85000, deals: 12, color: "#10B981" },
    { name: "Bob Johnson", revenue: 72000, deals: 15, color: "#3B82F6" },
    { name: "Carol Davis", revenue: 45000, deals: 9, color: "#F59E0B" },
    { name: "David Wilson", revenue: 63000, deals: 11, color: "#8B5CF6" }
  ];

  const handleChartClick = (chartType, dataPoint) => {
    setSelectedChart(chartType);
    setDrillDownData(dataPoint);
  };

  const closeDrillDown = () => {
    setSelectedChart(null);
    setDrillDownData(null);
  };

  const LineChart = ({ data, title, onPointClick }) => (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 350 + 25;
            const y = 180 - (point.revenue / 70000) * 150;
            const nextPoint = data[index + 1];
            return (
              <g key={index}>
                {nextPoint && (
                  <line
                    x1={x}
                    y1={y}
                    x2={(index + 1) / (data.length - 1) * 350 + 25}
                    y2={180 - (nextPoint.revenue / 70000) * 150}
                    stroke="#3B82F6"
                    strokeWidth="3"
                  />
                )}
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#3B82F6"
                  className="cursor-pointer hover:r-8 transition-all"
                  onClick={() => onPointClick('line', point)}
                />
                <text x={x} y={195} textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400">
                  {point.month}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );

  const BarChart = ({ data, title, onBarClick }) => (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-20 text-sm text-gray-600 dark:text-gray-400">{item.name}</div>
            <div className="flex-1 relative">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div
                  className="h-full rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  style={{
                    width: `${(item.revenue / 85000) * 100}%`,
                    backgroundColor: item.color
                  }}
                  onClick={() => onBarClick('bar', item)}
                />
              </div>
              <span className="absolute right-2 top-1 text-xs text-white font-medium">
                ${(item.revenue / 1000).toFixed(0)}K
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PieChart = ({ data, title, onSliceClick }) => {
    const total = data.reduce((sum, item) => sum + item.deals, 0);
    let currentAngle = 0;
    
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
        <div className="flex items-center justify-center">
          <svg className="w-48 h-48" viewBox="0 0 200 200">
            {data.map((item, index) => {
              const percentage = (item.deals / total) * 100;
              const angle = (percentage / 100) * 360;
              const startAngle = currentAngle;
              const endAngle = currentAngle + angle;
              currentAngle += angle;
              
              const x1 = 100 + 80 * Math.cos((startAngle - 90) * Math.PI / 180);
              const y1 = 100 + 80 * Math.sin((startAngle - 90) * Math.PI / 180);
              const x2 = 100 + 80 * Math.cos((endAngle - 90) * Math.PI / 180);
              const y2 = 100 + 80 * Math.sin((endAngle - 90) * Math.PI / 180);
              
              const largeArcFlag = angle > 180 ? 1 : 0;
              
              return (
                <path
                  key={index}
                  d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={item.color}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => onSliceClick('pie', item)}
                />
              );
            })}
          </svg>
        </div>
        <div className="mt-4 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}: {item.deals} deals</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const FunnelChart = ({ data, title, onStageClick }) => (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="space-y-2">
        {data.map((stage, index) => {
          const width = ((stage.count / data[0].count) * 100);
          const conversionRate = index > 0 ? ((stage.count / data[index - 1].count) * 100).toFixed(1) : 100;
          
          return (
            <div key={index} className="relative">
              <div
                className="h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-between px-4"
                style={{ width: `${width}%` }}
                onClick={() => onStageClick('funnel', stage)}
              >
                <span className="text-white font-medium">{stage.stage}</span>
                <span className="text-white text-sm">{stage.count}</span>
              </div>
              {index > 0 && (
                <div className="absolute -right-16 top-3 text-xs text-gray-600 dark:text-gray-400">
                  {conversionRate}%
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const WaterfallChart = ({ data, title }) => (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 500 200">
          {data.map((stage, index) => {
            const x = index * 80 + 40;
            const barHeight = (stage.count / data[0].count) * 150;
            const y = 180 - barHeight;
            
            return (
              <g key={index}>
                <rect
                  x={x - 20}
                  y={y}
                  width="40"
                  height={barHeight}
                  fill={index === 0 ? "#10B981" : index === data.length - 1 ? "#EF4444" : "#3B82F6"}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
                <text x={x} y={195} textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400">
                  {stage.stage}
                </text>
                <text x={x} y={y - 5} textAnchor="middle" className="text-xs fill-gray-900 dark:fill-white font-medium">
                  {stage.count}
                </text>
                {index < data.length - 1 && (
                  <line
                    x1={x + 20}
                    y1={y + barHeight / 2}
                    x2={x + 60}
                    y2={180 - (data[index + 1].count / data[0].count) * 150 + (data[index + 1].count / data[0].count) * 150 / 2}
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Data Visualization</h1>
            <p className="text-gray-600 dark:text-gray-400">Interactive charts and analytics</p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <LineChart
          data={salesData}
          title="Revenue Trend"
          onPointClick={handleChartClick}
        />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <BarChart
          data={teamPerformance}
          title="Team Performance"
          onBarClick={handleChartClick}
        />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <PieChart
          data={teamPerformance}
          title="Deals Distribution"
          onSliceClick={handleChartClick}
        />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <FunnelChart
          data={pipelineData}
          title="Sales Funnel"
          onStageClick={handleChartClick}
        />
      </div>

      <div className="col-span-12">
        <WaterfallChart
          data={pipelineData}
          title="Conversion Waterfall"
        />
      </div>
        
      <div className="col-span-12">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">+23%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Growth</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">vs last period</div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">+15%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">vs last period</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">-8%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Sales Cycle</div>
              <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">vs last period</div>
            </div>
          </div>
        </div>
      </div>

      {selectedChart && drillDownData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Drill-down Data</h3>
              <button
                onClick={closeDrillDown}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              {Object.entries(drillDownData).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 capitalize">{key}:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {typeof value === 'number' && key.includes('revenue') ? `$${value.toLocaleString()}` : value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex space-x-3">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Details
              </button>
              <button
                onClick={closeDrillDown}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}