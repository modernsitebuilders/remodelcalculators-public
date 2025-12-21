/**
 * IndexNow Utility
 * Instantly notify search engines when content changes
 */

const SITE_URL = 'https://remodelcalculators.com';

/**
 * Submit a single URL to IndexNow
 * @param {string} url - Full URL to submit (e.g., 'https://remodelcalculators.com/concrete-calculator')
 */
export async function submitToIndexNow(url) {
  try {
    const response = await fetch('/api/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('✓ IndexNow submission successful:', url);
      return { success: true, url };
    } else {
      console.error('✗ IndexNow submission failed:', data.error);
      return { success: false, error: data.error };
    }
  } catch (error) {
    console.error('✗ IndexNow submission error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Submit multiple URLs to IndexNow in a single request
 * @param {string[]} urls - Array of full URLs
 */
export async function submitMultipleToIndexNow(urls) {
  try {
    const response = await fetch('/api/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ urlList: urls }),
    });

    const data = await response.json();
    
    if (data.success) {
      console.log(`✓ IndexNow batch submission successful: ${urls.length} URLs`);
      return { success: true, count: urls.length };
    } else {
      console.error('✗ IndexNow batch submission failed:', data.error);
      return { success: false, error: data.error };
    }
  } catch (error) {
    console.error('✗ IndexNow batch submission error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Helper to build full URLs from paths
 * @param {string} path - Relative path (e.g., '/concrete-calculator')
 */
export function buildUrl(path) {
  return `${SITE_URL}${path}`;
}

/**
 * Submit all calculator pages (useful for initial setup or after major changes)
 */
export async function submitAllCalculators() {
  const calculatorPaths = [
    '/concrete-calculator',
    '/drywall-calculator',
    '/roofing-calculator',
    '/paint-calculator',
    '/exterior-paint-calculator',
    '/flooring-calculator',
    '/fence-calculator',
    '/siding-calculator',
    '/deck-stain-calculator',
    '/mulch-calculator',
  ];

  const urls = calculatorPaths.map(path => buildUrl(path));
  return submitMultipleToIndexNow(urls);
}

/**
 * Submit homepage and main pages
 */
export async function submitMainPages() {
  const mainPaths = ['/', '/blog', '/about', '/contact'];
  const urls = mainPaths.map(path => buildUrl(path));
  return submitMultipleToIndexNow(urls);
}