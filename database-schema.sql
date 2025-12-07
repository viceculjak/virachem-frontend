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
  formulation_requirements TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sample product data
INSERT INTO products (name, cas, smiles, mw, purity_options, image_url) VALUES
  ('Retatrutide', '2381089-83-2', 'CC(C)C[C@H](NC(=O)[C@H](CC(C)C)NC(=O)[C@H](CCCNC(N)=N)NC(=O)[C@H](CCCCN)NC(=O)[C@@H]1CCCN1C(=O)[C@H](CCCCN)NC(=O)[C@H](CO)NC(=O)[C@H](Cc1ccccc1)NC(=O)[C@@H]1CCCN1C(=O)[C@H](CCCCN)NC(=O)[C@H](C)NC(=O)[C@H](C)N)C(=O)N[C@@H](CC(C)C)C(=O)N[C@@H](Cc1c[nH]c2ccccc12)C(=O)N[C@@H](CC(C)C)C(=O)N[C@@H](CCCNC(N)=N)C(=O)NCC(=O)N[C@@H](Cc1ccccc1)C(=O)N[C@@H](CC(C)C)C(=O)N[C@@H](CO)C(=O)N[C@@H](Cc1ccccc1)C(=O)N[C@@H](CCCCN)C(=O)N[C@@H](C)C(=O)N[C@@H](CCCCN)C(=O)N[C@@H](Cc1c[nH]c2ccccc12)C(=O)N[C@@H](Cc1c[nH]c2ccccc12)C(=O)N[C@@H](CCC(=O)O)C(=O)N[C@@H](C)C(=O)N[C@@H](CCCCN)C(N)=O', '4858.6 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-001.svg'),
  ('GHK-Cu', '49557-75-7', 'N[C@@H](CC(=O)N[C@@H](Cc1c[nH]cn1)C(=O)N[C@@H](CCCCN)C(=O)O)C(=O)O', '340.38 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-002.svg');

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

