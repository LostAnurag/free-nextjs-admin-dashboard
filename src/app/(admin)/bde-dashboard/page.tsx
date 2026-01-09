"use client";
import React, { useState } from "react";
import { crmTheme } from "@/lib/theme";

export default function BDEDashboard() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState('This Month');

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Alice Miller - Business Development Executive</p>
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
                  {['This Week', 'This Month', 'Last Month', 'This Quarter'].map((option) => (
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
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Target</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">$68K</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <svg className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Current Revenue</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">$85K</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <svg className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">32%</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
                <svg className="h-6 w-6 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Prospects</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Daily Target</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">90%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">18 / 20</div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div className="bg-[#0a3b7c] h-2 rounded-full" style={{width: '90%'}}></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Calls completed</div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Quota</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">125%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$85K / $68K</div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div className="bg-black h-2 rounded-full" style={{width: '100%'}}></div>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Above target</div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Pipeline Progress</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">24 active</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$185K</div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div className="bg-[#0a3b7c] h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Total pipeline value</div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">32%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">12 / 38</div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div className="bg-black h-2 rounded-full" style={{width: '32%'}}></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Deals closed</div>
          </div>
        </div>
      </div>

      <div className="col-span-12 xl:col-span-8">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">My Pipeline by Stage</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Prospect</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$45K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">8</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Connected</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$38K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">6</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Qualified</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$32K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">4</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Demo</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$28K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">3</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Proposal</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$24K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">2</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Negotiation</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">$18K</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">1</div>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded text-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mx-auto mb-1"></div>
              <div className="text-xs text-green-700 dark:text-green-300">Closed Won</div>
              <div className="font-semibold text-sm text-green-800 dark:text-green-200">$85K</div>
              <div className="text-xs text-green-600 dark:text-green-400">12</div>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Leads This Week</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">TechCorp Solutions</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Demo scheduled • $25K potential</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-green-600 dark:text-green-400">Hot</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Tomorrow 2PM</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">StartupXYZ</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Proposal sent • $18K potential</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">Warm</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Follow up Friday</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">InnovateLtd</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Initial contact • $22K potential</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">New</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Call scheduled</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 xl:col-span-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Next Followups & Tasks</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Call TechCorp</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Demo prep call</div>
                <div className="text-xs text-red-600 dark:text-red-400">Today 3:00 PM</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Follow up StartupXYZ</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Proposal discussion</div>
                <div className="text-xs text-yellow-600 dark:text-yellow-400">Tomorrow 10:00 AM</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Send proposal</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">DesignCo requirements</div>
                <div className="text-xs text-blue-600 dark:text-blue-400">Friday 2:00 PM</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Contract signing</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">MediaCorp deal</div>
                <div className="text-xs text-green-600 dark:text-green-400">Next Monday</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Revenue Contribution</h3>
          <div className="space-y-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">$85K</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">This Month</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">125% of target</div>
            </div>
            
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$285K</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">YTD Revenue</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">18% of team total</div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$420K</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Forecast (EOY)</div>
              <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">Target: $400K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}