"use client";
import React, { useState } from "react";

export default function ForecastPredictions() {
  const [forecastPeriod, setForecastPeriod] = useState("quarterly");
  const [selectedMetric, setSelectedMetric] = useState("revenue");

  const monthlyForecast = [
    { period: "Jan 2024", forecasted: 450000, actual: 425000, pipeline: 380000, confidence: 85 },
    { period: "Feb 2024", forecasted: 480000, actual: 465000, pipeline: 420000, confidence: 88 },
    { period: "Mar 2024", forecasted: 520000, actual: 510000, pipeline: 480000, confidence: 92 },
    { period: "Apr 2024", forecasted: 550000, actual: null, pipeline: 520000, confidence: 87 },
    { period: "May 2024", forecasted: 580000, actual: null, pipeline: 540000, confidence: 83 },
    { period: "Jun 2024", forecasted: 610000, actual: null, pipeline: 580000, confidence: 89 }
  ];

  const quarterlyForecast = [
    { period: "Q1 2024", forecasted: 1450000, actual: 1400000, pipeline: 1280000, confidence: 88 },
    { period: "Q2 2024", forecasted: 1740000, actual: null, pipeline: 1640000, confidence: 86 },
    { period: "Q3 2024", forecasted: 1890000, actual: null, pipeline: 1750000, confidence: 82 },
    { period: "Q4 2024", forecasted: 2100000, actual: null, pipeline: 1920000, confidence: 79 }
  ];

  const accuracyMetrics = [
    { metric: "Overall Accuracy", value: "92.3%", trend: "+2.1%", color: "green" },
    { metric: "Revenue Forecast", value: "89.7%", trend: "+1.8%", color: "green" },
    { metric: "Deal Count", value: "94.1%", trend: "-0.5%", color: "yellow" },
    { metric: "Close Date", value: "76.4%", trend: "+3.2%", color: "green" }
  ];

  const revenueAtRisk = [
    { deal: "Enterprise Corp Deal", value: 250000, probability: 45, risk: "High", daysToClose: 15, reason: "Budget concerns" },
    { deal: "TechStart Integration", value: 180000, probability: 60, risk: "Medium", daysToClose: 8, reason: "Decision delay" },
    { deal: "Global Solutions", value: 320000, probability: 35, risk: "High", daysToClose: 22, reason: "Competitor threat" },
    { deal: "Innovation Labs", value: 150000, probability: 55, risk: "Medium", daysToClose: 12, reason: "Technical concerns" }
  ];

  const upsidePotential = [
    { deal: "MegaCorp Expansion", value: 450000, probability: 85, potential: "High", daysToClose: 5, accelerator: "Executive sponsor" },
    { deal: "DataFlow Premium", value: 280000, probability: 78, potential: "High", daysToClose: 10, accelerator: "Urgent timeline" },
    { deal: "CloudTech Upgrade", value: 190000, probability: 82, potential: "Medium", daysToClose: 7, accelerator: "Budget approved" },
    { deal: "ScaleUp Solutions", value: 220000, probability: 75, potential: "Medium", daysToClose: 14, accelerator: "Strong champion" }
  ];

  const currentData = forecastPeriod === "monthly" ? monthlyForecast : quarterlyForecast;

  const ForecastChart = ({ data }) => (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {forecastPeriod === "monthly" ? "Monthly" : "Quarterly"} Sales Forecast
      </h3>
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 600 200">
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 550 + 25;
            const forecastY = 180 - (point.forecasted / (forecastPeriod === "monthly" ? 700000 : 2500000)) * 150;
            const actualY = point.actual ? 180 - (point.actual / (forecastPeriod === "monthly" ? 700000 : 2500000)) * 150 : null;
            const pipelineY = 180 - (point.pipeline / (forecastPeriod === "monthly" ? 700000 : 2500000)) * 150;
            
            return (
              <g key={index}>
                <rect
                  x={x - 8}
                  y={pipelineY}
                  width="16"
                  height={180 - pipelineY}
                  fill="#E5E7EB"
                  opacity="0.6"
                />
                
                {index > 0 && (
                  <line
                    x1={(index - 1) / (data.length - 1) * 550 + 25}
                    y1={180 - (data[index - 1].forecasted / (forecastPeriod === "monthly" ? 700000 : 2500000)) * 150}
                    x2={x}
                    y2={forecastY}
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                  />
                )}
                
                {actualY && index > 0 && data[index - 1].actual && (
                  <line
                    x1={(index - 1) / (data.length - 1) * 550 + 25}
                    y1={180 - (data[index - 1].actual / (forecastPeriod === "monthly" ? 700000 : 2500000)) * 150}
                    x2={x}
                    y2={actualY}
                    stroke="#10B981"
                    strokeWidth="3"
                  />
                )}
                
                <circle cx={x} cy={forecastY} r="4" fill="#3B82F6" />
                {actualY && <circle cx={x} cy={actualY} r="4" fill="#10B981" />}
                
                <text x={x} y={195} textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400">
                  {point.period.split(' ')[0]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Pipeline</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Forecasted</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Actual</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Forecast & Predictions</h1>
            <p className="text-gray-600 dark:text-gray-400">Sales forecasting and predictive analytics</p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={forecastPeriod}
              onChange={(e) => setForecastPeriod(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="monthly">Monthly Forecast</option>
              <option value="quarterly">Quarterly Forecast</option>
            </select>
          </div>
        </div>
      </div>

      <div className="col-span-12">
        <ForecastChart data={currentData} />
      </div>

      <div className="col-span-12">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Forecast Accuracy Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {accuracyMetrics.map((metric, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.metric}</div>
                <div className={`text-xs font-medium ${
                  metric.color === 'green' ? 'text-green-600 dark:text-green-400' : 
                  metric.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' : 
                  'text-red-600 dark:text-red-400'
                }`}>
                  {metric.trend} vs last period
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue at Risk</h3>
            <div className="text-sm text-red-600 dark:text-red-400 font-medium">
              ${revenueAtRisk.reduce((sum, deal) => sum + deal.value, 0).toLocaleString()} at risk
            </div>
          </div>
          <div className="space-y-3">
            {revenueAtRisk.map((deal, index) => (
              <div key={index} className="p-4 border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/20 rounded">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">{deal.deal}</h4>
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${
                    deal.risk === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-400' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400'
                  }`}>
                    {deal.risk} Risk
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Value: </span>
                    <span className="font-medium text-gray-900 dark:text-white">${deal.value.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Probability: </span>
                    <span className="font-medium text-gray-900 dark:text-white">{deal.probability}%</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Days to Close: </span>
                    <span className="font-medium text-gray-900 dark:text-white">{deal.daysToClose}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Risk Factor: </span>
                    <span className="font-medium text-gray-900 dark:text-white">{deal.reason}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Upside Potential</h3>
            <div className="text-sm text-green-600 dark:text-green-400 font-medium">
              ${upsidePotential.reduce((sum, deal) => sum + deal.value, 0).toLocaleString()} potential
            </div>
          </div>
          <div className="space-y-3">
            {upsidePotential.map((deal, index) => (
              <div key={index} className="p-4 border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20 rounded">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">{deal.deal}</h4>
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${
                    deal.potential === 'High' ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400'
                  }`}>
                    {deal.potential} Potential
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Value: </span>
                    <span className="font-medium text-gray-900 dark:text-white">${deal.value.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Probability: </span>
                    <span className="font-medium text-gray-900 dark:text-white">{deal.probability}%</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Days to Close: </span>
                    <span className="font-medium text-gray-900 dark:text-white">{deal.daysToClose}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Accelerator: </span>
                    <span className="font-medium text-gray-900 dark:text-white">{deal.accelerator}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-12">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Forecast Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ${currentData[currentData.length - 1]?.forecasted.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Next Period Forecast</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                ${currentData[currentData.length - 1]?.pipeline.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pipeline Value</div>
            </div>
            <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                ${revenueAtRisk.reduce((sum, deal) => sum + deal.value, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Revenue at Risk</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                ${upsidePotential.reduce((sum, deal) => sum + deal.value, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Upside Potential</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}