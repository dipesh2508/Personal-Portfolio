import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; background-color: #f9fafb;">
          
          <!-- Main Container -->
          <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%); padding: 2px;">
            
            <!-- Inner Container -->
            <div style="background: #ffffff; margin: 2px; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%); padding: 40px 30px; text-align: center;">
                <!-- Cool DR Logo -->
                <table style="width: 80px; height: 80px; margin: 0 auto 20px; background: rgba(255,255,255,0.15); border-radius: 50%; backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
                  <tr>
                    <td style="text-align: center; vertical-align: middle; width: 80px; height: 80px;">
                      <span style="font-family: 'Georgia', serif; font-size: 28px; font-weight: bold; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); letter-spacing: -1px;">DR</span>
                    </td>
                  </tr>
                </table>
                
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  New Contact Message
                </h1>
                <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 16px;">
                  Someone reached out through your portfolio
                </p>
              </div>

              <!-- Content -->
              <div style="padding: 40px 30px;">
                
                <!-- Message Card -->
                <div style="background: linear-gradient(135deg, #f0fdfa 0%, #ecfdf5 100%); border-radius: 12px; padding: 30px; margin-bottom: 30px; border-left: 4px solid #0d9488;">
                  <h2 style="color: #134e4a; margin: 0 0 20px; font-size: 20px; font-weight: 600;">
                    Message Details
                  </h2>
                  
                  <!-- Contact Info -->
                  <div style="margin-bottom: 25px;">
                    <div style="margin-bottom: 15px;">
                      <strong style="color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Name:</strong>
                      <span style="color: #111827; font-size: 16px; font-weight: 500;">${name}</span>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                      <strong style="color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Email:</strong>
                      <a href="mailto:${email}" style="color: #0d9488; text-decoration: none; font-size: 16px; font-weight: 500;">${email}</a>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                      <strong style="color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">Subject:</strong>
                      <span style="color: #111827; font-size: 16px; font-weight: 500;">${subject}</span>
                    </div>
                  </div>

                  <!-- Message Content -->
                  <div style="border-top: 1px solid #d1fae5; padding-top: 20px;">
                    <strong style="color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 15px;">Message:</strong>
                    <div style="background: white; border-radius: 8px; padding: 20px; border: 1px solid #d1fae5; line-height: 1.6;">
                      <p style="margin: 0; color: #1f2937; font-size: 15px; white-space: pre-wrap;">${message}</p>
                    </div>
                  </div>
                </div>

                <!-- Quick Actions -->
                <div style="text-align: center; margin: 30px 0;">
                  <a href="mailto:${email}?subject=Re: ${subject}" 
                     style="display: inline-block; background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%); color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(13, 148, 136, 0.3);">
                    Reply Now
                  </a>
                </div>

                <!-- Timestamp -->
                <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; font-size: 14px; margin: 0;">
                    Received on ${new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>

              <!-- Footer -->
              <div style="background: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0;">
                  This message was sent through the contact form on your portfolio website
                </p>
                <div style="margin-top: 15px;">
                  <span style="color: #0d9488; font-weight: 600; font-size: 16px;">Dipesh Ranjan</span>
                  <span style="color: #9ca3af; margin: 0 8px;">•</span>
                  <span style="color: #6b7280; font-size: 14px;">Portfolio Contact System</span>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
