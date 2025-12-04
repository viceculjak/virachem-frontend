#!/usr/bin/env python3
"""
Chemical Structure Image Generator for Virachem

This script generates SVG images of chemical structures from SMILES strings
using RDKit. These images are used in the product catalog.

Requirements:
- Python 3.7+
- RDKit library

Installation:
    pip install rdkit

Usage:
    python scripts/generate-images.py

The script will:
1. Read chemical structures from the products list
2. Generate 2D coordinates for each structure
3. Save SVG images to public/structures/
"""

import os
import sys

try:
    from rdkit import Chem
    from rdkit.Chem import Draw, rdDepictor
except ImportError:
    print("Error: RDKit is not installed.")
    print("Please install it using: pip install rdkit")
    sys.exit(1)

# Product data with SMILES strings
# Note: In a real application, you might want to fetch this from your database
products = [
    {
        "id": "VC-001",
        "name": "Aspirin",
        "smiles": "CC(=O)OC1=CC=CC=C1C(=O)O"
    },
    {
        "id": "VC-002",
        "name": "Caffeine",
        "smiles": "CN1C=NC2=C1C(=O)N(C(=O)N2C)C"
    },
]

def generate_structure_images():
    """Generate SVG structure images for all products."""
    
    # Create output directory if it doesn't exist
    output_dir = "public/structures"
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Generating chemical structure images...")
    print(f"Output directory: {output_dir}")
    print("-" * 50)
    
    success_count = 0
    error_count = 0
    
    for product in products:
        product_id = product["id"]
        name = product["name"]
        smiles = product["smiles"]
        
        print(f"\nProcessing: {name} ({product_id})")
        print(f"SMILES: {smiles}")
        
        try:
            # Parse SMILES string
            mol = Chem.MolFromSmiles(smiles)
            
            if mol is None:
                print(f"  ✗ Error: Invalid SMILES string")
                error_count += 1
                continue
            
            # Generate 2D coordinates
            rdDepictor.Compute2DCoords(mol)
            
            # Generate SVG image
            output_path = os.path.join(output_dir, f"{product_id}.svg")
            drawer = Draw.MolDraw2DSVG(400, 400)
            drawer.DrawMolecule(mol)
            drawer.FinishDrawing()
            
            # Save to file
            svg = drawer.GetDrawingText()
            with open(output_path, 'w') as f:
                f.write(svg)
            
            print(f"  ✓ Generated: {output_path}")
            success_count += 1
            
        except Exception as e:
            print(f"  ✗ Error: {str(e)}")
            error_count += 1
    
    # Print summary
    print("\n" + "=" * 50)
    print(f"Generation complete!")
    print(f"  Success: {success_count} images")
    print(f"  Errors:  {error_count}")
    print("=" * 50)
    
    if success_count > 0:
        print(f"\nImages saved to: {os.path.abspath(output_dir)}")
        print("\nNext steps:")
        print("1. Update image_url in your Supabase products table")
        print("   Example: /structures/VC-001.svg")
        print("2. Verify images are accessible in your Next.js app")

if __name__ == "__main__":
    print("Virachem Structure Image Generator")
    print("=" * 50)
    generate_structure_images()

