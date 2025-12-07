import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Insert quote request into Supabase
    const { data: insertedQuote, error: dbError } = await supabase
      .from('quote_requests')
      .insert([{
        product_id: data.product_id || null,
        name: data.name,
        email: data.email,
        institution: data.institution,
        quantity: parseInt(data.quantity),
        vial_size: data.vial_size,
        purity: data.purity,
        formulation_requirements: data.formulation_requirements || null,
        message: data.message || null,
        status: 'new'
      }])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Failed to save quote request: ${dbError.message}`);
    }

    // Fetch product details if product_id is provided
    let productInfo = '';
    if (data.product_id) {
      const { data: product } = await supabase
        .from('products')
        .select('name, cas, mw')
        .eq('id', data.product_id)
        .single();
      
      if (product) {
        productInfo = `
          <h3 style="color: #0B1F3F; margin-top: 20px;">Product Information</h3>
          <p><strong>Product:</strong> ${product.name}</p>
          <p><strong>CAS:</strong> ${product.cas}</p>
          <p><strong>Molecular Weight:</strong> ${product.mw}</p>
        `;
      }
    }

    // Send email notification via Resend
    try {
      // Check if RESEND_API_KEY is configured
      if (!process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY not configured - skipping email notification');
        console.log('Quote saved successfully but email notification was not sent');
      } else {
        // Initialize Resend only when actually sending email
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
        from: 'ViraChem Quotes <quotes@virachemical.com>',
        to: 'quotes@virachemical.com',
        replyTo: data.email,
        subject: `New Quote Request - ${data.name} (${data.institution})`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; line-height: 1.6; color: #0B1F3F; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #0B1F3F; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .field strong { color: #0B1F3F; display: inline-block; width: 180px; }
                .badge { display: inline-block; padding: 4px 12px; background-color: #E8B341; color: #0B1F3F; border-radius: 4px; font-size: 12px; font-weight: 600; margin-bottom: 10px; }
                .footer { text-align: center; margin-top: 20px; padding: 20px; color: #798996; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0; font-size: 24px;">🧪 New Quote Request</h1>
                </div>
                <div class="content">
                  <span class="badge">NEW REQUEST</span>
                  
                  <h2 style="color: #0B1F3F; margin-top: 0;">Contact Information</h2>
                  <div class="field"><strong>Name:</strong> ${data.name}</div>
                  <div class="field"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></div>
                  <div class="field"><strong>Institution:</strong> ${data.institution}</div>
                  
                  ${productInfo}
                  
                  <h3 style="color: #0B1F3F; margin-top: 20px;">Order Details</h3>
                  <div class="field"><strong>Quantity:</strong> ${data.quantity}</div>
                  <div class="field"><strong>Vial Size:</strong> ${data.vial_size}</div>
                  <div class="field"><strong>Purity Required:</strong> ${data.purity}</div>
                  
                  ${data.formulation_requirements ? `
                  <h3 style="color: #0B1F3F; margin-top: 20px;">Formulation Requirements</h3>
                  <p style="background-color: white; padding: 15px; border-left: 3px solid #C9364F; border-radius: 4px;">${data.formulation_requirements}</p>
                  ` : ''}
                  
                  ${data.message ? `
                  <h3 style="color: #0B1F3F; margin-top: 20px;">Additional Comments</h3>
                  <p style="background-color: white; padding: 15px; border-left: 3px solid #C9364F; border-radius: 4px;">${data.message}</p>
                  ` : ''}
                </div>
                <div class="footer">
                  <p>This quote request was submitted via virachemical.com</p>
                  <p style="margin: 5px 0;">ViraChem j.d.o.o. | Pujanke 24A, 21000 Split, Croatia</p>
                  <p style="margin: 5px 0;">MBS: 060500406 | OIB: 73782597071</p>
                </div>
              </div>
            </body>
          </html>
        `,
        });
      }
    } catch (emailError) {
      // Log email error but don't fail the request - quote is already saved
      console.error('Email sending error:', emailError);
      // You might want to set up email retry logic here
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quote_id: insertedQuote.id 
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to process quote request' 
      },
      { status: 500 }
    );
  }
}
