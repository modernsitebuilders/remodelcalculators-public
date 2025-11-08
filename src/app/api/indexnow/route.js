import { NextResponse } from 'next/server';

const INDEXNOW_KEY = '85d27a70d7aa4d84a8eed19e81147a90';
const SITE_URL = 'https://jobcalculators.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { url, urlList } = body;

    // Validate input
    if (!url && (!urlList || !Array.isArray(urlList))) {
      return NextResponse.json(
        { error: 'Must provide either url or urlList' },
        { status: 400 }
      );
    }

    // Prepare the payload for IndexNow
    const payload = {
      host: 'jobcalculators.com',
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    };

    // Single URL or multiple URLs
    if (url) {
      payload.url = url;
    } else {
      payload.urlList = urlList;
    }

    // Submit to IndexNow (Bing endpoint - also notifies other search engines)
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: 'Successfully submitted to IndexNow',
        submitted: url || urlList,
      });
    } else {
      const errorText = await response.text();
      return NextResponse.json(
        {
          success: false,
          error: `IndexNow API error: ${response.status}`,
          details: errorText,
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit to IndexNow', details: error.message },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to verify the setup
export async function GET() {
  return NextResponse.json({
    status: 'IndexNow is configured',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    endpoint: '/api/indexnow',
  });
}