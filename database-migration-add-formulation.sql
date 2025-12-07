-- Migration: Add formulation_requirements column to quote_requests table
-- Execute this SQL in your Supabase SQL Editor
-- Go to: Supabase Dashboard → SQL Editor → New Query → Paste and Run

-- Add the missing column
ALTER TABLE quote_requests 
ADD COLUMN IF NOT EXISTS formulation_requirements TEXT;

-- Success message
SELECT 'Column added successfully! You can now submit quotes with formulation requirements.' as message;
