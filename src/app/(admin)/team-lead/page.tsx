"use client";
import React, { useState } from "react";
import { crmTheme } from "@/lib/theme";

export default function TeamLeadDashboard() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTeamFilter, setShowTeamFilter] = useState(false);
  const [showPerformanceFilter, setShowPerformanceFilter] = useState(false);
  const [dateRange, setDateRange] = useState('Last 30 days');
  const [teamFilter, setTeamFilter] = useState('All Members');
  const [performanceFilter, setPerformanceFilter] = useState('All Performance');

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Team Lead Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">John Smith's Team Performance</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <button 
                onClick={() => setShowTeamFilter(!showTeamFilter)}
                className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500"
              >
                <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{teamFilter}</span>
                <svg className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showTeamFilter && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="p-3 space-y-2">
                    {['All Members', 'Alice Miller', 'Bob Johnson', 'Carol Davis'].map((member) => (
                      <button
                        key={member}
                        onClick={() => { setTeamFilter(member); setShowTeamFilter(false); }}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                      >
                        {member}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowPerformanceFilter(!showPerformanceFilter)}
                className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500"
              >
                <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{performanceFilter}</span>
                <svg className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showPerformanceFilter && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="p-3 space-y-2">
                    {['All Performance', 'Above Target', 'On Target', 'Below Target'].map((performance) => (
                      <button
                        key={performance}
                        onClick={() => { setPerformanceFilter(performance); setShowPerformanceFilter(false); }}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                      >
                        {performance}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button 
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{dateRange}</span>
              <svg className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showDatePicker && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                <div className="p-3 space-y-2">
                  {['Last 7 days', 'Last 30 days', 'This month', 'Last month', 'This quarter'].map((option) => (
                    <button
                      key={option}
                      onClick={() => { setDateRange(option); setShowDatePicker(false); }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="col-span-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <svg className="h-6 w-6 text-[#0a3b7c] dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Team Revenue</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">$285K</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <svg className="h-6 w-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Team Win Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">78%</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <svg className="h-6 w-6 text-[#0a3b7c] dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Deal Size</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">$18K</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <svg className="h-6 w-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Deals</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">$60K</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Target</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Per BDE average</div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">6/8</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">On Track</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">75% team performance</div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">142</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Prospects</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">18 per BDE average</div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Need Coaching</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Below 70% target</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 xl:col-span-8">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Individual BDE Target vs Actual</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-700">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sm font-medium text-green-600 dark:text-green-300">AM</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Alice Miller</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Target: $68K | Actual: $85K</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-600 dark:text-green-400">125%</div>
                <div className="text-sm text-green-600 dark:text-green-400">+$17K over target</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-300">BJ</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Bob Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Target: $75K | Actual: $72K</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900 dark:text-white">96%</div>
                <div className="text-sm text-yellow-600 dark:text-yellow-400">-$3K under target</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-700">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-300">CD</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Carol Davis</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Target: $65K | Actual: $45K</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-red-600 dark:text-red-400">69%</div>
                <div className="text-sm text-red-600 dark:text-red-400">-$20K under target</div>
              </div>
            </div>
            
            <div className="text-center py-2">
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View all team members</button>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sub Team Pipeline by Stage</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Prospect</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$125K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">18</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Qualified</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$95K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">12</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Demo</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$75K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">8</div>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded text-center border border-green-200 dark:border-green-700">
              <div className="w-2 h-2 bg-green-600 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-green-700 dark:text-green-300">Closed</div>
              <div className="font-semibold text-sm text-green-800 dark:text-green-200">$45K</div>
              <div className="text-xs text-green-600 dark:text-green-400">6</div>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Conversion Funnel</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Leads Generated</span>
              <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">156</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Qualified Leads</span>
              <span className="text-lg font-semibold text-green-600 dark:text-green-400">89 (57%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Opportunities</span>
              <span className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">34 (38%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Closed Deals</span>
              <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">18 (53%)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 xl:col-span-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Activity Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Calls Made</span>
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">142</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Emails Sent</span>
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">89</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Demos</span>
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">24</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-orange-600 dark:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Meetings</span>
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">34</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">BDE Coaching Needs</h3>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-700">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-red-800 dark:text-red-300">Carol Davis</span>
                <span className="text-xs text-red-600 dark:text-red-400">High Priority</span>
              </div>
              <div className="text-xs text-red-600 dark:text-red-400">31% under target • Low call volume • Needs demo training</div>
            </div>
            
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-700">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Bob Johnson</span>
                <span className="text-xs text-yellow-600 dark:text-yellow-400">Medium Priority</span>
              </div>
              <div className="text-xs text-yellow-600 dark:text-yellow-400">4% under target • Good activity • Focus on closing</div>
            </div>
            
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-700">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-green-800 dark:text-green-300">Alice Miller</span>
                <span className="text-xs text-green-600 dark:text-green-400">Mentor Others</span>
              </div>
              <div className="text-xs text-green-600 dark:text-green-400">Exceeding targets • Share best practices</div>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Next Week's Schedule</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Team Meeting</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Monday 10:00 AM</div>
              </div>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">Weekly</span>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Carol Coaching</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Tuesday 2:00 PM</div>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded dark:bg-green-900 dark:text-green-300">1:1</span>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Pipeline Review</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Friday 11:00 AM</div>
              </div>
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded dark:bg-purple-900 dark:text-purple-300">Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}