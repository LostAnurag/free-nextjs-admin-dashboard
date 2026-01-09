"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { crmTheme, statusColors } from "@/lib/theme";
import { ProspectTableSkeleton } from "@/components/ui/Skeleton";

interface Lead {
  id: string;
  lead_name: string;
  email_address: string;
  phone_number: string;
  company_name: string;
  company_industry: string;
  lead_status: string;
  lead_source: string;
  created_date: string;
}

export default function ProspectsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [prospects, setProspects] = useState<Lead[]>([]);
  const [deleteModal, setDeleteModal] = useState<{ show: boolean; prospect: Lead | null }>({ show: false, prospect: null });
  const [confirmName, setConfirmName] = useState("");

  useEffect(() => {
    fetchProspects();
    
    // Set up realtime subscription
    const channel = supabase
      .channel('leads-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'leads' },
        (payload) => {
          console.log('Realtime change:', payload);
          
          if (payload.eventType === 'INSERT') {
            setProspects(prev => [payload.new as Lead, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setProspects(prev => prev.map(p => 
              p.id === payload.new.id ? payload.new as Lead : p
            ));
          } else if (payload.eventType === 'DELETE') {
            setProspects(prev => prev.filter(p => p.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchProspects = async () => {
    try {
      console.log('Fetching prospects...');
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_date', { ascending: false });
      
      console.log('Supabase response:', { data, error });
      
      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      console.log('Prospects fetched:', data?.length || 0);
      setProspects(data || []);
    } catch (error) {
      console.error('Error fetching prospects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteModal.prospect || confirmName !== deleteModal.prospect.lead_name) return;
    
    try {
      const { error } = await supabase
        .from('leads')
        .delete()
        .eq('id', deleteModal.prospect.id);
      
      if (error) throw error;
      setDeleteModal({ show: false, prospect: null });
      setConfirmName("");
      // No need to manually update state - realtime will handle it
    } catch (error) {
      console.error('Error deleting prospect:', error);
    }
  };

  const getStatusColor = (status: string) => {
    const statusKey = status.toLowerCase() as keyof typeof statusColors;
    return statusColors[statusKey] || statusColors.new;
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Prospects</h1>
          <div className="flex items-center space-x-3">
            <Link
              href="/prospects/new"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Prospect
            </Link>
          </div>
        </div>

        <div className={`${crmTheme.classes.card} ${crmTheme.classes.cardDark}`}>
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">All Prospects</h2>
              <div className="flex items-center space-x-4">
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option>All Status</option>
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Qualified</option>
                </select>
                <input
                  type="search"
                  placeholder="Search prospects..."
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </div>

          <ProspectTableSkeleton rows={8} />

          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Loading prospects...
              </span>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
                  Previous
                </button>
                <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
                  1
                </button>
                <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Prospects</h1>
        <div className="flex items-center space-x-3">
          <Link
            href="/prospects/new"
            className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg ${crmTheme.classes.button.primary}`}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New Prospect
          </Link>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">All Prospects</h2>
            <div className="flex items-center space-x-4">
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option>All Status</option>
                <option>New</option>
                <option>Contacted</option>
                <option>Qualified</option>
              </select>
              <input
                type="search"
                placeholder="Search prospects..."
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Industry</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Source</th>
                <th className="px-6 py-3">Created</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
        {prospects.length === 0 ? (
          <tr>
            <td colSpan={9} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
              No prospects found. <Link href="/prospects/new" className="text-blue-600 hover:text-blue-800">Add your first prospect</Link>
            </td>
          </tr>
        ) : (
          prospects.map((prospect) => (
                <tr 
                  key={prospect.id} 
                  onClick={() => router.push(`/prospects/${prospect.id}`)}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {prospect.lead_name}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {prospect.company_name}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {prospect.email_address}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {prospect.phone_number}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {prospect.company_industry}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getStatusColor(prospect.lead_status)}`}>
                      {prospect.lead_status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {prospect.lead_source}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {new Date(prospect.created_date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/prospects/${prospect.id}`);
                        }}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteModal({ show: true, prospect });
                        }}
                        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Showing 1 to {prospects.length} of {prospects.length} prospects
            </span>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
                Previous
              </button>
              <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      {deleteModal.show && (
        <div className="fixed inset-0 z-[99999]">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setDeleteModal({ show: false, prospect: null })}></div>
          <div className="relative flex items-center justify-center min-h-full p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Delete Prospect</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Are you sure you want to delete <span className="font-semibold">{deleteModal.prospect?.lead_name}</span>? This action cannot be undone.
            </p>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Type <span className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded">{deleteModal.prospect?.lead_name}</span> to confirm:
              </label>
              <input
                type="text"
                value={confirmName}
                onChange={(e) => setConfirmName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter prospect name"
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setDeleteModal({ show: false, prospect: null });
                  setConfirmName("");
                }}
                className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={confirmName !== deleteModal.prospect?.lead_name}
                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Delete
              </button>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}