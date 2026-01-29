import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TIER_LABELS: Record<string, string> = {
  tier1: 'Tier 1 Referral',
  tier2: 'Tier 2 Authorized Access',
  tier3: 'Tier 3 Authorized Distributor',
  'not-sure': 'Not sure',
};

const REGION_LABELS: Record<string, string> = {
  eu: 'EU region',
  other: 'Other',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, region, tierInterest, message } = body;

    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }
    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }
    const companyTrimmed = company && typeof company === 'string' ? company.trim() : '';

    const regionLabel = region ? (REGION_LABELS[region] ?? region) : '—';
    const tierLabel = tierInterest ? (TIER_LABELS[tierInterest] ?? tierInterest) : '—';
    const messageText = message && typeof message === 'string' ? message.trim() : '';

    const { data, error } = await resend.emails.send({
      from: 'ViraChem Partner Form <noreply@virachemical.com>',
      to: 'info@virachemical.com',
      replyTo: email.trim(),
      subject: companyTrimmed ? `Partner Program Application: ${companyTrimmed}` : 'Partner Program Application',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #0B1F3F; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #0B1F3F; }
              .value { margin-top: 5px; }
              .footer { margin-top: 20px; padding: 15px; background-color: #f0f0f0; text-align: center; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Partner Program Application</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${escapeHtml((name as string).trim())}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${escapeHtml((email as string).trim())}</div>
                </div>
                <div class="field">
                  <div class="label">Company / Institution:</div>
                  <div class="value">${companyTrimmed ? escapeHtml(companyTrimmed) : '—'}</div>
                </div>
                <div class="field">
                  <div class="label">Region or country:</div>
                  <div class="value">${escapeHtml(regionLabel)}</div>
                </div>
                <div class="field">
                  <div class="label">Tier of interest:</div>
                  <div class="value">${escapeHtml(tierLabel)}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${messageText ? escapeHtml(messageText).replace(/\n/g, '<br>') : '—'}</div>
                </div>
              </div>
              <div class="footer">
                <p>This application was submitted via the ViraChem Partner Program form.</p>
                <p>Reply directly to this email to respond to ${escapeHtml((name as string).trim())}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send application' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Partner apply error:', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (ch) => map[ch] ?? ch);
}
