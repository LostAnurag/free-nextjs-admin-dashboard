"use client";
import React, { useState } from "react";

export default function Reports() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTeamFilter, setShowTeamFilter] = useState(false);
  const [dateRange, setDateRange] = useState('This Quarter');
  const [teamFilter, setTeamFilter] = useState('All Teams');

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sales Reports</h1>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive analytics and exportable reports</p>
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
                    {['All Teams', "John Smith's Team", "Sarah Wilson's Team", "Mike Johnson's Team"].map((team) => (
                      <button
                        key={team}
                        onClick={() => { setTeamFilter(team); setShowTeamFilter(false); }}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                      >
                        {team}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
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
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="p-3 space-y-2">
                    {['This Week', 'This Month', 'This Quarter', 'This Year', 'Last Quarter', 'Last Year'].map((option) => (
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
      </div>

      <div className="col-span-12 lg:col-span-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Performance Report</h3>
            <button className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Alice Miller</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Revenue: $285K • Deals: 12 • Target: 125%</div>
              </div>
              <div className="text-green-600 dark:text-green-400 font-semibold">+$17K</div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Bob Johnson</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Revenue: $195K • Deals: 15 • Target: 96%</div>
              </div>
              <div className="text-yellow-600 dark:text-yellow-400 font-semibold">-$3K</div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Carol Davis</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Revenue: $165K • Deals: 9 • Target: 69%</div>
              </div>
              <div className="text-red-600 dark:text-red-400 font-semibold">-$20K</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pipeline Report</h3>
            <button className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Negotiation Stage</span>
                <div className="text-sm text-red-600 dark:text-red-400">Avg: 15.2 days • 12 deals • $120K</div>
              </div>
              <span className="text-red-600 dark:text-red-400 text-sm font-medium">Bottleneck</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Demo Stage</span>
                <div className="text-sm text-yellow-600 dark:text-yellow-400">Avg: 12.5 days • 28 deals • $240K</div>
              </div>
              <span className="text-yellow-600 dark:text-yellow-400 text-sm font-medium">Slow</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Qualified Stage</span>
                <div className="text-sm text-green-600 dark:text-green-400">Avg: 7.1 days • 68 deals • $320K</div>
              </div>
              <span className="text-green-600 dark:text-green-400 text-sm font-medium">Healthy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Activity Report</h3>
            <button className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">142</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Calls</div>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">89</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Emails Sent</div>
              </div>
              <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">34</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Meetings</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Alice Miller</span>
                <span className="text-gray-900 dark:text-white">45 calls • 28 emails • 12 meetings</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Bob Johnson</span>
                <span className="text-gray-900 dark:text-white">52 calls • 31 emails • 15 meetings</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Carol Davis</span>
                <span className="text-gray-900 dark:text-white">28 calls • 18 emails • 6 meetings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Conversion Funnel Report</h3>
            <button className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">LinkedIn Outreach</span>
                <div className="text-sm text-green-600 dark:text-green-400">156 leads • 42% conversion • $285K revenue</div>
              </div>
              <span className="text-green-600 dark:text-green-400 text-sm font-medium">Best</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Email Campaigns</span>
                <div className="text-sm text-blue-600 dark:text-blue-400">89 leads • 38% conversion • $195K revenue</div>
              </div>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Good</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Cold Calling</span>
                <div className="text-sm text-yellow-600 dark:text-yellow-400">124 leads • 28% conversion • $165K revenue</div>
              </div>
              <span className="text-yellow-600 dark:text-yellow-400 text-sm font-medium">Average</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Cycle Analysis</h3>
            <button className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>
          </div>
          <div className="space-y-3">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">42 days</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Sales Cycle</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">-3 days vs last quarter</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Prospect → Connected</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Connected → Qualified</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">72%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Qualified → Demo</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">65%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Demo → Closed Won</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">42%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Team Quota Report</h3>
            <button className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Alice Miller</span>
                <div className="text-sm text-green-600 dark:text-green-400">Target: $68K • Actual: $85K</div>
              </div>
              <div className="text-right">
                <div className="text-green-600 dark:text-green-400 font-semibold">125%</div>
                <div className="text-xs text-green-600 dark:text-green-400">+$17K</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Bob Johnson</span>
                <div className="text-sm text-yellow-600 dark:text-yellow-400">Target: $75K • Actual: $72K</div>
              </div>
              <div className="text-right">
                <div className="text-yellow-600 dark:text-yellow-400 font-semibold">96%</div>
                <div className="text-xs text-yellow-600 dark:text-yellow-400">-$3K</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Carol Davis</span>
                <div className="text-sm text-red-600 dark:text-red-400">Target: $65K • Actual: $45K</div>
              </div>
              <div className="text-right">
                <div className="text-red-600 dark:text-red-400 font-semibold">69%</div>
                <div className="text-xs text-red-600 dark:text-red-400">-$20K</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lost Deal Analysis</h3>
            <button className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-700">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">35%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Price Too High</div>
              <div className="text-xs text-red-600 dark:text-red-400 mt-1">18 deals • $285K lost</div>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-200 dark:border-orange-700">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">28%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Competitor Won</div>
              <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">14 deals • $195K lost</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-700">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">22%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">No Budget</div>
              <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">11 deals • $165K lost</div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Timing Issues</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">8 deals • $125K lost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}