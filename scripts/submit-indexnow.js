#!/usr/bin/env node

/**
 * IndexNow Bulk Submission Script
 * Usage: node scripts/submit-indexnow.js [all|calculators|main|url]
 */

const INDEXNOW_KEY = '85d27a70d7aa4d84a8eed19e81147a90';
const SITE_URL = 'https://jobcalculators.com';

// All calculator pages
const CALCULATOR_URLS = [
  `${SITE_URL}/concrete-calculator`,
  `${SITE_URL}/drywall-calculator`,
  `${SITE_URL}/roofing-calculator`,
  `${SITE_URL}/paint-calculator`,
  `${SITE_URL}/exterior-paint-calculator`,
  `${SITE_URL}/flooring-calculator`,
  `${SITE_URL}/fence-calculator`,
  `${SITE_URL}/siding-calculator`,
  `${SITE_URL}/deck-stain-calculator`,
  `${SITE_URL}/mulch-calculator`,
];

// Main pages
const MAIN_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/blog`,
];

async function submitToIndexNow(urls) {
  const payload = {
    host: 'jobcalculators.com',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  console.log(`\n📤 Submitting ${urls.length} URLs to IndexNow...`);
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log('✓ Successfully submitted to IndexNow');
      console.log(`  Status: ${response.status}`);
      urls.forEach(url => console.log(`  - ${url}`));
      return true;
    } else {
      const errorText = await response.text();
      console.error('✗ IndexNow API error:', response.status);
      console.error('  Details:', errorText);
      return false;
    }
  } catch (error) {
    console.error('✗ Submission error:', error.message);
    return false;
  }
}

async function main() {
  const command = process.argv[2] || 'help';

  console.log('🔍 IndexNow Submission Tool');
  console.log('============================');

  switch (command) {
    case 'all':
      console.log('Mode: Submit ALL pages');
      await submitToIndexNow([...MAIN_URLS, ...CALCULATOR_URLS]);
      break;

    case 'calculators':
      console.log('Mode: Submit calculator pages only');
      await submitToIndexNow(CALCULATOR_URLS);
      break;

    case 'main':
      console.log('Mode: Submit main pages only');
      await submitToIndexNow(MAIN_URLS);
      break;

    case 'url':
      const customUrl = process.argv[3];
      if (!customUrl) {
        console.error('✗ Error: Please provide a URL');
        console.log('Usage: node scripts/submit-indexnow.js url https://jobcalculators.com/page');
        process.exit(1);
      }
      console.log('Mode: Submit single URL');
      await submitToIndexNow([customUrl]);
      break;

    case 'help':
    default:
      console.log('\nUsage:');
      console.log('  node scripts/submit-indexnow.js all          - Submit all pages');
      console.log('  node scripts/submit-indexnow.js calculators  - Submit calculator pages');
      console.log('  node scripts/submit-indexnow.js main         - Submit main pages');
      console.log('  node scripts/submit-indexnow.js url <URL>    - Submit a specific URL');
      console.log('\nExamples:');
      console.log('  node scripts/submit-indexnow.js all');
      console.log('  node scripts/submit-indexnow.js url https://jobcalculators.com/concrete-calculator');
      break;
  }
}

main().catch(console.error);