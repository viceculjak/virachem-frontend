#!/usr/bin/env python3
"""
Generate SQL INSERT statements for ViraChem product catalog
"""

import json

def escape_sql_string(s):
    """Escape single quotes for SQL"""
    if s is None:
        return 'NULL'
    return f"'{s.replace('(', '').replace(')', '')}'" if s != 'NULL' else 'NULL'

def main():
    """Generate SQL inserts"""
    with open('products-data-with-images.json', 'r') as f:
        products = json.load(f)
    
    sql_lines = []
    sql_lines.append("-- ViraChem Product Catalog - New Products")
    sql_lines.append("-- Generated automatically from product research")
    sql_lines.append("-- Execute this in your Supabase SQL Editor")
    sql_lines.append("")
    sql_lines.append("-- Insert new products")
    sql_lines.append("INSERT INTO products (name, cas, smiles, mw, purity_options, image_url) VALUES")
    
    insert_values = []
    for product in products:
        name = product['name']
        cas = product.get('cas', 'N/A')
        smiles = product.get('smiles') or None
        mw = product.get('molecular_weight', 'N/A')
        image_url = product.get('image_url', '')
        
        # Format SQL values
        name_sql = escape_sql_string(name)
        cas_sql = escape_sql_string(cas)
        smiles_sql = escape_sql_string(smiles) if smiles else 'NULL'
        mw_sql = escape_sql_string(mw)
        image_sql = escape_sql_string(image_url)
        
        insert_values.append(
            f"  ({name_sql}, {cas_sql}, {smiles_sql}, {mw_sql}, ARRAY['≥95%', '≥98%', '≥99%'], {image_sql})"
        )
    
    sql_lines.append(",\n".join(insert_values) + ";")
    sql_lines.append("")
    sql_lines.append("-- Success message")
    sql_lines.append(f"SELECT '{len(products)} new products added successfully!' as message;")
    
    # Write SQL file
    output_file = '../database-new-products.sql'
    with open(output_file, 'w') as f:
        f.write('\n'.join(sql_lines))
    
    print("=" * 60)
    print("SQL Generation Complete!")
    print("=" * 60)
    print(f"\nGenerated INSERT statements for {len(products)} products")
    print(f"Output file: {output_file}")
    print("\nTo import:")
    print("1. Go to Supabase Dashboard → SQL Editor")
    print("2. Create new query")
    print("3. Copy and paste the contents of database-new-products.sql")
    print("4. Run the query")

if __name__ == "__main__":
    main()
