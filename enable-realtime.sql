-- Enable realtime for leads table
ALTER PUBLICATION supabase_realtime ADD TABLE leads;

-- Alternative if above doesn't work:
-- DROP PUBLICATION IF EXISTS supabase_realtime;
-- CREATE PUBLICATION supabase_realtime FOR TABLE leads;