-- Virachem Database Schema
-- Execute this SQL in your Supabase SQL Editor
-- Go to: Supabase Dashboard → SQL Editor → New Query → Paste and Run

-- Table: products
-- Stores research chemical catalog items
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  cas TEXT NOT NULL,
  smiles TEXT,
  mw TEXT NOT NULL,
  purity_options TEXT[] DEFAULT ARRAY['≥95%', '≥98%', '≥99%'],
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: quote_requests
-- Stores customer quote requests
CREATE TABLE IF NOT EXISTS quote_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  institution TEXT NOT NULL,
  quantity INT NOT NULL,
  vial_size TEXT NOT NULL,
  purity TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sample product data
INSERT INTO products (name, cas, smiles, mw, purity_options, image_url) VALUES
  ('Aspirin', '50-78-2', 'CC(=O)OC1=CC=CC=C1C(=O)O', '180.16 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-001.svg'),
  ('Caffeine', '58-08-2', 'CN1C=NC2=C1C(=O)N(C(=O)N2C)C', '194.19 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-002.svg');

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for MVP (public access)
-- NOTE: For production, implement proper authentication and policies

-- Allow public read access to products
CREATE POLICY "Allow public read access to products"
  ON products FOR SELECT
  USING (true);

-- Allow public insert to quote_requests
CREATE POLICY "Allow public insert to quote_requests"
  ON quote_requests FOR INSERT
  WITH CHECK (true);

-- Allow public read to quote_requests (for admin dashboard in future)
CREATE POLICY "Allow public read to quote_requests"
  ON quote_requests FOR SELECT
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_cas ON products(cas);
CREATE INDEX IF NOT EXISTS idx_products_name ON products(name);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);

-- Success message
SELECT 'Database schema created successfully!' as message;

