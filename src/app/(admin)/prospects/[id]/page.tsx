"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { crmTheme, statusColors, scoreColors } from "@/lib/theme";

interface Prospect {
  id: string;
  lead_name: string;
  email_address: string;
  phone_number: string;
  company_name: string;
  designation: string;
  company_industry: string;
  company_size: string;
  website: string;
  country: string;
  state: string;
  city: string;
  linkedin_profile_url: string;
  lead_source: string;
  lead_status: string;
  lead_stage: string;
  lead_score: number;
  assigned_bdr: string;
  assigned_team_lead: string;
  created_date: string;
  last_contact_date: string;
  next_followup_date: string;
  budget_range: string;
  timeline: string;
  decision_maker: boolean;
  pain_points_identified: string;
  previous_interactions: number;
  preferred_contact_method: string;
  notes: string;
  tags: string[];
  last_modified_date: string;
}

export default function ProspectProfile() {
  const params = useParams();
  const router = useRouter();
  const [prospect, setProspect] = useState<Prospect | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("calls");
  const [showAddNote, setShowAddNote] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [playingCall, setPlayingCall] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchProspect(params.id as string);
    }
  }, [params.id]);

  const fetchProspect = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      setProspect(data);
    } catch (error) {
      console.error('Error fetching prospect:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600 dark:text-gray-400">Loading prospect...</div>
      </div>
    );
  }

  if (!prospect) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600 dark:text-gray-400">Prospect not found</div>
      </div>
    );
  }

  const interactions = {
    calls: [
      { 
        id: 1, 
        date: "2024-01-20", 
        time: "2:30 PM",
        duration: "25 min", 
        outcome: "Interested", 
        note: "Discussed pricing and implementation timeline. Very positive response.",
        recording: "call_recording_001.mp3",
        recordingDuration: "25:34"
      },
      { 
        id: 2, 
        date: "2024-01-18", 
        time: "10:15 AM",
        duration: "15 min", 
        outcome: "Follow-up", 
        note: "Initial discovery call. Identified pain points with current solution.",
        recording: "call_recording_002.mp3",
        recordingDuration: "15:22"
      },
      { 
        id: 3, 
        date: "2024-01-15", 
        time: "4:45 PM",
        duration: "10 min", 
        outcome: "Connected", 
        note: "First contact. Introduced our solution briefly.",
        recording: "call_recording_003.mp3",
        recordingDuration: "10:18"
      }
    ],
    emails: [
      { 
        id: 1, 
        date: "2024-01-21", 
        time: "9:30 AM",
        subject: "Proposal for TechCorp Solutions", 
        status: "Sent", 
        type: "Outbound",
        content: "Hi John, Please find attached our proposal for your requirements...",
        attachments: ["proposal_techcorp.pdf", "pricing_sheet.xlsx"]
      },
      { 
        id: 2, 
        date: "2024-01-19", 
        time: "3:15 PM",
        subject: "Re: Implementation Discussion", 
        status: "Received", 
        type: "Inbound",
        content: "Thanks for the call today. I have a few questions about the timeline...",
        attachments: []
      },
      { 
        id: 3, 
        date: "2024-01-19", 
        time: "11:00 AM",
        subject: "Follow-up: Implementation Discussion", 
        status: "Opened", 
        type: "Outbound",
        content: "Following up on our conversation yesterday...",
        attachments: []
      },
      { 
        id: 4, 
        date: "2024-01-16", 
        time: "2:20 PM",
        subject: "Nice connecting with you", 
        status: "Replied", 
        type: "Outbound",
        content: "It was great speaking with you today. As discussed...",
        attachments: []
      }
    ],
    appointments: [
      { 
        id: 1, 
        date: "2024-01-25", 
        time: "2:00 PM", 
        type: "Product Demo", 
        status: "Scheduled", 
        location: "Zoom Meeting",
        attendees: ["John Smith", "Sarah Wilson", "Mike Johnson"],
        agenda: "Product demonstration and Q&A session"
      },
      { 
        id: 2, 
        date: "2024-01-22", 
        time: "10:00 AM", 
        type: "Follow-up Call", 
        status: "Completed", 
        location: "Phone Call",
        attendees: ["John Smith"],
        agenda: "Discuss proposal feedback and next steps"
      },
      { 
        id: 3, 
        date: "2024-01-30", 
        time: "3:30 PM", 
        type: "Contract Discussion", 
        status: "Scheduled", 
        location: "Client Office",
        attendees: ["John Smith", "Legal Team", "Sarah Wilson"],
        agenda: "Review contract terms and finalize agreement"
      }
    ],
    activities: [
      { 
        id: 1, 
        date: "2024-01-21", 
        time: "4:20 PM",
        type: "LinkedIn View", 
        description: "Viewed prospect's LinkedIn profile",
        user: "Alice Miller"
      },
      { 
        id: 2, 
        date: "2024-01-20", 
        time: "5:15 PM",
        type: "Website Visit", 
        description: "Prospect visited pricing page (3 min)",
        user: "System"
      },
      { 
        id: 3, 
        date: "2024-01-19", 
        time: "1:45 PM",
        type: "Document Download", 
        description: "Downloaded product brochure",
        user: "System"
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Converted":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Qualified":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "Contacted":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "New":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    if (score >= 60) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Hot";
    if (score >= 60) return "Warm";
    return "Cold";
  };

  const updateStatus = async (newStatus: string) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ lead_status: newStatus })
        .eq('id', prospect?.id);
      
      if (error) throw error;
      if (prospect) {
        setProspect({ ...prospect, lead_status: newStatus });
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const playRecording = (recordingId: string) => {
    if (playingCall === recordingId) {
      setPlayingCall(null);
    } else {
      setPlayingCall(recordingId);
    }
  };

  const addNote = () => {
    if (!newNote.trim()) return;
    setNewNote("");
    setShowAddNote(false);
  };

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.back()}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{prospect.lead_name}</h1>
              <p className="text-gray-600 dark:text-gray-400">{prospect.designation} at {prospect.company_name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(prospect.lead_status)}`}>
                {prospect.lead_status}
              </span>
              <select 
                value={prospect.lead_status}
                onChange={(e) => updateStatus(e.target.value)}
                className="text-sm border border-gray-300 rounded px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Converted">Converted</option>
              </select>
            </div>
            {prospect.lead_score && (
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getScoreColor(prospect.lead_score)}`}>
                {getScoreLabel(prospect.lead_score)} ({prospect.lead_score}/100)
              </span>
            )}
            <button className={`px-4 py-2 rounded-lg ${crmTheme.classes.button.primary}`}>
              Edit Prospect
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Prospect Information</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
              <p className="text-gray-900 dark:text-white">{prospect.email_address}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone</label>
              <p className="text-gray-900 dark:text-white">{prospect.phone_number}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Company</label>
              <p className="text-gray-900 dark:text-white">{prospect.company_name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Industry</label>
              <p className="text-gray-900 dark:text-white">{prospect.company_industry}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Company Size</label>
              <p className="text-gray-900 dark:text-white">{prospect.company_size}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Website</label>
              <p className="text-gray-900 dark:text-white">
                <a href={prospect.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {prospect.website}
                </a>
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Location</label>
              <p className="text-gray-900 dark:text-white">{prospect.city}, {prospect.state}, {prospect.country}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Source</label>
              <p className="text-gray-900 dark:text-white">{prospect.lead_source}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Created</label>
              <p className="text-gray-900 dark:text-white">{new Date(prospect.created_date).toLocaleDateString()}</p>
            </div>
            {prospect.linkedin_profile_url && (
              <div>
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Social Profile</label>
                <p className="text-gray-900 dark:text-white">
                  <a href={prospect.linkedin_profile_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LinkedIn Profile
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-8">
        <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab("calls")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "calls"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Calls & Recordings
              </button>
              <button
                onClick={() => setActiveTab("emails")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "emails"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Emails
              </button>
              <button
                onClick={() => setActiveTab("appointments")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "appointments"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Appointments
              </button>
              <button
                onClick={() => setActiveTab("activities")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "activities"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Activities
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "calls" && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Calls & Recordings</h3>
                  <button
                    onClick={() => setShowAddNote(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Add Note
                  </button>
                </div>
                
                {showAddNote && (
                  <div className="mb-6 p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      rows={3}
                      placeholder="Add your note here..."
                    />
                    <div className="flex space-x-2 mt-3">
                      <button
                        onClick={addNote}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Save Note
                      </button>
                      <button
                        onClick={() => setShowAddNote(false)}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {interactions.calls.map((call) => (
                    <div key={call.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="font-medium text-gray-900 dark:text-white">Call - {call.date} at {call.time}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{call.duration}</span>
                        </div>
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          call.outcome === "Interested" ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" :
                          call.outcome === "Follow-up" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400" :
                          "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                        }`}>
                          {call.outcome}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{call.note}</p>
                      
                      {call.recording && (
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => playRecording(call.recording)}
                                className="flex items-center space-x-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                              >
                                {playingCall === call.recording ? (
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                  </svg>
                                ) : (
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                  </svg>
                                )}
                                <span className="text-sm">{playingCall === call.recording ? 'Pause' : 'Play'}</span>
                              </button>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                Recording: {call.recordingDuration}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </button>
                              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          {playingCall === call.recording && (
                            <div className="mt-3">
                              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-600">
                                <div className="bg-blue-600 h-2 rounded-full" style={{width: '35%'}}></div>
                              </div>
                              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                <span>8:45</span>
                                <span>{call.recordingDuration}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "emails" && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email History</h3>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Send Email
                  </button>
                </div>
                <div className="space-y-4">
                  {interactions.emails.map((email) => (
                    <div key={email.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            email.type === 'Inbound' ? 'bg-green-500' : 'bg-blue-500'
                          }`}></div>
                          <span className="font-medium text-gray-900 dark:text-white">{email.subject}</span>
                          <span className={`px-2 py-1 text-xs font-semibold rounded ${
                            email.type === 'Inbound' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                            'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                          }`}>
                            {email.type}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">{email.date} at {email.time}</span>
                          <span className={`px-2 py-1 text-xs font-semibold rounded ${
                            email.status === "Replied" ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" :
                            email.status === "Opened" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400" :
                            email.status === "Received" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400" :
                            "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                          }`}>
                            {email.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3">
                        <p className="text-sm text-gray-700 dark:text-gray-300">{email.content}</p>
                      </div>
                      
                      {email.attachments && email.attachments.length > 0 && (
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                          <div className="flex flex-wrap gap-2">
                            {email.attachments.map((attachment, index) => (
                              <span key={index} className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-gray-700 dark:text-gray-300">
                                {attachment}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-end space-x-2 mt-3">
                        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                          </svg>
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "appointments" && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Appointments</h3>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    Schedule Meeting
                  </button>
                </div>
                <div className="space-y-4">
                  {interactions.appointments.map((appointment) => (
                    <div key={appointment.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="font-medium text-gray-900 dark:text-white">{appointment.type}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{appointment.date} at {appointment.time}</span>
                        </div>
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          appointment.status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" :
                          appointment.status === "Scheduled" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400" :
                          "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Location:</p>
                          <p className="text-sm text-gray-900 dark:text-white">{appointment.location}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Attendees:</p>
                          <p className="text-sm text-gray-900 dark:text-white">{appointment.attendees.join(', ')}</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Agenda:</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{appointment.agenda}</p>
                      </div>
                      
                      <div className="flex items-center justify-end space-x-2 mt-3">
                        {appointment.status === "Scheduled" && (
                          <>
                            <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                              Join Meeting
                            </button>
                            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
                              Reschedule
                            </button>
                          </>
                        )}
                        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
                          Add to Calendar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "activities" && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activities</h3>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                    Log Activity
                  </button>
                </div>
                <div className="space-y-4">
                  {interactions.activities.map((activity) => (
                    <div key={activity.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            activity.type === 'LinkedIn View' ? 'bg-blue-100 dark:bg-blue-900' :
                            activity.type === 'Website Visit' ? 'bg-green-100 dark:bg-green-900' :
                            activity.type === 'Document Download' ? 'bg-purple-100 dark:bg-purple-900' :
                            'bg-gray-100 dark:bg-gray-700'
                          }`}>
                            {activity.type === 'LinkedIn View' && (
                              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            )}
                            {activity.type === 'Website Visit' && (
                              <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            )}
                            {activity.type === 'Document Download' && (
                              <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-900 dark:text-white">{activity.type}</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{activity.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">{activity.time}</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">by {activity.user}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}