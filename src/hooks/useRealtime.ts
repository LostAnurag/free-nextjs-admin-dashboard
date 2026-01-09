import { useEffect, useState, useCallback, useRef } from 'react';
import { supabase } from '@/lib/supabase';

interface UseRealtimeOptions {
  table: string;
  pollInterval?: number;
}

export function useRealtime<T>(
  initialData: T[],
  { table, pollInterval = 5000 }: UseRealtimeOptions
) {
  const [data, setData] = useState<T[]>(initialData);
  const [isConnected, setIsConnected] = useState(false);
  const channelRef = useRef<any>(null);
  const pollRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const { data: freshData, error } = await supabase
        .from(table)
        .select('*')
        .order('created_date', { ascending: false });
      
      if (error) throw error;
      setData(freshData || []);
      return true;
    } catch (error) {
      console.error(`Error fetching ${table}:`, error);
      return false;
    }
  }, [table]);

  const startPolling = useCallback(() => {
    if (pollRef.current) clearInterval(pollRef.current);
    pollRef.current = setInterval(fetchData, pollInterval);
  }, [fetchData, pollInterval]);

  const stopPolling = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  const setupRealtime = useCallback(() => {
    if (channelRef.current) {
      supabase.removeChannel(channelRef.current);
    }

    channelRef.current = supabase
      .channel(`${table}-changes`)
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table },
        (payload) => {
          setData(prev => [payload.new as T, ...prev]);
        }
      )
      .on('postgres_changes', 
        { event: 'UPDATE', schema: 'public', table },
        (payload) => {
          setData(prev => 
            prev.map(item => 
              (item as any).id === payload.new.id ? payload.new as T : item
            )
          );
        }
      )
      .on('postgres_changes', 
        { event: 'DELETE', schema: 'public', table },
        (payload) => {
          setData(prev => 
            prev.filter(item => (item as any).id !== payload.old.id)
          );
        }
      )
      .subscribe((status) => {
        console.log(`Realtime ${table} status:`, status);
        
        if (status === 'SUBSCRIBED') {
          setIsConnected(true);
          stopPolling();
          if (reconnectRef.current) {
            clearTimeout(reconnectRef.current);
            reconnectRef.current = null;
          }
        } else if (status === 'CLOSED' || status === 'CHANNEL_ERROR') {
          setIsConnected(false);
          startPolling();
          
          // Attempt reconnection after 3 seconds
          reconnectRef.current = setTimeout(() => {
            setupRealtime();
          }, 3000);
        }
      });
  }, [table, startPolling, stopPolling]);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  useEffect(() => {
    // Start with polling as fallback
    startPolling();
    
    // Try to establish realtime connection
    setupRealtime();

    return () => {
      stopPolling();
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
      }
      if (reconnectRef.current) {
        clearTimeout(reconnectRef.current);
      }
    };
  }, [setupRealtime, startPolling, stopPolling]);

  return { 
    data, 
    setData, 
    isConnected,
    refresh: fetchData
  };
}