const fs = require('fs');
const path = require('path');

const partners = [
  { name: 'Max Planck Society', filename: 'max-planck.svg' },
  { name: 'Karolinska Institutet', filename: 'karolinska.svg' },
  { name: 'CNRS', filename: 'cnrs.svg' },
  { name: 'ETH Zurich', filename: 'eth.svg' },
  { name: 'EMBL', filename: 'embl.svg' },
  { name: 'Cracow University of Technology', filename: 'cracow.svg' },
  { name: 'University of Copenhagen', filename: 'copenhagen.svg' },
  { name: 'Helmholtz Association', filename: 'helmholtz.svg' },
];

const partnersDir = path.join(__dirname, '..', 'public', 'partners');

// Create directory if it doesn't exist
if (!fs.existsSync(partnersDir)) {
  fs.mkdirSync(partnersDir, { recursive: true });
}

// Generate SVG for each partner
partners.forEach(partner => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="60" fill="#F3F4F6" rx="4"/>
  <text x="100" y="35" font-family="Arial, sans-serif" font-size="12" font-weight="600" fill="#0B1F3F" text-anchor="middle">
    ${partner.name}
  </text>
</svg>`;

  const filePath = path.join(partnersDir, partner.filename);
  fs.writeFileSync(filePath, svg);
  console.log(`Created: ${partner.filename}`);
});

console.log(`\n✓ Successfully created ${partners.length} partner placeholder SVGs in public/partners/`);
