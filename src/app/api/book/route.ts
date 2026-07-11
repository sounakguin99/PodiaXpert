import { NextResponse } from 'next/server';
import { transporter } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, date, service, symptoms, source } = body;

    if (!name || !phone || !date || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: 'podiaxpert@gmail.com',
      subject: `New Appointment Request from ${name} (${source})`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        ${symptoms ? `<h3>Symptoms/Description:</h3><p>${symptoms.replace(/\n/g, '<br>')}</p>` : ''}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Appointment request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending appointment email:', error);
    return NextResponse.json(
      { error: 'Failed to send appointment request' },
      { status: 500 }
    );
  }
}
