#!/usr/bin/env python3
"""
Product Data Research Script for ViraChem Catalog
Fetches CAS numbers, molecular weights, and SMILES strings from PubChem API
"""

import requests
import json
import time
from typing import Dict, Optional, List

# Product list from user
PRODUCTS = [
    # Peptides
    {"name": "Semaglutide", "category": "peptide"},
    {"name": "Tirzepatide", "category": "peptide"},
    {"name": "BPC-157", "category": "peptide"},
    {"name": "TB-500", "category": "peptide"},
    {"name": "BPC-157 + TB-500 Mix", "category": "mixture"},
    {"name": "Epithalon", "category": "peptide"},
    {"name": "PT-141", "alt_name": "Bremelanotide", "category": "peptide"},
    {"name": "HGH Fragment 176-191", "category": "peptide"},
    {"name": "Melanotan 2", "category": "peptide"},
    {"name": "CJC-1295 DAC", "category": "peptide"},
    {"name": "GHRP-2", "category": "peptide"},
    {"name": "GHRP-6", "category": "peptide"},
    {"name": "Selank", "category": "peptide"},
    {"name": "Semax", "category": "peptide"},
    {"name": "MOTS-C", "category": "peptide"},
    # SARMs
    {"name": "GW-501516", "alt_name": "Cardarine", "category": "sarm"},
    {"name": "Ostarine", "alt_name": "MK-2866", "category": "sarm"},
    {"name": "Ligandrol", "alt_name": "LGD-4033", "category": "sarm"},
    {"name": "Ibutamoren", "alt_name": "MK-677", "category": "sarm"},
    {"name": "Stenabolic", "alt_name": "SR-9009", "category": "sarm"},
    # Supplements/Other
    {"name": "Yohimbine HCL", "category": "supplement"},
    {"name": "Oral BPC-157", "category": "supplement"},
    {"name": "Oral Epithalon", "category": "supplement"},
    {"name": "NAD+", "alt_name": "Nicotinamide Adenine Dinucleotide", "category": "supplement"},
    {"name": "Lipo NAD+", "category": "supplement"},
    {"name": "NAD+ Capsules", "category": "supplement"},
    {"name": "Bluemethyl", "category": "supplement"},
    {"name": "SLU-PP-332", "category": "research"},
    {"name": "TUDCA", "alt_name": "Tauroursodeoxycholic acid", "category": "supplement"},
    {"name": "Bacteriostatic Water", "category": "solvent"},
]

def search_pubchem(compound_name: str) -> Optional[Dict]:
    """Search PubChem for compound data"""
    try:
        # Try exact name match first
        url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/{compound_name}/property/MolecularFormula,MolecularWeight,CanonicalSMILES,IUPACName/JSON"
        response = requests.get(url, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if 'PropertyTable' in data and 'Properties' in data['PropertyTable']:
                prop = data['PropertyTable']['Properties'][0]
                
                # Get CAS number separately
                cid = prop.get('CID')
                cas = get_cas_from_cid(cid) if cid else None
                
                return {
                    'cid': cid,
                    'cas': cas,
                    'molecular_weight': prop.get('MolecularWeight'),
                    'smiles': prop.get('CanonicalSMILES'),
                    'formula': prop.get('MolecularFormula'),
                    'iupac': prop.get('IUPACName', '')
                }
        return None
    except Exception as e:
        print(f"Error searching PubChem for {compound_name}: {e}")
        return None

def get_cas_from_cid(cid: int) -> Optional[str]:
    """Get CAS number from PubChem CID"""
    try:
        url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/{cid}/JSON"
        response = requests.get(url, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            # Navigate through the complex structure to find CAS
            if 'Record' in data:
                sections = data['Record'].get('Section', [])
                for section in sections:
                    if section.get('TOCHeading') == 'Names and Identifiers':
                        for subsection in section.get('Section', []):
                            if subsection.get('TOCHeading') == 'Other Identifiers':
                                for subsubsection in subsection.get('Section', []):
                                    if subsubsection.get('TOCHeading') == 'CAS':
                                        info = subsubsection.get('Information', [])
                                        if info and 'Value' in info[0]:
                                            return info[0]['Value'].get('StringWithMarkup', [{}])[0].get('String')
        return None
    except Exception as e:
        print(f"Error getting CAS for CID {cid}: {e}")
        return None

def research_compound(product: Dict) -> Dict:
    """Research a single compound"""
    name = product['name']
    alt_name = product.get('alt_name')
    category = product.get('category', 'unknown')
    
    print(f"\nResearching: {name}")
    
    # Special handling for certain products
    if name == "BPC-157 + TB-500 Mix":
        return {
            'name': name,
            'cas': 'N/A (Mixture)',
            'molecular_weight': 'N/A (Mixture)',
            'smiles': None,
            'formula': None,
            'category': category,
            'notes': 'Proprietary mixture of BPC-157 and TB-500'
        }
    
    if name == "Bacteriostatic Water":
        return {
            'name': name,
            'cas': '7732-18-5',  # Water CAS
            'molecular_weight': '18.015 g/mol',
            'smiles': 'O',
            'formula': 'H2O',
            'category': category,
            'notes': 'Sterile water with 0.9% benzyl alcohol'
        }
    
    # Search with primary name
    data = search_pubchem(name)
    
    # If not found, try alternate name
    if not data and alt_name:
        print(f"  Trying alternate name: {alt_name}")
        data = search_pubchem(alt_name)
    
    if data:
        result = {
            'name': name,
            'cas': data.get('cas', 'N/A'),
            'molecular_weight': f"{data.get('molecular_weight', 'N/A')} g/mol" if data.get('molecular_weight') else 'N/A',
            'smiles': data.get('smiles'),
            'formula': data.get('formula'),
            'category': category,
            'pubchem_cid': data.get('cid')
        }
        print(f"  ✓ Found: CAS {result['cas']}, MW {result['molecular_weight']}")
        return result
    else:
        print(f"  ✗ Not found in PubChem")
        return {
            'name': name,
            'cas': 'N/A',
            'molecular_weight': 'N/A',
            'smiles': None,
            'formula': None,
            'category': category,
            'notes': 'Manual research required'
        }

def main():
    """Main research function"""
    print("=" * 60)
    print("ViraChem Product Research Script")
    print("=" * 60)
    
    results = []
    
    for i, product in enumerate(PRODUCTS, 1):
        print(f"\n[{i}/{len(PRODUCTS)}]", end=" ")
        result = research_compound(product)
        results.append(result)
        
        # Rate limiting - be nice to PubChem API
        time.sleep(0.5)
    
    # Save results
    output_file = 'products-data.json'
    with open(output_file, 'w') as f:
        json.dump(results, f, indent=2)
    
    print("\n" + "=" * 60)
    print(f"Research complete! Data saved to {output_file}")
    print("=" * 60)
    
    # Summary
    found = sum(1 for r in results if r['cas'] != 'N/A')
    print(f"\nSummary:")
    print(f"  Total products: {len(results)}")
    print(f"  Found in PubChem: {found}")
    print(f"  Manual research needed: {len(results) - found}")
    
    # List items needing manual research
    manual = [r['name'] for r in results if r['cas'] == 'N/A' and r['name'] != "BPC-157 + TB-500 Mix"]
    if manual:
        print(f"\n  Items requiring manual research:")
        for item in manual:
            print(f"    - {item}")

if __name__ == "__main__":
    main()
