-- Create leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255),
  company_industry VARCHAR(100),
  company_size VARCHAR(50),
  company_website VARCHAR(255),
  job_title VARCHAR(255),
  phone_number VARCHAR(50),
  email_address VARCHAR(255),
  country VARCHAR(100),
  state VARCHAR(100),
  city VARCHAR(100),
  lead_source VARCHAR(100),
  lead_score INTEGER DEFAULT 0 CHECK (lead_score >= 0 AND lead_score <= 100),
  lead_status VARCHAR(50) DEFAULT 'New',
  lead_stage VARCHAR(50) DEFAULT 'Prospecting',
  assigned_bdr VARCHAR(255),
  assigned_team_lead VARCHAR(255),
  created_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_contact_date TIMESTAMP WITH TIME ZONE,
  next_followup_date TIMESTAMP WITH TIME ZONE,
  budget_range VARCHAR(100),
  timeline VARCHAR(100),
  decision_maker BOOLEAN DEFAULT FALSE,
  pain_points_identified TEXT,
  previous_interactions INTEGER DEFAULT 0,
  preferred_contact_method VARCHAR(50),
  linkedin_profile_url VARCHAR(500),
  notes TEXT,
  tags TEXT[],
  attachments JSONB,
  last_modified_date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX idx_leads_email ON leads(email_address);
CREATE INDEX idx_leads_company ON leads(company_name);
CREATE INDEX idx_leads_status ON leads(lead_status);
CREATE INDEX idx_leads_assigned_bdr ON leads(assigned_bdr);

-- Insert sample data
INSERT INTO leads (
  lead_name, company_name, company_industry, job_title, phone_number, 
  email_address, country, state, city, lead_source, lead_score, 
  lead_status, assigned_bdr, budget_range
) VALUES 
(
  'John Smith', 'TechCorp Solutions', 'Technology', 'VP of Engineering',
  '+1 (555) 123-4567', 'john.smith@techcorp.com', 'USA', 'California', 
  'San Francisco', 'LinkedIn', 85, 'Qualified', 'Alice Miller', '$40,000-$60,000'
),
(
  'Sarah Johnson', 'Design Studio Pro', 'Design', 'Creative Director',
  '+1 (555) 987-6543', 'sarah@designstudio.com', 'USA', 'New York',
  'New York', 'Website', 65, 'New', 'Bob Wilson', '$20,000-$40,000'
),
(
  'Mike Wilson', 'Startup Inc', 'SaaS', 'CTO',
  '+1 (555) 456-7890', 'mike@startup.io', 'USA', 'Texas',
  'Austin', 'Referral', 75, 'Contacted', 'Carol Davis', '$30,000-$50,000'
);