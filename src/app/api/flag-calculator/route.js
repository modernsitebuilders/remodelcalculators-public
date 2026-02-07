import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  let connection;
  try {
    const formData = await request.formData();
    
    const calculatorName = formData.get('calculatorName');
    const userInputs = formData.get('userInputs');
    const expectedResult = formData.get('expectedResult');
    const issueDescription = formData.get('issueDescription');
    const referenceSource = formData.get('referenceSource') || '';
    const userEmail = formData.get('userEmail') || '';

    console.log('🔍 Checking environment variables:');
    console.log('SMTP_USER:', process.env.SMTP_USER || 'NOT SET');
    console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'SET (length: ' + process.env.SMTP_PASS.length + ')' : 'NOT SET');
    console.log('DB_USER:', process.env.DB_USER || 'NOT SET');

    // Database connection
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'calcuser',
      password: process.env.DB_PASSWORD || 'CalcPass2024!',
      database: process.env.DB_NAME || 'construction_calculators',
      port: 3306
    });

    // Insert into database
    const [result] = await connection.execute(
      `INSERT INTO calculator_flags 
       (calculator_name, user_inputs, expected_result, issue_description, reference_source, user_email, created_at) 
       VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [calculatorName, userInputs, expectedResult, issueDescription, referenceSource, userEmail]
    );

    const flagId = result.insertId;
    console.log('📊 Database insert successful. ID:', flagId);

    // FIXED: Removed the problematic condition
    // Now it will send email if both SMTP_USER and SMTP_PASS are set
    let emailSent = false;
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        console.log('🔄 Attempting to send email...');
        
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
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

USER INPUTS:
${JSON.stringify(JSON.parse(userInputs), null, 2)}

EXPECTED RESULT:
${expectedResult}

ISSUE DESCRIPTION:
${issueDescription}

REFERENCE SOURCE:
${referenceSource || 'Not provided'}

USER EMAIL:
${userEmail || 'Not provided'}
`;

        console.log('📨 Preparing to send email to: dave@modernsitebuilders.com');
        
        const info = await transporter.sendMail({
          from: process.env.SMTP_FROM || 'noreply@modernsitebuilders.com',
          to: 'dave@modernsitebuilders.com',
          subject: `Calculator Issue: ${calculatorName} (#${flagId})`,
          text: emailContent,
          replyTo: userEmail || undefined
        });

        emailSent = true;
        console.log('✅ Email sent successfully! Message ID:', info.messageId);

      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError.message);
        console.error('Error code:', emailError.code);
      }
    } else {
      console.log('⚠️ Email not sent because:');
      console.log('   SMTP_USER:', process.env.SMTP_USER ? 'SET' : 'MISSING');
      console.log('   SMTP_PASS:', process.env.SMTP_PASS ? 'SET' : 'MISSING');
    }

    // Update email_sent_at in database if email was sent
    if (emailSent) {
      await connection.execute(
        'UPDATE calculator_flags SET email_sent_at = NOW() WHERE id = ?',
        [flagId]
      );
      console.log('✅ Updated email_sent_at in database');
    }

    await connection.end();

    return NextResponse.json({ 
      success: true, 
      id: flagId,
      emailSent: emailSent,
      message: emailSent 
        ? 'Report submitted and email sent!' 
        : 'Report submitted (email notification pending)' 
    });

  } catch (error) {
    console.error('❌ Main error:', error.message);
    console.error('Stack:', error.stack);
    
    if (connection) {
      await connection.end();
    }

    return NextResponse.json(
      { 
        success: false,
        error: 'Submission failed',
        details: error.message
      },
      { status: 500 }
    );
  }
}
