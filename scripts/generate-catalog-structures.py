#!/usr/bin/env python3
"""
Generate molecular structure images for ViraChem product catalog
Uses RDKit to create SVG images from SMILES strings
"""

import json
from rdkit import Chem
from rdkit.Chem import Draw
import os

def generate_structure_image(smiles, output_path, mol_size=(400, 300)):
    """Generate SVG image from SMILES string"""
    try:
        mol = Chem.MolFromSmiles(smiles)
        if mol is None:
            print(f"  ✗ Could not parse SMILES: {smiles}")
            return False
        
        # Generate 2D coordinates
        from rdkit.Chem import AllChem
        AllChem.Compute2DCoords(mol)
        
        # Draw molecule
        drawer = Draw.MolDraw2DSVG(mol_size[0], mol_size[1])
        drawer.DrawMolecule(mol)
        drawer.FinishDrawing()
        
        # Save SVG
        svg = drawer.GetDrawingText()
        with open(output_path, 'w') as f:
            f.write(svg)
        
        return True
    except Exception as e:
        print(f"  ✗ Error generating image: {e}")
        return False

def create_placeholder_svg(name, output_path, size=(400, 300)):
    """Create placeholder SVG for compounds without structures"""
    svg = f'''<svg width="{size[0]}" height="{size[1]}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
    {name}
  </text>
  <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="12" fill="#9ca3af" text-anchor="middle" dominant-baseline="middle">
    Structure not available
  </text>
</svg>'''
    
    with open(output_path, 'w') as f:
        f.write(svg)
    return True

def main():
    """Generate structures for all products"""
    print("=" * 60)
    print("ViraChem Structure Generator")
    print("=" * 60)
    
    # Load product data
    with open('products-data.json', 'r') as f:
        products = json.load(f)
    
    # Create output directory
    output_dir = '../public/structures'
    os.makedirs(output_dir, exist_ok=True)
    
    # Track starting product code (skip VC-001 and VC-002 which exist)
    product_code = 3
    generated_count = 0
    placeholder_count = 0
    
    print(f"\nGenerating structures...")
    print(f"Output directory: {output_dir}\n")
    
    for product in products:
        name = product['name']
        smiles = product.get('smiles')
        output_file = f"{output_dir}/VC-{product_code:03d}.svg"
        
        print(f"[VC-{product_code:03d}] {name}")
        
        if smiles and smiles.strip():
            # Generate actual molecular structure
            if generate_structure_image(smiles, output_file):
                print(f"  ✓ Structure generated: {output_file}")
                generated_count += 1
            else:
                # Fallback to placeholder
                create_placeholder_svg(name, output_file)
                print(f"  ⚠ Placeholder created: {output_file}")
                placeholder_count += 1
        else:
            # Create placeholder for products without SMILES
            create_placeholder_svg(name, output_file)
            print(f"  ⚠ Placeholder created (no SMILES): {output_file}")
            placeholder_count += 1
        
        # Update product data with image path
        product['image_url'] = f'/structures/VC-{product_code:03d}.svg'
        product['product_code'] = f'VC-{product_code:03d}'
        
        product_code += 1
    
    # Save updated product data
    with open('products-data-with-images.json', 'w') as f:
        json.dump(products, f, indent=2)
    
    print("\n" + "=" * 60)
    print("Structure generation complete!")
    print("=" * 60)
    print(f"\nSummary:")
    print(f"  Total products: {len(products)}")
    print(f"  Structures generated: {generated_count}")
    print(f"  Placeholders created: {placeholder_count}")
    print(f"\nUpdated data saved to: products-data-with-images.json")

if __name__ == "__main__":
    main()
