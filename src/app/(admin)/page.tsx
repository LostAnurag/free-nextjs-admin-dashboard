"use client";
import React, { useState } from "react";
import { crmTheme } from "@/lib/theme";

export default function Dashboard() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTeamSelector, setShowTeamSelector] = useState(false);
  const [dateRange, setDateRange] = useState('Last 30 days');
  const [selectedTeam, setSelectedTeam] = useState('All Teams');

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Prospects</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">1,247</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <svg className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Qualified Leads</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">342</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
                <svg className="h-6 w-6 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pipeline Value</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">$2.4M</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <svg className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">27.4%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Target</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">85%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$2.1M / $2.5M</div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div className="bg-[#0a3b7c] h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Team Performance</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Above Target</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">92%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div className="bg-black h-2 rounded-full" style={{width: '92%'}}></div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Pipeline Health</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Good</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">72/100</div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div className="bg-[#0a3b7c] h-2 rounded-full" style={{width: '72%'}}></div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">+2.1%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">27.4%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div className="bg-black h-2 rounded-full" style={{width: '68%'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Performing BDEs</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-medium text-green-600 dark:text-green-300">AM</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Alice Miller</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Revenue Leader</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">$285K</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">12 deals • 85%</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-300">BJ</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Bob Johnson</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Volume Leader</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">$195K</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">15 deals • 72%</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-medium text-purple-600 dark:text-purple-300">CD</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Carol Davis</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Activity Leader</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">$165K</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">9 deals • 58%</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Pipeline Health</h3>
            <div className="space-y-4">
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-red-800 dark:text-red-300">Critical (&gt;60 days)</span>
                  <span className="text-sm font-semibold text-red-800 dark:text-red-300">8 deals</span>
                </div>
                <div className="text-xs text-red-600 dark:text-red-400">$180K • Avg: 75 days in stage</div>
              </div>
              
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">At Risk (30-60 days)</span>
                  <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">12 deals</span>
                </div>
                <div className="text-xs text-yellow-600 dark:text-yellow-400">$285K • Avg: 45 days in stage</div>
              </div>
              
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-800 dark:text-green-300">Healthy (&lt;30 days)</span>
                  <span className="text-sm font-semibold text-green-800 dark:text-green-300">24 deals</span>
                </div>
                <div className="text-xs text-green-600 dark:text-green-400">$520K • Avg: 18 days in stage</div>
              </div>
              
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400">Pipeline Health Score: <span className="font-medium text-yellow-600 dark:text-yellow-400">72/100</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-12 xl:col-span-8">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Pipeline by Stage</h3>
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
                <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="p-3 space-y-2">
                    {['Last 7 days', 'Last 30 days', 'This month', 'Last month', 'This quarter', 'This year'].map((option) => (
                      <button
                        key={option}
                        onClick={() => { setDateRange(option); setShowDatePicker(false); }}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                      >
                        {option}
                      </button>
                    ))}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Custom Range</div>
                      <div className="space-y-2">
                        <input type="date" className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                        <input type="date" className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                        <button className="w-full px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Prospect</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$450K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">125</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Connected</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$380K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">95</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Qualified</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$320K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">68</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Appointment</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$280K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">42</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Demo Done</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$240K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">28</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Proposal</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$180K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">18</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Negotiation</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$120K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">12</div>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded text-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-green-700 dark:text-green-300">Closed Won</div>
              <div className="font-semibold text-sm text-green-800 dark:text-green-200">$85K</div>
              <div className="text-xs text-green-600 dark:text-green-400">8</div>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Team Performance Overview</h3>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <button 
                  onClick={() => setShowTeamSelector(!showTeamSelector)}
                  className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{selectedTeam}</span>
                  <svg className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showTeamSelector && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                    <div className="p-3 space-y-2">
                      {['All Teams', 'Team Alpha', 'Team Beta', 'Team Gamma', 'Team Delta'].map((team) => (
                        <button
                          key={team}
                          onClick={() => { setSelectedTeam(team); setShowTeamSelector(false); }}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                          {team}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Team Alpha */}
            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Team Alpha</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">TL: Sarah Wilson • 6 BDEs</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">$485K</div>
                  <div className="text-sm text-green-600 dark:text-green-400">108% target</div>
                  <div className="w-24 bg-gray-200 rounded-full h-2 dark:bg-gray-600 mt-1">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {[
                  { name: 'Alice Miller', revenue: '$85K', quota: '125%', color: 'green' },
                  { name: 'Bob Johnson', revenue: '$78K', quota: '115%', color: 'green' },
                  { name: 'Carol Davis', revenue: '$72K', quota: '106%', color: 'green' },
                  { name: 'David Lee', revenue: '$68K', quota: '100%', color: 'blue' },
                  { name: 'Emma Wilson', revenue: '$65K', quota: '96%', color: 'yellow' },
                  { name: 'Frank Chen', revenue: '$62K', quota: '91%', color: 'yellow' }
                ].map((bde, index) => (
                  <div key={index} className="flex items-center justify-between py-1">
                    <div className="flex items-center">
                      <div className={`w-6 h-6 bg-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : 'blue'}-100 dark:bg-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : 'blue'}-900 rounded-full flex items-center justify-center mr-2`}>
                        <span className={`text-xs font-medium text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : 'blue'}-600 dark:text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : 'blue'}-300`}>
                          {bde.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-gray-700 dark:text-gray-300">{bde.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-right">
                        <div className="text-xs font-medium text-gray-900 dark:text-white">{bde.revenue}</div>
                        <div className={`text-xs text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : 'blue'}-600 dark:text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : 'blue'}-400`}>{bde.quota}</div>
                      </div>
                      <div className="w-12 bg-gray-200 rounded-full h-1 dark:bg-gray-600">
                        <div className={`bg-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : 'blue'}-600 h-1 rounded-full`} style={{width: `${parseInt(bde.quota)}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Team Beta */}
            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Team Beta</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">TL: Mike Johnson • 6 BDEs</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">$425K</div>
                  <div className="text-sm text-yellow-600 dark:text-yellow-400">94% target</div>
                  <div className="w-24 bg-gray-200 rounded-full h-2 dark:bg-gray-600 mt-1">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '94%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {[
                  { name: 'Grace Park', revenue: '$75K', quota: '110%', color: 'green' },
                  { name: 'Henry Kim', revenue: '$70K', quota: '103%', color: 'green' },
                  { name: 'Ivy Zhang', revenue: '$68K', quota: '100%', color: 'blue' },
                  { name: 'Jack Brown', revenue: '$65K', quota: '96%', color: 'yellow' },
                  { name: 'Kate Smith', revenue: '$62K', quota: '91%', color: 'yellow' },
                  { name: 'Leo Garcia', revenue: '$58K', quota: '85%', color: 'red' }
                ].map((bde, index) => (
                  <div key={index} className="flex items-center justify-between py-1">
                    <div className="flex items-center">
                      <div className={`w-6 h-6 bg-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-100 dark:bg-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-900 rounded-full flex items-center justify-center mr-2`}>
                        <span className={`text-xs font-medium text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-600 dark:text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-300`}>
                          {bde.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-gray-700 dark:text-gray-300">{bde.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-right">
                        <div className="text-xs font-medium text-gray-900 dark:text-white">{bde.revenue}</div>
                        <div className={`text-xs text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-600 dark:text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-400`}>{bde.quota}</div>
                      </div>
                      <div className="w-12 bg-gray-200 rounded-full h-1 dark:bg-gray-600">
                        <div className={`bg-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-600 h-1 rounded-full`} style={{width: `${Math.min(parseInt(bde.quota), 100)}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Team Gamma */}
            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Team Gamma</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">TL: Lisa Chen • 6 BDEs</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">$465K</div>
                  <div className="text-sm text-green-600 dark:text-green-400">103% target</div>
                  <div className="w-24 bg-gray-200 rounded-full h-2 dark:bg-gray-600 mt-1">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {[
                  { name: 'Maya Patel', revenue: '$82K', quota: '121%', color: 'green' },
                  { name: 'Noah Davis', revenue: '$76K', quota: '112%', color: 'green' },
                  { name: 'Olivia White', revenue: '$74K', quota: '109%', color: 'green' },
                  { name: 'Paul Martinez', revenue: '$69K', quota: '101%', color: 'green' },
                  { name: 'Quinn Taylor', revenue: '$66K', quota: '97%', color: 'yellow' },
                  { name: 'Ryan Clark', revenue: '$63K', quota: '93%', color: 'yellow' }
                ].map((bde, index) => (
                  <div key={index} className="flex items-center justify-between py-1">
                    <div className="flex items-center">
                      <div className={`w-6 h-6 bg-${bde.color === 'green' ? 'green' : 'yellow'}-100 dark:bg-${bde.color === 'green' ? 'green' : 'yellow'}-900 rounded-full flex items-center justify-center mr-2`}>
                        <span className={`text-xs font-medium text-${bde.color === 'green' ? 'green' : 'yellow'}-600 dark:text-${bde.color === 'green' ? 'green' : 'yellow'}-300`}>
                          {bde.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-gray-700 dark:text-gray-300">{bde.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-right">
                        <div className="text-xs font-medium text-gray-900 dark:text-white">{bde.revenue}</div>
                        <div className={`text-xs text-${bde.color === 'green' ? 'green' : 'yellow'}-600 dark:text-${bde.color === 'green' ? 'green' : 'yellow'}-400`}>{bde.quota}</div>
                      </div>
                      <div className="w-12 bg-gray-200 rounded-full h-1 dark:bg-gray-600">
                        <div className={`bg-${bde.color === 'green' ? 'green' : 'yellow'}-600 h-1 rounded-full`} style={{width: `${Math.min(parseInt(bde.quota), 100)}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Team Delta */}
            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Team Delta</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">TL: Tom Anderson • 6 BDEs</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">$395K</div>
                  <div className="text-sm text-red-600 dark:text-red-400">88% target</div>
                  <div className="w-24 bg-gray-200 rounded-full h-2 dark:bg-gray-600 mt-1">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {[
                  { name: 'Sam Wilson', revenue: '$72K', quota: '106%', color: 'green' },
                  { name: 'Tina Rodriguez', revenue: '$68K', quota: '100%', color: 'blue' },
                  { name: 'Uma Singh', revenue: '$65K', quota: '96%', color: 'yellow' },
                  { name: 'Victor Lee', revenue: '$62K', quota: '91%', color: 'yellow' },
                  { name: 'Wendy Chang', revenue: '$58K', quota: '85%', color: 'red' },
                  { name: 'Xavier Jones', revenue: '$55K', quota: '81%', color: 'red' }
                ].map((bde, index) => (
                  <div key={index} className="flex items-center justify-between py-1">
                    <div className="flex items-center">
                      <div className={`w-6 h-6 bg-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-100 dark:bg-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-900 rounded-full flex items-center justify-center mr-2`}>
                        <span className={`text-xs font-medium text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-600 dark:text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-300`}>
                          {bde.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-gray-700 dark:text-gray-300">{bde.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-right">
                        <div className="text-xs font-medium text-gray-900 dark:text-white">{bde.revenue}</div>
                        <div className={`text-xs text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-600 dark:text-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-400`}>{bde.quota}</div>
                      </div>
                      <div className="w-12 bg-gray-200 rounded-full h-1 dark:bg-gray-600">
                        <div className={`bg-${bde.color === 'green' ? 'green' : bde.color === 'yellow' ? 'yellow' : bde.color === 'red' ? 'red' : 'blue'}-600 h-1 rounded-full`} style={{width: `${Math.min(parseInt(bde.quota), 100)}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-12 xl:col-span-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Stage Aging Analysis</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Prospect</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">3.2 days</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">avg time</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Connected</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">5.8 days</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">avg time</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Qualified</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">7.1 days</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">avg time</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Demo Done</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">12.5 days</div>
                <div className="text-xs text-red-500 dark:text-red-400">slow</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Proposal</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">8.3 days</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">avg time</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Negotiation</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">15.2 days</div>
                <div className="text-xs text-red-500 dark:text-red-400">bottleneck</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Deal Closed</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">TechCorp - $25K</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Demo Scheduled</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">StartupXYZ - Tomorrow 2PM</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Proposal Sent</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">DesignCo - $15K proposal</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">New Lead</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">InnovateLtd - LinkedIn</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
