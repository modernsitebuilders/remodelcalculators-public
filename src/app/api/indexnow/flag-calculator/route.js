// app/api/flag-calculator/route.js
// Next.js App Router API route for calculator flag submissions

import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const calculatorName = formData.get('calculatorName');
    const userInputs = formData.get('userInputs');
    const expectedResult = formData.get('expectedResult');
    const issueDescription = formData.get('issueDescription');
    const referenceSource = formData.get('referenceSource') || '';
    const userEmail = formData.get('userEmail') || '';

    // Database connection
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    // Insert into database
    const [result] = await connection.execute(
      `INSERT INTO calculator_flags 
       (calculator_name, user_inputs, expected_result, issue_description, reference_source, user_email, created_at) 
       VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [calculatorName, userInputs, expectedResult, issueDescription, referenceSource, userEmail]
    );

    const flagId = result.insertId;

    // Send email via nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const emailContent = `
Calculator Issue Report #${flagId}

Calculator: ${calculatorName}
Submitted: ${new Date().toLocaleString()}

User Inputs:
${JSON.stringify(JSON.parse(userInputs), null, 2)}

Expected Result: ${expectedResult}

Issue Description:
${issueDescription}

Reference Source: ${referenceSource || 'Not provided'}

User Email: ${userEmail || 'Not provided'}

View in admin panel: ${process.env.NEXT_PUBLIC_BASE_URL}/admin/flags
`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@modernsitebuilders.com',
      to: 'dave@modernsitebuilders.com',
      subject: `Calculator Issue: ${calculatorName}`,
      text: emailContent,
      replyTo: userEmail || undefined
    });

    // Update email_sent_at
    await connection.execute(
      'UPDATE calculator_flags SET email_sent_at = NOW() WHERE id = ?',
      [flagId]
    );

    await connection.end();

    return NextResponse.json({ success: true, id: flagId });

  } catch (error) {
    console.error('Flag submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit flag', details: error.message },
      { status: 500 }
    );
  }
}